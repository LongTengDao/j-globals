import create from '.Object.create';
import assign from '.Object.assign';
import hasOwnProperty from '.Object.prototype.hasOwnProperty';
import toStringTag from '.Symbol.toStringTag?';
import defineProperty from '.Object.defineProperty';
import freeze from '.Object.freeze';
import seal from '.Object.seal';
import NULL from '.null.prototype';
export default (
	/*! j-globals: default (internal) */
	function Default (exports, addOnOrigin) {
		return /*#__PURE__*/ function Module (exports, addOnOrigin) {
			if ( !addOnOrigin ) { addOnOrigin = exports; exports = create(NULL); }
			if ( assign ) { assign(exports, addOnOrigin); }
			else { for ( var key in addOnOrigin ) { if ( hasOwnProperty.call(addOnOrigin, key) ) { exports[key] = addOnOrigin[key]; } } }
			exports['default'] = exports;
			typeof exports==='function' && exports.prototype && seal(exports.prototype);
			if ( toStringTag ) {
				var descriptor = create(NULL);
				descriptor.value = 'Module';
				defineProperty(exports, toStringTag, descriptor);
			}
			return freeze(exports);
		}(exports, addOnOrigin);
	}
	/*¡ j-globals: default (internal) */
);