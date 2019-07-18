import Error from '.Error';
import Set from '.Set';
import Map from '.Map';

import { StringLiteral } from '@ltd/j-es';

import version from './version?text';
import MULTI_EXPORT from './MULTI_EXPORT';
import OPTIONS from './OPTIONS';
import get from './get';

const TAB = /(?<=^\n*)\n\t+/;

export default class Globals extends Set<string> {
	
	static version = version;
	
	static Globals = Globals;
	
	constructor () { super(); }
	
	static get = get;
	
	get (this :Globals, id :string, options :OPTIONS = OPTIONS) :string {
		const got :string = get(id, options);
		this.add(id);
		return got;
	}
	
	//add
	
	toTSD (this :Globals, { bom = false, tab = '\t', eol = '\n', pre = '.', sur = '' } :OPTIONS = OPTIONS) :string {
		let tsd :string = '';
		let previous :string = '';
		for ( const id of [...collectAll(this)].sort() ) {
			const chain :string = fetchChain(id);
			const current :string = fetchFirst(chain);
			if ( current!==previous ) {
				previous = current;
				tsd += eol;
			}
			tsd += `declare module '${pre}${StringLiteral(id).slice(1, -1)}${sur}' { export default `;
			if ( chain in MULTI_EXPORT ) {
				tsd += `${chain};${eol}`;
				for ( const node of MULTI_EXPORT[chain] ) {
					tsd += `${tab}export { default as ${node} } from '${pre}${chain}.${node}${sur}';${eol}`;
				}
			}
			else {
				switch ( chain ) {
					
					case 'default':
						tsd += trim`Default;${eol}
							${tab}function Default<Exports extends Readonly<{ [key :string] :any, default? :Module<Exports> }>> (exports :Exports) :Module<Exports>;${eol}
							${tab}function Default<Statics extends Readonly<{ [key :string] :any, default? :ModuleFunction<Statics, Main> }>, Main extends Callable | Newable | Callable & Newable> (main :Main, statics :Statics) :ModuleFunction<Statics, Main>;${eol}
							${tab}type Module<Exports> = Readonly<Exports & { default :Module<Exports> }>;${eol}
							${tab}type ModuleFunction<Statics, Main> = Readonly<Statics & { default :ModuleFunction<Statics, Main> } & Main>;${eol}
							${tab}type Callable = (...args :any[]) => any;${eol}
							${tab}type Newable = { new (...args :any[]) :any };${eol}`;
						break;
					case 'private':
						tsd += `Private;${eol}${tab}function Private () :<T extends {}> (THIS :T) => T;${eol}`;
						break;
					case 'for.of':
						tsd += `of;${eol}${tab}function of<V extends any, T extends any> (arrayLike_iterable :Iterable<V>, callbackfn :(this :T, value :V) => void | boolean, thisArg? :T) :void;${eol}`;
						break;
					
					case 'typeof':
						tsd += trim`TYPEOF;${eol}
							${tab}function TYPEOF (value :any) :${eol}
							${tab}${tab}typeof value extends undefined ? 'undefined' :${eol}
							${tab}${tab}typeof value extends null ? 'null' :${eol}
							${tab}${tab}typeof value extends boolean ? 'boolean' :${eol}
							${tab}${tab}typeof value extends number ? 'number' :${eol}
							${tab}${tab}typeof value extends bigint ? 'bigint' :${eol}
							${tab}${tab}typeof value extends symbol ? 'symbol' :${eol}
							${tab}${tab}typeof value extends string ? 'string' :${eol}
							${tab}${tab}typeof value extends ( (...args :any[]) => any ) | { new (...args :any[]) :any } ? 'function' | 'object' : // IE6~8: typeof alert...DOM/BOM.host method==='object', alert.call===undefined${eol}
							${tab}${tab}//typeof value extends object ? 'object' | 'function' | 'undefined' : // typeof document.all==='undefined' // Chrome1~23, Safari?: typeof /RegExp/==='function' // Safari?: typeof .childNodes/children==='function'${eol}
							${tab}${tab}Exclude<string, 'boolean' | 'number' | 'string'/* | 'undefined' | 'function' | 'symbol' | 'bigint' | 'null'*/>;// typeof ( /* xhr: */ new ActiveXObject("Msxml2.XMLHTTP") ).abort==='unknown'...'date'${eol}`;
						break;
					
					case 'class.isBoolean':
						tsd += `isBoolean;${eol}${tab}function isBoolean (value :any) :value is Boolean;${eol}`;
						break;
					case 'class.isNumber':
						tsd += `isNumber;${eol}${tab}function isNumber (value :any) :value is Number;${eol}`;
						break;
					case 'class.isString':
						tsd += `isString;${eol}${tab}function isString (value :any) :value is String;${eol}`;
						break;
					case 'class.isDate':
						tsd += `isDate;${eol}${tab}function isDate (value :any) :value is Date;${eol}`;
						break;
					case 'class.isRegExp':
						tsd += `isRegExp;${eol}${tab}function isRegExp (value :any) :value is RegExp;${eol}`;
						break;
					case 'class.isMap':
						tsd += `isMap;${eol}${tab}function isMap (value :any) :value is Map;${eol}`;
						break;
					case 'class.isSet':
						tsd += `isSet;${eol}${tab}function isSet (value :any) :value is Set;${eol}`;
						break;
					case 'class.isWeakMap':
						tsd += `isWeakMap;${eol}${tab}function isWeakMap (value :any) :value is WeakMap;${eol}`;
						break;
					case 'class.isWeakSet':
						tsd += `isWeakSet;${eol}${tab}function isWeakSet (value :any) :value is WeakSet;${eol}`;
						break;
					case 'class.isPromise':
						tsd += `isPromise;${eol}${tab}function isPromise (value :any) :value is Promise<any>;${eol}`;
						break;
					case 'class.isSymbol':
						tsd += `isSymbol;${eol}${tab}function isSymbol (value :any) :value is Symbol;${eol}`;
						break;
					case 'class.isBigInt':
						tsd += `isBigInt;${eol}${tab}function isBigInt (value :any) :value is BigInt;${eol}`;
						break;
					case 'class':
						for ( const node of [
							'isBoolean', 'isNumber', 'isString', 'isDate', 'isRegExp',
							'isMap', 'isSet', 'isWeakMap', 'isWeakSet',
							'isPromise', 'isSymbol',
							'isBigInt',
						] ) {
							tsd += `${tab}export { default as ${node} } from '${pre}${chain}.${node}${sur}';${eol}`;
						}
						break;
					
					case 'null.assign':
						tsd += `assign;${eol}${tab}function assign<O extends {}> (target :null | O, firstSource :O, ...restSources :O[]) :O;${eol}`;
						break;
					case 'null.create':
						tsd += trim`create;${eol}
							${tab}function create<O extends object, OO extends PropertyDescriptorMap> (proto? :null | O, descriptorMap? :OO) :( OO extends TypedPropertyDescriptorMap<infer O> ? O : object ) & O;${eol}
							${tab}type TypedPropertyDescriptorMap<O> = { [k in keyof O] :TypedPropertyDescriptor<O[k]> };${eol}`;
						break;
					case 'null.defineProperties':
						tsd += trim`defineProperties;${eol}
							${tab}function defineProperties<O extends object, OO extends PropertyDescriptorMap> (object :O, descriptorMap :OO) :( OO extends TypedPropertyDescriptorMap<infer O> ? O : never ) & O;${eol}
							${tab}type TypedPropertyDescriptorMap<O> = { [k in keyof O] :TypedPropertyDescriptor<O[k]> };${eol}`;
						break;
					case 'null.defineProperty':
						tsd += trim`defineProperty;${eol}
							${tab}function defineProperty<O extends object, K extends string | symbol, D extends PropertyDescriptor> (object :O, key :K, descriptor :D, useReflect? :false) :( D extends TypedPropertyDescriptor<infer V> ? { [key in K] :V } : never ) & O;${eol}
							${tab}function defineProperty<O extends object, K extends string | symbol, D extends PropertyDescriptor> (object :O, key :K, descriptor :D, useReflect :true) :boolean;${eol}`;
						break;
					case 'null.fromEntries':
						tsd += `fromEntries;${eol}${tab}function fromEntries<K extends string | symbol, V extends any> (entries :Iterable<{ readonly 0: K, readonly 1: V }>) :{ [k in K] :V };${eol}`;
						break;
					case 'null.getOwnPropertyDescriptor':
						tsd += `getOwnPropertyDescriptor;${eol}${tab}function getOwnPropertyDescriptor<O extends {}, K extends Extract<keyof O, string | symbol>> (object :O, key :K) :TypedPropertyDescriptor<O[K]>;${eol}`;
						break;
					case 'null.getOwnPropertyDescriptors':
						tsd += `getOwnPropertyDescriptors;${eol}${tab}function getOwnPropertyDescriptors<O extends {}> (object :O) :{ [k in keyof O] :TypedPropertyDescriptor<O[k]> };${eol}`;
						break;
					case 'null.PropertyDescriptor':
						tsd += trim`PropertyDescriptor;${eol}
							${tab}function PropertyDescriptor<V extends any, W extends boolean, E extends boolean, C extends boolean> (value :V, writable :W, enumerable :E, configurable :C) :{ value :V, writable :W, enumerable :E, configurable :C };${eol}
							${tab}function PropertyDescriptor<G extends ( () => any ) | undefined, S extends ( (value :any) => void ) | undefined, E extends boolean, C extends boolean> (get :G, set :S, enumerable :E, configurable :C) :{ get :G, set :S, enumerable :E, configurable :C };${eol}`;
						break;
					case 'null':
						tsd += trim`NULL;${eol}
							${tab}const NULL :{${eol}
							${tab}${tab}new<ValueType extends any> () :NULL<ValueType>,${eol}
							${tab}${tab}new () :object,${eol}
							${tab}${tab}<_ extends never, Object extends object> (object :Object, define? :boolean) :Object,${eol}
							${tab}${tab}<ValueType> (object :object, define? :boolean) :NULL<ValueType>,${eol}
							${tab}};${eol}
							${tab}type NULL<ValueType> = {${eol}
							${tab}${tab}[key :string] :undefined | ValueType,${eol}
							${tab}${tab}toString? :ValueType,${eol}
							${tab}${tab}toLocaleString? :ValueType,${eol}
							${tab}${tab}valueOf? :ValueType,${eol}
							${tab}${tab}hasOwnProperty? :ValueType,${eol}
							${tab}${tab}isPrototypeOf? :ValueType,${eol}
							${tab}${tab}propertyIsEnumerable? :ValueType,${eol}
							${tab}${tab}__defineGetter__? :ValueType,${eol}
							${tab}${tab}__defineSetter__? :ValueType,${eol}
							${tab}${tab}__lookupGetter__? :ValueType,${eol}
							${tab}${tab}__lookupSetter__? :ValueType,${eol}
							${tab}${tab}__proto__? :ValueType,${eol}
							${tab}${tab}constructor? :ValueType,${eol}
							${tab}};${eol}`;
						for ( const node of [
							'assign',
							'create',
							'defineProperties',
							'defineProperty',
							'fromEntries',
							'getOwnPropertyDescriptor',
							'getOwnPropertyDescriptors',
							'PropertyDescriptor',
						] ) {
							tsd += `${tab}export { default as ${node} } from '${pre}${chain}.${node}${sur}';${eol}`;
						}
						break;
					
					case 'return':
					case 'return.sideeffects':
						tsd += `RETURN;${eol}${tab}function RETURN<T extends any> (value :T) :T;${eol}`;
						break;
					case 'return.false':
						tsd += `return_false;${eol}${tab}function return_false () :false;${eol}`;
						break;
					case 'return.true':
						tsd += `return_true;${eol}${tab}function return_true () :true;${eol}`;
						break;
					
					case 'throw':
						tsd += `THROW;${eol}${tab}function THROW (error :Error) :never;${eol}`;
						for ( const $ of [ '', 'Eval', 'Range', 'Reference', 'Syntax', 'Type', 'URI' ] ) {
							tsd += `${tab}export { default as throw${$}Error } from '${pre}${chain}.${$}Error${sur}';${eol}`;
						}
						break;
					case 'throw.Error':
					case 'throw.EvalError':
					case 'throw.RangeError':
					case 'throw.ReferenceError':
					case 'throw.SyntaxError':
					case 'throw.TypeError':
					case 'throw.URIError':
						tsd += `${chain.replace('.', '')};${eol}${tab}function ${chain.replace('.', '')} (message? :string) :never;${eol}`;
						break;
						
					case 'Object':
						tsd += trim`Object;${eol}
							${tab}const Object :{
							${tab}${tab}<T extends object> (value :T) :T;${eol}
							${tab}${tab}(value? :undefined | null) :object;${eol}
							${tab}${tab}(value :boolean) :Boolean & object;${eol}
							${tab}${tab}(value :number) :Number & object;${eol}
							${tab}${tab}(value :string) :String & object;${eol}
							${tab}${tab}(value :symbol) :Symbol & object;${eol}
							${tab}${tab}(value :bigint) :BigInt & object;${eol}
							${tab}${tab}new<T extends object> (value :T) :T;${eol}
							${tab}${tab}new (value? :undefined | null) :object;${eol}
							${tab}${tab}new (value :boolean) :Boolean & object;${eol}
							${tab}${tab}new (value :number) :Number & object;${eol}
							${tab}${tab}new (value :string) :String & object;${eol}
							${tab}${tab}new (value :symbol) :Symbol & object;${eol}
							${tab}${tab}new (value :bigint) :BigInt & object;${eol}
							${tab}};${eol}`;
						break;
					//case 'Object.create':
					//	tsd += id==='Object.create?='
					//		? `create;${eol}${tab}function create (o :object | null, properties? :undefined) :any;${eol}`
					//		: `${chain}; `;
					//	break;
					case 'Object.entries':
						tsd += `entries;${eol}${tab}function entries<T extends object> (object :T) :[Extract<string, keyof T>, T[Extract<string, keyof T>]][];${eol}`;
						break;
					case 'Object.fromEntries':
						tsd += `fromEntries;${eol}${tab}function fromEntries<K extends string | symbol, V extends any> (entries :Iterable<{ readonly 0: K, readonly 1: V }>) :{ [k in K] :V };${eol}`;
						break;
					case 'Object.keys':
						tsd += `keys;${eol}${tab}function keys<T extends object> (object :T) :Extract<string, keyof T>[];${eol}`;
						break;
					case 'Object.values':
						tsd += `values;${eol}${tab}function values<T extends object> (object :T) :T[Extract<string, keyof T>][];${eol}`;
						break;
						
					case 'Reflect.ownKeys':
						tsd += `ownKeys;${eol}${tab}function ownKeys<T extends object> (object :T) :Extract<string | symbol, keyof T>[];${eol}`;
						break;
						
					case 'Array.isArray':
						tsd += `isArray;${eol}${tab}function isArray (value :any) :value is any[] | readonly any[];${eol}`;
						break;
						
					case 'native':
						tsd += `NATIVE; const NATIVE :never; `;
						break;
						
					default:
						tsd += `${chain}; `;
						
				}
			}
			tsd += `}${eol}`;
		}
		return ( bom ? '\uFEFF' : '' )+tsd;
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
	
	static default = Globals;
	
}

function collectAll (globals :Globals) :Set<string> {
	const collection :Set<string> = new Set;
	for ( const id of globals ) {
		collection.add(id);
		const chain :string = fetchChain(id);
		if ( chain in MULTI_EXPORT ) {
			collection.add(chain);
			for ( const node of MULTI_EXPORT[chain] ) { collection.add(`${chain}.${node}`); }
		}
	}
	return collection;
}

function fetchChain (id :string) :string {
	const index :number = id.indexOf('?');
	return index<0 ? id : id.slice(0, index);
}

function fetchFirst (chain :string) :string {
	const index :number = chain.indexOf('.');
	return index<0 ? chain : chain.slice(0, index);
}

function trim (template :TemplateStringsArray, ...values :string[]) :string {
	let value :string = template[0];
	if ( value.startsWith('\n') ) { throw Error('EOL'); }
	let tab :string | undefined;
	for ( const chunk of template ) {
		const $ :RegExpExecArray | null = TAB.exec(chunk);
		if ( $ ) {
			tab = $[0];
			break;
		}
	}
	if ( !tab ) { throw Error('TAB'); }
	value = template[0].split(tab).join('').split('\n').join('');
	const length :number = values.length;
	for ( let index :number = 0; index<length; ) {
		value +=
			values[index]+
			template[++index].split(tab).join('').split('\n').join('');
	}
	if ( template[length].endsWith(tab.slice(0, -1)) ) { throw Error('EOF'); }
	return value;
}
