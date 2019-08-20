import Error from '.Error';

import { StringLiteral } from '@ltd/j-es';

import MULTI_EXPORT from './MULTI_EXPORT';
import OPTIONS from './OPTIONS';

const TAB = /(?<=^\n*)\n\t+/;

export default function toTSD (all :[ string, string, string ][], { bom = false, tab = '\t', eol = '\n', pre = '.', sur = '' } :OPTIONS = OPTIONS) :string {
		let tsd :string = '';
		let previous :string = '';
		for ( const [ id, chain, multi ] of all ) {
			const current :string = fetchFirst(chain);
			if ( current!==previous ) {
				previous = current;
				tsd += eol;
			}
			tsd += `declare module '${pre}${StringLiteral(id).slice(1, -1)}${sur}' { export default `;
			if ( multi ) {
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
							${tab}type ModuleFunction<Statics, Main> = Readonly<Statics & { default :ModuleFunction<Statics, Main> }> & Main;${eol}
							${tab}type Callable = (...args :any) => any;${eol}
							${tab}type Newable = { new (...args :any) :any };${eol}`;
						break;
					case 'private':
						tsd += trim`Private;${eol}${eol}
							${tab}function Private () :{${eol}
							${tab}${tab}(instance :object) :void${eol}
							${tab}${tab}<Private extends object, Public extends object> (instance :Public) :Private${eol}
							${tab}};${eol}
							${tab}function Private<_ extends (instance :any) => object> () :_;${eol}
							${tab}function Private<Private extends object, Public extends object> () :{${eol}
							${tab}${tab}(instance :Public) :Private${eol}
							${tab}};${eol}`;
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
							${tab}${tab}typeof value extends ( (...args :any) => any ) | { new (...args :any) :any } ? 'function' | 'object' : // IE6~8: typeof alert...DOM/BOM.host method==='object', alert.call===undefined${eol}
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
						tsd += `fromEntries;${eol}${tab}function fromEntries<K extends string | symbol, V extends any> (entries :Iterable<Readonly<{ 0 :K, 1 :V }>>) :{ [k in K] :V };${eol}`;
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
					case 'null.Readonly':
						tsd += trim`Readonly;${eol}
							${tab}function Readonly<T extends object> (source :T, deep? :false) :Readonly<T>;${eol}
							${tab}function Readonly<T extends object> (source :T, deep :true) :ReadonlyDeep<T>;${eol}
							${tab}type ReadonlyDeep<T> = { [K in T] :T[K] extends object ? ReadonlyDeep<T[K]> :T[K] };`;
						break;
					case 'null':
						tsd += trim`NULL;${eol}
							${tab}const NULL :{${eol}
							${tab}${tab}new<ValueType> () :NULL<ValueType>,${eol}
							${tab}${tab}new () :object,${eol}
							${tab}${tab}<_ extends never, ObjectType extends object> (object :ObjectType) :ObjectType,${eol}
							${tab}${tab}<ValueType> (object :object) :NULL<ValueType>,${eol}
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
						tsd += trim`O;${eol}
							${tab}type O = Object;${eol}
							${tab}const O :typeof Object & {${eol}
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
					case 'Object.create':
						if ( id==='Object.create?=' ) {
							tsd += trim`create;${eol}
								${tab}function create (proto :null) :object;${eol}
								${tab}function create<P extends object> (proto :P) :object & { [K in keyof P] :P[K] };${eol}`;
						}
						else {
							tsd += trim`create;${eol}
								${tab}function create                                                                 (proto :null                  ) :object                                                                                           ;${eol}
								${tab}function create<                  D extends TypedPropertyDescriptorMap<object>> (proto :null, descriptorMap :D) :object & ( D extends TypedPropertyDescriptorMap<infer O> ? O : never )                           ;${eol}
								${tab}function create<P extends object                                              > (proto :P                     ) :object &                                                                 { [K in keyof P] :P[K] };${eol}
								${tab}function create<P extends object, D extends TypedPropertyDescriptorMap<object>> (proto :P,    descriptorMap :D) :object & ( D extends TypedPropertyDescriptorMap<infer O> ? O : never ) & { [K in keyof P] :P[K] };${eol}
								${tab}type TypedPropertyDescriptorMap<O> = { [K in keyof O] :TypedPropertyDescriptor<O[K]> };${eol}`;
						}
						break;
					case 'Object.fromEntries':
						tsd += `fromEntries;${eol}${tab}function fromEntries<K extends string | symbol, V extends any> (entries :Iterable<Readonly<{ 0 :K, 1 :V }>>) :{ [k in K] :V };${eol}`;
						break;
					case 'Object.entries':
						tsd += `entries;${eol}${tab}function entries<T extends object> (object :T) :[Extract<string, keyof T>, T[Extract<string, keyof T>]][];${eol}`;
						break;
					case 'Object.values':
						tsd += `values;${eol}${tab}function values<T extends object> (object :T) :T[Extract<string, keyof T>][];${eol}`;
						break;
					case 'Object.keys':
						tsd += `keys;${eol}${tab}function keys<T extends object> (object :T) :Extract<string, keyof T>[];${eol}`;
						break;
					case 'Object.getOwnPropertyNames':
						tsd += `getOwnPropertyNames;${eol}${tab}function getOwnPropertyNames<T extends object> (object :T) :Extract<string, keyof T>[];${eol}`;
						break;
					case 'Object.getOwnPropertySymbols':
						tsd += `getOwnPropertySymbols;${eol}${tab}function getOwnPropertySymbols<T extends object> (object :T) :Extract<symbol, keyof T>[];${eol}`;
						break;
						
					case 'Reflect.ownKeys':
						tsd += `ownKeys;${eol}${tab}function ownKeys<T extends object> (object :T) :Extract<string | symbol, keyof T>[];${eol}`;
						break;
					case 'Reflect.apply':
						tsd += `apply;${eol}${tab}function apply<This extends any, Args extends { length :number, [index :number] :any }, Target extends (this :This, ...args :Args & any[]) => any> (target :Target, thisArg :This, args :Readonly<Args>) :Target extends (this :This, ...args :Args & any[]) => infer R ? R : never;${eol}`;
						break;
					case 'Reflect.construct':
						tsd += `construct;${eol}${tab}function construct<Args extends { length :number, [index :number] :any }, Target extends new (...args :Args & any[]) => any, NewTarget extends new (...args :any) => any> (target :Target, args :Readonly<Args>, newTarget? :NewTarget) :Target extends new (...args :Args & any[]) => infer R ? R : never;${eol}`;
						break;
					
					case 'Array.isArray':
						tsd += `isArray;${eol}${tab}function isArray (value :any) :value is any[] | Readonly<any[]>;${eol}`;
						break;
					
					case 'Map':
						tsd += trim`constructor;${eol}
							${tab}class constructor<K, V> extends Map<K, V> {${eol}
							${tab}${tab}constructor (entries? :Iterable<Readonly<{ 0 :K, 1 :V }>>)${eol}
							${tab}}${eol}`;
						break;
					case 'WeakMap':
						tsd += trim`constructor;${eol}
							${tab}class constructor<K extends object, V> extends WeakMap<K, V> {${eol}
							${tab}${tab}constructor (entries? :Iterable<Readonly<{ 0 :K, 1 :V }>>)${eol}
							${tab}}${eol}`;
						break;
					case 'Set':
						tsd += trim`constructor;${eol}
							${tab}class constructor<V> extends Set<V> {${eol}
							${tab}${tab}constructor (values? :Iterable<V>)${eol}
							${tab}}${eol}`;
						break;
					case 'WeakSet':
						tsd += trim`constructor;${eol}
							${tab}class constructor<V extends object> extends WeakSet<V> {${eol}
							${tab}${tab}constructor (values? :Iterable<V>)${eol}
							${tab}}${eol}`;
						break;
						
					case 'native':
					case 'class':
						tsd += `_; const _ :never; `;
						break;
					
					default:
						tsd += `${chain}; `;
					
				}
			}
			tsd += `}${eol}`;
		}
		return ( bom ? '\uFEFF' : '' )+tsd;
	};

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
