import Error from '.Error';
import SyntaxError from '.SyntaxError';

import { PropertyAccessors } from '@ltd/j-es';

import MULTI_EXPORT from './MULTI_EXPORT';
import INTERNAL from './INTERNAL';
import FALLBACK from './FALLBACK';
import POLYFILL from './POLYFILL';
import OPTIONS from './OPTIONS';

const NON_GLOBAL = /^\s*(?:eval|exports|module|require|this|__(?:dir|file)name)\s*(?![^.[])/;
const MODULE_ID = /(?<=^import [a-zA-Z_$][\w$]* from ')\.(.+)(?=';$)/mg;
const IN_GLOBAL = /^\s*globalThis\s*[.[]/;
const ASCII_DOTS = /^[a-z_$][\w$]*(?:\.[\w$]*)*$/i;

export default function get (id :string, { bom = false, tab = '\t', eol = '\n', pre = '.', sur = '' } :OPTIONS = OPTIONS) :string {
	let code :string = '';
	for ( const chunk of Chunk(parseID(id), bom, tab, eol, pre, sur) ) { code += chunk; }
	return code;
}

function * Chunk ([ chain, fallback, polyfill, exp, along ] :chain_fallback_polyfill_exp_along, bom :boolean, tab :string, eol :string, pre :string, sur :string) :IterableIterator<string> {
	
	if ( NON_GLOBAL.test(chain) ) { throw Error(`${chain} 不是全局变量`); }
	
	if ( bom ) { yield '\uFEFF'; }
	
	if ( !fallback ) {
		if ( chain in MULTI_EXPORT ) {
			yield `export default ${chain};${eol}${eol}`;
			for ( const node of MULTI_EXPORT[chain] ) {
				yield `export { ${node} }; import ${node} from '${pre}${chain}.${node}${sur}';${eol}`;
			}
			yield `${eol}[ ${MULTI_EXPORT[chain].join(', ')} ];`;
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
			yield `export default ${chain==='undefined' ? 'void 0' : chain==='Infinity' ? '1/0' : chain==='NaN' ? '0/0' : ES3Chain(chain)};`;
		}
	}
	
	else if ( !polyfill ) {
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
			yield `export default ${ES3Chain(chain)}`;
		}
	}
	
	else if ( !exp ) {
		if ( chain in POLYFILL ) {
			yield pre==='.' && sur==='' && tab==='\t' && eol==='\n'
				? POLYFILL[chain]
				: POLYFILL[chain].replace(MODULE_ID, replacer).split('\n').join(eol).split('\t').join(tab);
		}
		else if ( chain.startsWith('Map.') ) {
			yield `import Map from '${pre}Map?=${sur}';${eol}`;
			yield `export default ${ES3Chain(chain)}`;
		}
		else if ( chain.startsWith('Set.') ) {
			yield `import Set from '${pre}Set?=${sur}';${eol}`;
			yield `export default ${ES3Chain(chain)}`;
		}
		else if ( chain in MULTI_EXPORT ) {
			yield `export default ${chain};${eol}${eol}`;
			for ( const node of MULTI_EXPORT[chain] ) {
				let id :string = `${chain}.${node}`;
				if ( id in POLYFILL ) { id += '?='; }
				yield `import ${node} from '${pre}${id}${sur}'; export { ${node} };${eol}`;
			}
			yield `${eol}var $= [ ${MULTI_EXPORT[chain].join(', ')} ];${eol}`;
		}
		else { throw Error(`@ltd/j-globals 没有为 ${chain} 准备内置的 polyfill`); }
	}
	
	else {
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

function parseID (id :string) :chain_fallback_polyfill_exp_along {
	const index = id.indexOf('?=');
	if ( index>=0 ) {
		let chain :string = id.slice(0, index);
		return [ chain, '?', '=', id.slice(index+2), Along(chain, -0) ];
	}
	if ( id.endsWith('?') ) {
		let chain :string = id.slice(0, -1);
		return [ chain, '?', '', '', Along(chain, -1) ];
	}
	return [ id, '', '', '', '' ];
}

type chain_fallback_polyfill_exp_along = [ string, string, string, string, string ];

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

type Nodes = { shift () :string } & string[];
