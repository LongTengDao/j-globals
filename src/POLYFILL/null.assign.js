import Object_assign from '.Object.assign?=';
import create from '.Object.create?=';
import NULL from '.null.prototype';
export default (
	/*! j-globals: null.assign (polyfill) */
	function assign (target, firstSource) {
		if ( arguments.length>2 ) {
			if ( target===null ) { arguments[0] = create(NULL); }
			return Object_assign.apply(null, arguments);
		}
		else {
			return Object_assign(target===null ? create(NULL) : target, firstSource);
		}
	}
	/*¡ j-globals: null.assign (polyfill) */
);