import undefined from '.undefined';
import Symbol_iterator from '.Symbol.iterator?';
import toString from '.Object.prototype.toString';
import charAt from '.String.prototype.charAt';
import return_false from '.return.false';
import String_prototype from 'String.prototype';
import { createBound } from '.native';
import isPrimitive from '.class.isPrimitive';
export default (
	/*! j-globals: for.of (internal) */
	/*#__PURE__*/ function () { 'use strict';
		
		var ES3 = this!==undefined;
		
		var isIterable = Symbol_iterator===undefined
			? return_false
			: function isIterable (value) { return Symbol_iterator in ( typeof value==='string' ? String_prototype : Object(value) ); };
		
		function tryReturn (iterable) {
			try { iterable['return'](); }
			catch (error) {}
		}
		
		function tryFnValue_tryReturn_throw (callbackfn, value, iterable) {
			try { return callbackfn(value); }
			catch (error) {
				tryReturn(iterable);
				throw error;
			}
		}
		
		return function of (arrayLike_iterable, callbackfn/*, thisArg*/) {
			if ( typeof callbackfn!=='function' ) { throw TypeError(typeof callbackfn+' is not a function'); }
			if ( arguments.length>2 ) { callbackfn = createBound(callbackfn, arguments[2]); }
			if ( arrayLike_iterable==null ) { throw TypeError('Cannot convert undefined or null to object'); }
			var length, index;
			if ( isIterable(arrayLike_iterable) ) {
				arrayLike_iterable = arrayLike_iterable[Symbol_iterator]();
				if ( isPrimitive(arrayLike_iterable) ) { throw TypeError('Result of the Symbol.iterator method is not an object'); }
				for ( index = 0; ; ++index ) {
					var step = arrayLike_iterable.next();
					if ( isPrimitive(step) ) { throw TypeError('Iterator result '+step+' is not an object'); }
					if ( step.done ) { break; }
					if ( tryFnValue_tryReturn_throw(callbackfn, step.value, arrayLike_iterable) ) {
						tryReturn(arrayLike_iterable);
						break;
					}
				}
				return;
			}
			if ( ES3 ) {
				if ( typeof arrayLike_iterable==='string' ) {
					for ( length = arrayLike_iterable.length, index = 0; index<length; ++index ) {
						if ( callbackfn(arrayLike_iterable.charAt(index)) ) { break; }
					}
					return;
				}
				if ( toString.call(arrayLike_iterable)==='[object String]' ) {
					for ( length = arrayLike_iterable.length, index = 0; index<length; ++index ) {
						var char = charAt.call(arrayLike_iterable, index);
						if ( index in arrayLike_iterable && arrayLike_iterable[index]!==char ) { throw TypeError('stringObject[index] is not writable in ES3+ spec'); }
						if ( callbackfn(char) ) { break; }
					}
					return;
				}
			}
			for ( length = parseInt(arrayLike_iterable.length), index = 0; index<length; ++index ) {
				if ( callbackfn(arrayLike_iterable[index]) ) { break; }
			}
		};
		
	}()
	/*¡ j-globals: for.of (internal) */
);