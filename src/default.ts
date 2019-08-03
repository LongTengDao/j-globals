import Set from '.Set';
import Map from '.Map';

import version from './version?text';
import MULTI_EXPORT from './MULTI_EXPORT';
import OPTIONS from './OPTIONS';
import get from './get';
import toTSD from './toTSD';

class Globals extends Set<string> {
	
	constructor () { super(); }
	
	//static get = get;
	
	get (this :Globals, id :string, options :OPTIONS = OPTIONS) :string {
		const got :string = get(id, options);
		this.add(id);
		return got;
	}
	
	//add
	
	toTSD (this :Globals, options :OPTIONS = OPTIONS) :string {
		return toTSD([ ...collectAll(this) ].sort().map(fetchChain), options);
	}
	
	shakingMap (this :Globals) :Map<string, string> {
		const map :Map<string, string> = new Map;
		const all :Set<string> = collectAll(this);
		for ( const fallback of all ) {
			const index :number = fallback.indexOf('?');
			if ( index>=0 ) {
				const origin :string = fallback.slice(0, index);
				all.has(origin) && map.set(fallback, origin);
			}
		}
		return map;
	}
	
}

import Default from '.default';
export default Default(Globals, {
	version,
	Globals,
	get,
});

function collectAll (globals :Globals) :Set<string> {
	const collection :Set<string> = new Set;
	for ( const id of globals ) {
		collection.add(id);
		const [ , chain, multi ] :[ string, string, string ] = fetchChain(id);
		if ( multi ) {
			collection.add(chain);
			for ( const node of MULTI_EXPORT[chain] ) { collection.add(`${chain}.${node}`); }
		}
	}
	return collection;
}

function fetchChain (id :string) :[ string, string, string ] {
	const index :number = id.indexOf('?');
	const chain_ :string = index<0 ? id : id.slice(0, index);
	return chain_.endsWith('.')
		? [ id, chain_.slice(0, -1), '.' ]
		: [ id, chain_, '' ];
}
