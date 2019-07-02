import toString from '.Object.prototype.toString';
//import hasOwnProperty from '.Object.prototype.hasOwnProperty';
import Object_keys from '.Object.keys?=';
import { defineIndexValue } from '.native';
export default Object.values || (
	/*! j-globals: Object.values (polyfill) */
	/*#__PURE__*/ function () {
		
		var string_noIndex = !'_'.hasOwnProperty(0);
		
		//var INDEX = /^(?:0|[1-9]\d*)$/;
		
		function __PURE__ (object) {
			var values, keys, length, index;
			switch ( typeof object ) {
				case 'object':
					if ( string_noIndex && toString.call(object)==='[object String]' ) {
						throw TypeError('stringObject\'s index keys have bug in ES3');/*
						values = split.call(object, '');
						length = index = values.length;
						for ( var key in object ) {
							if ( hasOwnProperty.call(object, key) ) {
								if ( INDEX.test(key) && key<length ) {
									if ( object[key]!==values[key] ) { throw TypeError('stringObject[index] is not writable in ES3+ spec'); }
								}
								else { values[index++] = object[key]; }
							}
						}
						return values;*/
					}
					break;
				case 'function':
					break;
				case 'string':
					if ( string_noIndex ) { throw TypeError('string[index] keys have bug in ES3'); }
					return object.split('');
				default:
					object = Object(object);
					break;
			}
			values = [];
			for ( keys = Object_keys(object), length = keys.length, index = 0; index<length; ++index ) {
				defineIndexValue(values, index, object[keys[index]]);
			}
			return values;
		}
		
		return function values (object) {
			return /*#__PURE__*/ __PURE__(object);
		};
		
	}()
	/*¡ j-globals: Object.values (polyfill) */
);