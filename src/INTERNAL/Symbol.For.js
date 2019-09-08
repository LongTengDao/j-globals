import create from '.Object.create';
import NULL from '.null.prototype';
export default (
	/*! j-globals: Symbol.For (internal) */
	function For () {
		var cache = create(NULL);
		var handler = create(NULL);
		handler.get = (FOR, name) => cache[name] || ( cache[name] = Symbol(name) );
		return new Proxy((name) => cache[name] || ( cache[name] = Symbol(name) ), handler);
	}
	/*¡ j-globals: Symbol.For (internal) */
);