import TypeError from '.TypeError';
import of from '.for.of';
import { defineKeyValue } from '.native';
export default (
	/*! j-globals: Object.fromEntries (polyfill) */
	Object.fromEntries || /*#__PURE__*/ function () {
		
		function __PURE__ (entries) {
			if ( entries==null ) { throw TypeError('undefined is not iterable'); }
			var object = {};
			of(entries, function (entry) {
				if ( typeof entry!=='object' && typeof entry!=='function' || entry===null ) { throw TypeError('Iterator value '+( entry && entry.toString() )+' is not an entry object'); }
				defineKeyValue(object, entry[0], entry[1]);
			});
			return object;
		}
		
		return function fromEntries (entries) {
			return /*#__PURE__*/ __PURE__(entries);
		};
		
	}()
	/*¡ j-globals: Object.fromEntries (polyfill) */
);