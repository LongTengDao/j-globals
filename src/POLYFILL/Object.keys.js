var Array_prototype = Array.prototype;
import Boolean_prototype from '.Boolean.prototype';
import Date_prototype from '.Date.prototype';
import Error_prototype from '.Error.prototype';
import EvalError_prototype from '.EvalError.prototype';
import Function_prototype from '.Function.prototype';
import Number_prototype from '.Number.prototype';
import Object_prototype, { hasOwnProperty, propertyIsEnumerable, toString } from '.Object.prototype';
import RangeError_prototype from '.RangeError.prototype';
import ReferenceError_prototype from '.ReferenceError.prototype';
import RegExp_prototype from '.RegExp.prototype';
import String_prototype from '.String.prototype';
import SyntaxError_prototype from '.SyntaxError.prototype';
import TypeError_prototype from '.TypeError.prototype';
import URIError_prototype from '.URIError.prototype';
import { isIndex } from '.native';
export default (
	/*! j-globals: Object.keys (polyfill) */
	/*#__PURE__*/ function () {
		
		var Object_keys = Object.keys;
		if ( Object_keys ) {
			try {
				Object_keys(0);
				return Object_keys;
			}
			catch (error) { }
			return function keys (object) {
				return Object_keys(object==null ? object : Object(object));
			};
		}
		
		var function_prototypeIsEnumerable = function () {}.propertyIsEnumerable('prototype');
		if ( !{ 'toString': null }.propertyIsEnumerable('toString') ) {
			var hasNotEnumOwnButNotNativePrototypeBug = function hasNotEnumOwnButNotNativePrototypeBug (object, key, keys) {
				if ( hasOwnProperty.call(object, key) ) {
					switch ( key ) {
						case 'toString':
						case 'constructor':
							switch ( object ) {
								case Object_prototype:
								case Number_prototype:
								case Date_prototype:
								case String_prototype:
								case Boolean_prototype:
								case Array_prototype:
								case Function_prototype:
								case RegExp_prototype:
								case Error_prototype:
								case SyntaxError_prototype:
								case RangeError_prototype:
								case EvalError_prototype:
								case ReferenceError_prototype:
								case TypeError_prototype:
								case URIError_prototype:
									return;
							}
							break;
						case 'toLocaleString':
							switch ( object ) {
								case Object_prototype:
								case Number_prototype:
								case Date_prototype:
								case Array_prototype:
									return;
							}
							break;
						case 'valueOf':
							switch ( object ) {
								case Object_prototype:
								case Number_prototype:
								case Date_prototype:
								case String_prototype:
								case Boolean_prototype:
									return;
							}
							break;
						case 'hasOwnProperty':
						case 'isPrototypeOf':
						case 'propertyIsEnumerable':
							if ( object===Object_prototype ) { return; }
							break;
					}
					for ( var index = keys.length; index--; ) {
						if ( keys[index]===key ) { return; }
					}
					return true;
				}
			};
		}
		
		function __PURE__ (object) {
			
			if ( object==null ) { throw TypeError('Cannot convert undefined or null to object'); }
			
			var length,
				index = 0,
				key,
				keys = [];
			
			switch ( typeof object ) {
				
				case 'object':
					if ( toString.call(object)==='[object String]' ) {
						throw TypeError('stringObject\'s index keys have bug in ES3');
						//for ( length = object.length; index<length; ++index ) { keys[index] = ''+index; }
						//for ( key in object ) { if ( hasOwnProperty.call(object, key) && ( !isIndex(key) || key>=length ) ) { keys[index++] = key; } }
					}
					else if ( hasOwnProperty.call(object, 'length') && !propertyIsEnumerable.call(object, 'length') || hasOwnProperty.call(object, 'callee') && !propertyIsEnumerable.call(object, 'callee') ) {
						for ( length = object.length; index<length; ++index ) { if ( hasOwnProperty.call(object, index) ) { keys[index] = ''+index; } }
						for ( key in object ) { if ( hasOwnProperty.call(object, key) && ( !isIndex(key) || key>=length ) ) { keys[index++] = key; } }
					}
					else {
						for ( key in object ) { if ( hasOwnProperty.call(object, key) ) { keys[index++] = key; } }
					}
					break;
					
				case 'function':
					if ( function_prototypeIsEnumerable ) {
						throw TypeError('function\'s prototype key has enum bug');
						//for ( key in object ) { if ( hasOwnProperty.call(object, key) && key!=='prototype' ) { keys[index++] = key; } }
					}
					else {
						for ( key in object ) { if ( hasOwnProperty.call(object, key) ) { keys[index++] = key; } }
					}
					break;
					
				case 'string':
					throw TypeError('string[index] keys have bug in ES3');
				//	for ( length = object.length; index<length; ++index ) { keys[index] = ''+index; }
				//	return keys;
					
				default:
					for ( key in object = Object(object) ) {
						if ( hasOwnProperty.call(object, key) ) {
							keys[index++] = key;
						}
					}
					return keys;
					
			}
			
			if ( hasNotEnumOwnButNotNativePrototypeBug ) {
				if ( hasNotEnumOwnButNotNativePrototypeBug(object, 'toString', keys) ) { keys[index++] = 'toString'; }
				if ( hasNotEnumOwnButNotNativePrototypeBug(object, 'toLocaleString', keys) ) { keys[index++] = 'toLocaleString'; }
				if ( hasNotEnumOwnButNotNativePrototypeBug(object, 'valueOf', keys) ) { keys[index++] = 'valueOf'; }
				if ( hasNotEnumOwnButNotNativePrototypeBug(object, 'hasOwnProperty', keys) ) { keys[index++] = 'hasOwnProperty'; }
				if ( hasNotEnumOwnButNotNativePrototypeBug(object, 'isPrototypeOf', keys) ) { keys[index++] = 'isPrototypeOf'; }
				if ( hasNotEnumOwnButNotNativePrototypeBug(object, 'propertyIsEnumerable', keys) ) { keys[index++] = 'propertyIsEnumerable'; }
				if ( hasNotEnumOwnButNotNativePrototypeBug(object, 'constructor', keys) ) { keys[index] = 'constructor'; }
			}
			
			return keys;
			
		}
		
		return function keys (object) {
			return /*#__PURE__*/ __PURE__(object);
		};
		
	}()
	/*¡ j-globals: Object.keys (polyfill) */
);