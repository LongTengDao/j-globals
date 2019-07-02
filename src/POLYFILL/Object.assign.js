import toString from '.Object.prototype.toString';
import hasOwnProperty from '.Object.prototype.hasOwnProperty';
//import charAt from '.String.prototype.charAt';
import Object_keys from '.Object.keys?=';
export default (
	/*! j-globals: Object.assign (polyfill) */
	Object.assign || /*#__PURE__*/ function () {
		
		var string_noIndex = !'_'.hasOwnProperty(0);
		
		//var INDEX = /^(?:0|[1-9]\d*)$/;
		
		return function assign (target, firstSource) {
			if ( target==null ) { throw TypeError('Cannot convert undefined or null to object'); }
			target = Object(target);
			var lastIndex = arguments.length-1;
			if ( lastIndex ) {
				for ( var currentIndex = 1, source = firstSource; ; ) {
					if ( source!=null ) {
						var keys, length, index, key;
						switch ( typeof source ) {
							case 'object':
								if ( string_noIndex && toString.call(source)==='[object String]' ) {
									throw TypeError('stringObject\'s index keys have bug in ES3');/*
									for ( length = source.length, index = 0; index<length; ++index ) {
										target[index] = charAt.call(source, index);
									}
									for ( key in source ) {
										if ( hasOwnProperty.call(source, key) ) {
											if ( INDEX.test(key) && key<length ) {
												if ( source[key]!==charAt.call(source, key) ) { throw TypeError('source stringObject[index] is not writable in ES3+ spec'); }
											}
											else { target[key] = source[key]; }
										}
									}
									break;*/
								}
							case 'function':
								for ( keys = Object_keys(source), length = keys.length, index = 0; index<length; ++index ) {
									key = keys[index];
									target[key] = source[key];
								}
								break;
							case 'string':
								if ( string_noIndex ) { throw TypeError('string[index] keys have bug in ES3'); }
								for ( length = source.length, index = 0; index<length; ++index ) {
									target[index] = source.charAt(index);
								}
								break;
							default:
								for ( key in source = Object(source) ) {
									if ( hasOwnProperty.call(source, key) ) {
										target[key] = source[key];
									}
								}
								break;
						}
					}
					if ( currentIndex===lastIndex ) { break; }
					source = arguments[++currentIndex];
				}
			}
			return target;
		};
		
	}()
	/*¡ j-globals: Object.assign (polyfill) */
);