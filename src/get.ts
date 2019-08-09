import Error from '.Error';
import SyntaxError from '.SyntaxError';

import { PropertyAccessors, isReservedWord } from '@ltd/j-es';

import MULTI_EXPORT from './MULTI_EXPORT';
import INTERNAL from './INTERNAL';
import FALLBACK from './FALLBACK';
import POLYFILL from './POLYFILL';
import OPTIONS from './OPTIONS';

const MODULE_ID = /(?<=^import [a-zA-Z_$][\w$]* from ')\.(.+)(?=';$)/mg;
const IN_GLOBAL = /^\s*globalThis\s*[.[]/;
const ASCII_DOTS = /^[a-z_$][\w$]*(?:\.[\w$]*)*$/i;
const NOT_VARIABLE = /[`~!@#%^&*()\-=+[{\]};:'",<.>/?]/;

export default function get (id :string, { bom = false, tab = '\t', eol = '\n', pre = '.', sur = '' } :OPTIONS = OPTIONS) :string {
	let code :string = '';
	for ( const chunk of Chunk(parseID(id), bom, tab, eol, pre, sur) ) { code += chunk; }
	return code;
}

function * Chunk ([ chain, multi, fallback, polyfill, exp, along ] :chain_multi_fallback_polyfill_exp_along, bom :boolean, tab :string, eol :string, pre :string, sur :string) :IterableIterator<string> {
	
	if ( bom ) { yield '\uFEFF'; }
	
	if ( !fallback ) {
		if ( multi ) {
			yield `export default ${wrap(chain)};${eol}${eol}`;
			const identifiers :string[] = [];
			for ( const node of MULTI_EXPORT[chain] ) {
				if ( isReservedWord(node) ) {
					const NODE :string = node.toUpperCase();
					yield `import ${NODE} from '${pre}${chain}.${node}${sur}'; export { ${NODE} as ${node} };${eol}`;
					identifiers.push(NODE);
				}
				else {
					yield `import ${node} from '${pre}${chain}.${node}${sur}'; export { ${node} };${eol}`;
					identifiers.push(node);
				}
			}
			yield `${eol}[ ${identifiers.join(', ')} ];`;
		}
		else if ( chain in INTERNAL ) {
			yield pre==='.' && sur==='' && tab==='\t' && eol==='\n'
				? INTERNAL[chain]
				: INTERNAL[chain].replace(MODULE_ID, replacer).split('\n').join(eol).split('\t').join(tab);
		}
		else {
			yield IN_GLOBAL.test(chain)
				? /*globalThis*/ `import globalThis from '${pre}globalThis?=${sur}';${eol}`
				: '';
			yield `export default ${
				chain==='undefined' ? 'void 0' :
					chain==='Infinity' ? '1/0' :
						chain==='NaN' ? '0/0' :
							ES3Chain(chain)
			};`;
		}
	}
	
	else if ( !polyfill ) {
		if ( multi ) { throw Error('暂不支持“.?”'); }
		if ( chain in FALLBACK ) {
			yield pre==='.' && sur==='' && tab==='\t' && eol==='\n'
				? FALLBACK[chain]
				: FALLBACK[chain].replace(MODULE_ID, replacer).split('\n').join(eol).split('\t').join(tab);
		}
		else if ( along ) {
			yield IN_GLOBAL.test(chain)
				? /*globalThis*/ `import globalThis from '${pre}globalThis?=${sur}';${eol}`
				: '';
			yield along.endsWith('"')
				? `import undefined from '${pre}undefined${sur}';${eol}`
				: '';
			yield `export default ${along} ? ${ES3Chain(chain)} : undefined;`;
		}
		else {
			yield `export default ${wrap(ES3Chain(chain))}`;
		}
	}
	
	else if ( !exp ) {
		if ( multi ) {
			yield chain in POLYFILL
				? `export { default } from '${pre}${chain}?=${sur}';${eol}${eol}`
				: `export default ${wrap(chain)};${eol}${eol}`;
			const identifiers :string[] = [];
			for ( const node of MULTI_EXPORT[chain] ) {
				let id :string = `${chain}.${node}`;
				if ( id in POLYFILL ) { id += '?='; }
				if ( isReservedWord(node) ) {
					const NODE :string = node.toUpperCase();
					yield `import ${NODE} from '${pre}${id}${sur}'; export { ${NODE} as ${node} };${eol}`;
					identifiers.push(NODE);
				}
				else {
					yield `import ${node} from '${pre}${id}${sur}'; export { ${node} };${eol}`;
					identifiers.push(node);
				}
			}
			yield `${eol}var $= [ ${identifiers.join(', ')} ];${eol}`;
		}
		else {
			if ( chain in POLYFILL ) {
				yield pre==='.' && sur==='' && tab==='\t' && eol==='\n'
					? POLYFILL[chain]
					: POLYFILL[chain].replace(MODULE_ID, replacer).split('\n').join(eol).split('\t').join(tab);
			}
			else { throw Error(`@ltd/j-globals 没有为 ${chain} 准备内置的 polyfill`); }
		}
	}
	
	else {
		if ( multi ) { throw Error('不支持“.?=*”'); }
		if ( along ) {
			yield IN_GLOBAL.test(chain)
				? /*globalThis*/ `import globalThis from '${pre}globalThis?=${sur}';${eol}`
				: '';
			yield along.endsWith('d')
				? `import undefined from '${pre}undefined${sur}';${eol}`
				: '';
			yield `export default ${along} ? ${ES3Chain(chain)} : /*#__PURE__*/ ${exp};`;
		}
		else {
			yield `export default typeof globalThis==='object' ? ${ES3Chain(chain)} : /*#__PURE__*/ ${exp};`;
		}
	}
	
	function replacer (id :string, chain :string) :string { return pre+chain+sur; }
	
}

type chain_multi_fallback_polyfill_exp_along = [ string, string, string, string, string, string ];

function parseID (id :string) :chain_multi_fallback_polyfill_exp_along {
	let chain :string;
	let multi :string;
	const index = id.indexOf('?=');
	if ( index>=0 ) {
		let chain :string = id.slice(0, index);
		if ( chain.endsWith('.') ) {
			chain = chain.slice(0, -1);
			multi = '.';
		}
		else { multi = ''; }
		return [ chain, multi, '?', '=', id.slice(index+2), Along(chain, -0) ];
	}
	if ( id.endsWith('?') ) {
		let chain :string = id.slice(0, -1);
		if ( chain.endsWith('.') ) {
			chain = chain.slice(0, -1);
			multi = '.';
		}
		else { multi = ''; }
		return [ chain, multi, '?', '', '', Along(chain, -1) ];
	}
	if ( id.endsWith('.') ) {
		chain = id.slice(0, -1);
		multi = '.';
	}
	else {
		chain = id;
		multi = '';
	}
	return [ chain, multi, '', '', '', '' ];
}

function Along (chain :string, end :number) :string {
	const rest :string[] = [];
	const nodes :Nodes = Nodes(chain);
	const first :string = nodes.shift();
	/*globalThis*/ first==='globalThis' ||
	rest.push(`typeof ${first}!=='undefined'`);
	for ( let index :number = 0, length :number = nodes.length+end; index<length; ) {
		rest.push(`${first}${PropertyAccessors(nodes.slice(0, ++index))}!==undefined`);
	}
	return rest.join(' && ');
}

function ES3Chain (chain :string) :string {
	const nodes :Nodes = Nodes(chain);
	return nodes.shift()+PropertyAccessors(nodes);
}

function Nodes (chain :string) :Nodes {
	if ( ASCII_DOTS.test(chain) ) { return chain.split('.') as Nodes; }
	throw SyntaxError('暂不支持解析非纯 ASCII 点号获取法');
}

function wrap (chain :string) :string {
	return NOT_VARIABLE.test(chain) ? chain : `(${chain})`;
}

type Nodes = { shift () :string } & string[];