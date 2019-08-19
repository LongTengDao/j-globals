import TypeError from '.TypeError';
import create from '.Object.create?=';
import of from '.for.of';
var Object_fromEntries = Object.fromEntries;
var assign = Object.assign;
export default (
	/*! j-globals: null.fromEntries (polyfill) */
	Object_fromEntries
		
		? function fromEntries (entries) {
			return /*#__PURE__*/ assign(/*#__PURE__*/ create(null), /*#__PURE__*/ Object_fromEntries(entries));
		}
		
		: /*#__PURE__*/ function () {
			
			function __PURE__ (entries) {
				if ( entries==null ) { throw TypeError('undefined is not iterable'); }
				var object = create(null);
				of(entries, function (entry) {
					if ( typeof entry!=='object' && typeof entry!=='function' || entry===null ) { throw TypeError('Iterator value '+( entry && entry.toString() )+' is not an entry object'); }
					object[entry[0]] = entry[1];
				});
				return assign ? assign(create(null), object) : object;
			}
			
			return function fromEntries (entries) {
				return /*#__PURE__*/ __PURE__(entries);
			};
			
		}()
	
	/*¡ j-globals: null.fromEntries (polyfill) */
);