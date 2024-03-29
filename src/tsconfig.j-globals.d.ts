
declare module '.Array.isArray?=' { export default isArray;
	function isArray (value :any) :value is readonly any[];
}

declare module '.Date.prototype.valueOf' { export default Date.prototype.valueOf; }

declare module '.Error' { export default Error; }
declare module '.Error?=' { export default Error; }

declare module '.Infinity' { export default Infinity; }

declare module '.Map' { export default constructor;
	class constructor<K, V> extends Map<K, V> {
		constructor (entries? :Iterable<Readonly<{ 0 :K, 1 :V }>>)
	}
}
declare module '.Map.prototype.has?' { export default Map.prototype.has; }

declare module '.Object' { export default O;
	type O = Object;
	const O :{
		<T extends object> (value :T) :T;
		(value? :undefined | null) :object;
		(value :boolean) :Boolean & object;
		(value :number) :Number & object;
		(value :string) :String & object;
		(value :symbol) :Symbol & object;
		(value :bigint) :BigInt & object;
		new<T extends object> (value :T) :T;
		new (value? :undefined | null) :object;
		new (value :boolean) :Boolean & object;
		new (value :number) :Number & object;
		new (value :string) :String & object;
		new (value :symbol) :Symbol & object;
		new (value :bigint) :BigInt & object;
	} & {
		readonly [Method in keyof typeof Object] :typeof Object[Method];
	};
}
declare module '.Object.assign' { export default Object.assign; }
declare module '.Object.create' { export default create;
	function create<P extends object | null, D extends TypedPropertyDescriptorMap<object> | void> (proto :P,    descriptorMap? :D) :object & ( D extends TypedPropertyDescriptorMap<infer O> ? O : object ) & ( P extends object ? { [K in keyof P] :P[K] } : object );
	type TypedPropertyDescriptorMap<O> = { [K in keyof O] :TypedPropertyDescriptor<O[K]> };
}
declare module '.Object.create?=' { export default create;
	function create<P extends object | null> (proto :P) :P extends object ? object & { [K in keyof P] :P[K] } : object;
}
declare module '.Object.defineProperty' { export default Object.defineProperty; }
declare module '.Object.freeze' { export default Object.freeze; }
declare module '.Object.prototype.hasOwnProperty' { export default Object.prototype.hasOwnProperty; }
declare module '.Object.prototype.toString' { export default Object.prototype.toString; }
declare module '.Object.seal' { export default Object.seal; }

declare module '.RegExp' { export default RegExp; }
declare module '.RegExp.prototype.test' { export default RegExp.prototype.test; }

declare module '.Set' { export default constructor;
	class constructor<V> extends Set<V> {
		constructor (values? :Iterable<V>)
	}
}
declare module '.Set.prototype.has?' { export default Set.prototype.has; }

declare module '.Symbol.toStringTag?' { export default Symbol.toStringTag; }

declare module '.SyntaxError' { export default SyntaxError; }

declare module '.class.isDate' { export default isDate;
	function isDate (value :any) :value is Date;
}
declare module '.class.isMap' { export default isMap;
	function isMap (value :any) :value is Map<any, any>;
}
declare module '.class.isRegExp' { export default isRegExp;
	function isRegExp (value :any) :value is RegExp;
}
declare module '.class.isSet' { export default isSet;
	function isSet (value :any) :value is Set<any>;
}

declare module '.default' { export default Default;
	function Default<Exports extends Readonly<{ [key :string] :any, default? :Module<Exports> }>> (exports :Exports) :Module<Exports>;
	function Default<Statics extends Readonly<{ [key :string] :any, default? :ModuleFunction<Statics, Main> }>, Main extends Callable | Newable | Callable & Newable> (main :Main, statics :Statics) :ModuleFunction<Statics, Main>;
	type Module<Exports> = Readonly<Exports & { default :Module<Exports> }>;
	type ModuleFunction<Statics, Main> = Readonly<Statics & { default :ModuleFunction<Statics, Main> }> & Main;
	type Callable = (...args :any) => any;
	type Newable = { new (...args :any) :any };
}
declare module '.default?=' { export default Default;
	function Default<Exports extends Readonly<{ [key :string] :any, default? :Module<Exports> }>> (exports :Exports) :Module<Exports>;
	function Default<Statics extends Readonly<{ [key :string] :any, default? :ModuleFunction<Statics, Main> }>, Main extends Callable | Newable | Callable & Newable> (main :Main, statics :Statics) :ModuleFunction<Statics, Main>;
	type Module<Exports> = Readonly<Exports & { default :Module<Exports> }>;
	type ModuleFunction<Statics, Main> = Readonly<Statics & { default :ModuleFunction<Statics, Main> }> & Main;
	type Callable = (...args :any) => any;
	type Newable = { new (...args :any) :any };
}

declare module '.null.prototype' { export default NULL;
	const NULL :object | null;
}

declare module '.throw.Error' { export default throwError;
	function throwError (message? :string) :never;
}

declare module '.undefined' { export default undefined; }

declare module '.void.KEEP' { export default KEEP;
	function KEEP (...args :any[]) :void;
}
