//import split from '.String.prototype.split';
import Symbol_species from '.Symbol.species?';
import undefined from '.undefined';
import { ToObject, ToString, ToLength, ArraySpeciesCreate, defineIndexValue, createBound, assertArrayFn } from '.native';
export default (
	/*! j-globals: Array.prototype.map (polyfill) */
	( Symbol_species===undefined || typeof Symbol_species==='symbol' ) && Array.prototype.map || /*#__PURE__*/ function () { 'use strict';
		
		var string_noIndex = !'_'.hasOwnProperty(0);
		
		return function map (callbackfn/*, thisArg*/) {
			var O = ToObject(this, 'Array.prototype.map called on null or undefined');
			var len = ToLength(O.length);
			assertArrayFn(callbackfn);
			if ( arguments.length>1 ) { callbackfn = createBound(callbackfn, arguments[1]); }
			var A = ArraySpeciesCreate(this, len);
			if ( string_noIndex && O instanceof String ) {
				throw TypeError('stringObject\'s index keys have bug in ES3');
				//if ( toString.call(O)==='[object String]' ) { O = split.call(O); }
				//else { throw TypeError('There is no way in ES 3 to read the index of an object, which is instanceof String, but not [object String]'); }
			}
			for ( var k = 0; k<len; ++k ) {
				var Pk = ToString(k);
				if ( Pk in O ) {
					var kValue = O[Pk];
					var mappedValue = callbackfn(kValue, k, O);
					defineIndexValue(A, Pk, mappedValue);
				}
			}
			return A;
		};
		
	}()
	/*¡ j-globals: Array.prototype.map (polyfill) */
);