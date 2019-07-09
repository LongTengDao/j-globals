//import split from '.String.prototype.split';
import { ToObject, ToLength, assertArrayFn, createBound, ArraySpeciesCreate, FlattenIntoArray } from '.native';
export default (
	/*! j-globals: Array.prototype.flatMap (polyfill) */
	Array.prototype.flatMap || /*#__PURE__*/ function () { 'use strict';
		
		var string_noIndex = !'_'.hasOwnProperty(0);
		
		return function flatMap (mapperFunction, /*thisArg*/) {
			var O = ToObject(this, 'Array.prototype.flatMap called on null or undefined');
			if ( string_noIndex && O instanceof String ) {
				throw TypeError('stringObject\'s index keys have bug in ES3');
				//if ( toString.call(O)==='[object String]' ) { O = split.call(O); }
				//else { throw TypeError('There is no way in ES 3 to read the index of an object, which is instanceof String, but not [object String]'); }
			}
			var sourceLen = ToLength(O.length);
			assertArrayFn(mapperFunction);
			if ( arguments.length>1 ) { mapperFunction = createBound(mapperFunction, arguments[1]); }
			var A = ArraySpeciesCreate(O, 0);
			FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction);
			return A;
		};
		
	}()
	/*¡ j-globals: Array.prototype.flatMap (polyfill) */
);