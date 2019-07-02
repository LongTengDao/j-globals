import create from '.Object.create?=';
import assign from '.Object.assign';
import hasOwnProperty from '.Object.prototype.hasOwnProperty';
import toStringTag from '.Symbol.toStringTag?';
import defineProperty from '.Object.defineProperty';
import freeze from '.Object.freeze';
export default (
	/*! j-globals: default (internal) */
	/*#__PURE__*/ function () {
		if ( !assign && !{ 'toString': null }.propertyIsEnumerable('toString') ) { var keys = [ 'constructor', 'propertyIsEnumerable', 'isPrototypeOf', 'hasOwnProperty', 'valueOf', 'toLocaleString', 'toString' ]; }
		if ( freeze && toStringTag ) { var toStringTagPropertyDescriptor = create(null); toStringTagPropertyDescriptor.value = 'Module'; }
		function Module (exports, addOnOrigin) {
			if ( !addOnOrigin ) { addOnOrigin = exports; exports = create(null); }
			if ( assign ) { assign(exports, addOnOrigin); }
			else {
				for ( var key in addOnOrigin ) { if ( hasOwnProperty.call(addOnOrigin, key) ) { exports[key] = addOnOrigin[key]; } }
				if ( keys ) { for ( var index = 7; index--; ) { if ( hasOwnProperty.call(addOnOrigin, key = keys[index]) ) { exports[key] = addOnOrigin[key]; } } }
			}
			exports['default'] = exports;
			toStringTagPropertyDescriptor && defineProperty(exports, toStringTag, toStringTagPropertyDescriptor);
			return freeze ? freeze(exports) : exports;
		}
		return function Default (exports, addOnOrigin) {
			return /*#__PURE__*/ Module(exports, addOnOrigin);
		};
	}()
	/*¡ j-globals: default (internal) */
);