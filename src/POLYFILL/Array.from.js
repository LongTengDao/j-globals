import undefined from '.undefined';
import Symbol_iterator from '.Symbol.iterator?';
import toString from '.Object.prototype.toString';
import of from '.for.of';
import return_false from '.return.false';
import String_prototype from '.String.prototype';
import { defineIndexValue, assertArrayFn, createBound } from '.native';
export default (
	/*! j-globals: Array.from (polyfill) */
	Array.from || /*#__PURE__*/ function () {
		'use strict';
		
		var ES3 = this!==undefined;
		
		var isIterable = Symbol_iterator===undefined
			? return_false
			: function isIterable (value) { return Symbol_iterator in ( typeof value==='string' ? String_prototype : Object(value) ); };
		
		function __PURE__ (arrayLike_iterable, mapfn, thisArg) {
			var array, length, index;
			if ( arguments.length>1 && mapfn!==undefined ) {
				assertArrayFn(mapfn);
				if ( arguments.length>2 ) { mapfn = createBound(mapfn, thisArg); }
			}
			if ( arrayLike_iterable==null ) { throw TypeError('Cannot convert undefined or null to object'); }
			if ( isIterable(arrayLike_iterable) ) {
				array = [];
				of(arrayLike_iterable, mapfn
					? function callbackfn (value, index) { defineIndexValue(array, index, mapfn(value, index)); }
					: function callbackfn (value, index) { defineIndexValue(array, index, value); }
				);
				return array;
			}
			if ( ES3 ) {
				if ( typeof arrayLike_iterable==='string' ) {
					array = arrayLike_iterable.split('');
					if ( fn ) { for ( length = array.length, index = 0; index<length; ++index ) { array[index] = fn(array[index]); } }
					return array;
				}
				if ( toString.call(arrayLike_iterable)==='[object String]' ) {
					array = split.call(arrayLike_iterable);
					if ( fn ) {
						for ( length = array.length, index = 0; index<length; ++index ) {
							var char = array[index];
							if ( index in arrayLike_iterable && arrayLike_iterable[index]!==char ) { throw TypeError('stringObject[index] is not writable in ES3+ spec'); }
							array[index] = fn(char);
						}
					}
					return array;
				}
			}
			length = parseInt(arrayLike_iterable.length);
			if ( !( length>=0 ) ) { length = 0; }
			array = Array(length);
			index = 0;
			if ( fn ) { for ( ; index<length; ++index ) { defineIndexValue(array, index, fn(arrayLike_iterable[index], index)); } }
			else { for ( ; index<length; ++index ) { defineIndexValue(array, index, arrayLike_iterable[index]); } }
			return array;
		}
		
		return function from (arrayLike_iterable) {
			return /*#__PURE__*/ __PURE__.apply(this, arguments);
		};
		
	}()
	/*¡ j-globals: Array.from (polyfill) */
);