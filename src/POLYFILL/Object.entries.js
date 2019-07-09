import toString from '.Object.prototype.toString';
//import hasOwnProperty from '.Object.prototype.hasOwnProperty';
//import charAt from '.String.prototype.charAt';
import Object_keys from '.Object.keys?=';
import { defineIndexValue } from '.native';
export default (
	/*! j-globals: Object.entries (polyfill) */
	Object.entries || /*#__PURE__*/ function () {
		
		var string_noIndex = !'_'.hasOwnProperty(0);
		
		function __PURE__ (object) {
			var entries = [], keys, length, index = 0, key;
			switch ( typeof object ) {
				case 'object':
					if ( string_noIndex && toString.call(object)==='[object String]' ) {
						throw TypeError('stringObject\'s index keys have bug in ES3');/*
						for ( length = object.length; index<length; ++index ) {
							defineIndexValue(entries, index, [ ''+index, charAt.call(object, index) ]);
						}
						for ( key in object ) {
							if ( hasOwnProperty.call(object, key) ) {
								if ( isIndex(key) && key<length ) {
									if ( object[key]!==charAt.call(object, key) ) { throw TypeError('stringObject[index] is not writable in ES3+ spec'); }
								}
								else { defineIndexValue(entries, index++, [ key, object[key] ]); }
							}
						}
						return entries*/
					}
					break;
				case 'function':
					break;
				case 'string':
					if ( string_noIndex ) { throw TypeError('string[index] keys have bug in ES3'); }
					for ( length = object.length; index<length; ++index ) {
						defineIndexValue(entries, index, [ ''+index, object.charAt(index) ]);
					}
					return entries;
				default:
					object = Object(object);
					break;
			}
			for ( keys = Object_keys(object), length = keys.length; index<length; ++index ) {
				defineIndexValue(entries, index, [ key = keys[index], object[key] ]);
			}
			return entries;
		}
		
		return function entries (object) {
			return /*#__PURE__*/ __PURE__(object);
		};
		
	}()
	/*¡ j-globals: Object.entries (polyfill) */
);