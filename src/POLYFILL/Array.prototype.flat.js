//import split from '.String.prototype.split';
import { ToObject, ToInteger, ToLength, ArraySpeciesCreate, FlattenIntoArray } from '.native';
export default (
	/*! j-globals: Array.prototype.flat (polyfill) */
	Array.prototype.flat || /*#__PURE__*/ function () { 'use strict';
		
		var string_noIndex = !'_'.hasOwnProperty(0);
		var undefined;
		
		return function flat (/*depth*/) {
			var O = ToObject(this, 'Array.prototype.flat called on null or undefined');
			if ( string_noIndex && O instanceof String ) {
				throw TypeError('stringObject\'s index keys have bug in ES3');
				//if ( toString.call(O)==='[object String]' ) { O = split.call(O); }
				//else { throw TypeError('There is no way in ES 3 to read the index of an object, which is instanceof String, but not [object String]'); }
			}
			var sourceLen = ToLength(O.length);
			var depthNum = arguments.length && arguments[0]!==undefined ? ToInteger(arguments[0]) : 1;
			var A = ArraySpeciesCreate(O, 0);
			FlattenIntoArray(A, O, sourceLen, 0, depthNum);
			return A;
		};
		
	}()
	/*¡ j-globals: Array.prototype.flat (polyfill) */
);