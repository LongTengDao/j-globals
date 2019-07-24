import floor from '.Math.floor';
import IsArray from '.Array.isArray?=';
import Infinity from '.Infinity';
import Symbol_species from '.Symbol.species?';
import undefined from '.undefined';
import toString from '.Object.prototype.toString';
import Object_prototype from '.Object.prototype';
import Array_prototype from '.Array.prototype';
import fromCharCode from '.String.fromCharCode';
import ArrayCreate from '.Array';

//                 18446744073709551615 // 0xFFFFFFFFFFFFFFFF //                                                         // 0b1777777777777777777777 // 2**64-1
//                  9223372036854775807 // 0x7FFFFFFFFFFFFFFF //                                                         // 0b0777777777777777777777 // 2**63-1
var MAX_SAFE_INTEGER = 9007199254740991;// 0x001FFFFFFFFFFFFF // 0b11111111111111111111111111111111111111111111111111111 // 0o0000377777777777777777 // 2**53-1
var MAX_ARRAY_LENGTH =       4294967295;// 0x00000000FFFFFFFF // 0b00000000000000000000011111111111111111111111111111111 // 0o0000000000037777777777 // 2**32-1
//                                      // 0x000000003FFFFFFF // 0b00000000000000000000000111111111111111111111111111111 // 0o0000000000007777777777 // 2**30-1
//var MAX_STRING_LENGTH =    1073741799;// 0x000000003FFFFFE7 // 0b00000000000000000000000111111111111111111111111100111 // 0o0000000000007777777747 // 2**30-1-24
var LIKE_SAFE_INTEGER = /^(?:0|[1-9]\d{0,15})$/;
var LIKE_ARRAY_INDEX = /^(?:0|[1-4]\d{0,9}|[5-9]\d{0,8})$/;
function isIntegerIndex (key) {
	return LIKE_SAFE_INTEGER.test(key) && key<=MAX_SAFE_INTEGER;
}
function isArrayIndex (key) {
	return LIKE_ARRAY_INDEX.test(key) && key<MAX_ARRAY_LENGTH;
}
export { isArrayIndex as isIndex };

export function ToObject (argument, _message) { return Object(/*#__PURE__*/ RequireObjectCoercible(argument, _message)); }
export function ToString (argument) { return ''+argument; }
export function ToNumber (argument) { return +argument; }// Number(): bigint?
export function ToInteger (argument) {
	argument = ToNumber(argument);
	if ( argument!==argument ) { return 0; }
	if ( argument===0 || argument===Infinity || argument===-Infinity ) { return argument; }
	return argument>0 ? floor(argument) : -floor(-argument);
}
export function RequireObjectCoercible (argument, _message) {
	if ( argument==null ) { throw TypeError(_message); }
	return argument;
}
export function UTF16Decode (lead, trail) { return ( lead-0xD800 )*1024+( trail-0xDC00 )+0x10000; }

export function UTF16Encoding (cp) {
	if ( cp<=0xFFFF ) { return fromCharCode(cp); }
	cp -= 0x10000;
	return fromCharCode(floor(cp/1024)+0xD800, cp%1024+0xDC00);
}

export function ToLength (argument) {// [v] ES 6: start number only could has use in ES 6 class species
	var len = ToNumber(argument);
	if ( len>0 ) { return len>MAX_SAFE_INTEGER ? MAX_SAFE_INTEGER : floor(len); }
	return 0;
}
export function ToUint32 (argument) {// ES 5
	return argument>>>0;
	//var number = ToNumber(argument);
	//if ( !number || number===Infinity || number===-Infinity ) { return 0; }
	//var posInt = number>0 ? floor(number) : -floor(-number);
	//var int32bit = posInt%4294967296;// 2**32 // MAX_ARRAY_LENGTH+1
	//return int32bit<0 ? int32bit+4294967296 : int32bit;
}

function IsConstructor (argument) { return typeof argument==='function'; }
//function notThisRealm_and_isBuiltInArrayConstructorOfItsRealm (originalArray_constructor) { }
export var TheUndefinedType = 1;
export var TheNullType = 2;
export var TheBooleanType = 3;
export var TheStringType = 4;
export var TheSymbolType = 5;
export var TheNumberType = 6;
export var TheObjectType = 7;
export var TheBigIntType = 0;
export function Type (argument) {
	switch ( typeof argument ) {
		case 'function':
			return TheObjectType;
		case 'object':
			return argument ? TheObjectType : TheNullType;// null
		case 'undefined':
			return argument===undefined ? TheUndefinedType : TheObjectType;// document.all
		case 'boolean':
			return TheBooleanType;
		case 'string':
			return TheStringType;
		case 'symbol':
			return TheSymbolType;
		case 'number':
			return TheNumberType;
		case 'bigint':
			return TheBigIntType;
		default:
			return TheObjectType;// unknown date ...
	}
}
export function ArraySpeciesCreate (originalArray, length) {
	var C;
	if ( IsArray(originalArray) ) {
		C = originalArray.constructor;
		//if ( IsConstructor(C) && notThisRealm_and_isBuiltInArrayConstructorOfItsRealm(C) ) { C = undefined; }
		if ( Type(C)===TheObjectType ) {
			C = Symbol_species===undefined ? undefined : C[Symbol_species];
			if ( C===null ) { C = undefined; }
		}
	}
	if ( C===undefined ) { return ArrayCreate(length); }
	if ( !IsConstructor(C) ) { throw TypeError('object.constructor[Symbol.species] is not a constructor'); }
	return new C(length);
}

var descriptor = Object.create && /*#__PURE__*/ function () {
	var descriptor = Object.create(null);
	descriptor.value = undefined;
	descriptor.writable = true;
	descriptor.enumerable = true;
	descriptor.configurable = true;
	return descriptor;
}();
var defineProperty = Object.defineProperty;
export var defineIndexValue = Object.create
	? function CreateDataProperty (array, index, value) {
		index in Array_prototype && defineProperty(array, index, descriptor);
		array[index] = value;
	}
	: function CreateDataProperty (array, index, value) {
		array[index] = value;
	};
export var defineKeyValue = Object.create
	? typeof Symbol==='function'
		? function CreateDataProperty (object, key, value) {
			if ( typeof key!=='symbol' ) { key = ''+key; }
			key in Object_prototype && defineProperty(object, key, descriptor);
			object[key] = value;
		}
		: function CreateDataProperty (object, key, value) {
			key = ''+key;
			key in Object_prototype && defineProperty(object, key, descriptor);
			object[key] = value;
		}
	: function CreateDataProperty (object, key, value) {
		object[key] = value;
	};

export var createBound = function () { 'use strict'; return this===undefined; }()
	? function createBound (fn, thisArg) {
		if ( thisArg==null ) { throw TypeError('undefined or null cannot become this in ES3'); }
		return function bound () {
			return apply.call(fn, thisArg, arguments);
		};
	}
	: function createBound (fn, thisArg) {
		return thisArg===undefined ? fn : function bound () {
			return apply.call(fn, thisArg, arguments);
		};
	};
export function assertArrayFn (fn) {
	switch ( typeof fn ) {
		case 'function':
			return;
		case 'object':
			throw TypeError(( fn ? toString.call(fn) : fn )+' is not a function');
		default:
			throw TypeError(String(fn)+' is not a function');
	}
}

export function FlattenIntoArray (target, source, sourceLen, start, depth, mapperFunction) {
	var targetIndex = start;
	for ( var sourceIndex = 0; sourceIndex<sourceLen; ++sourceIndex ) {
		if ( sourceIndex in source ) {
			var element = source[sourceIndex];
			if ( mapperFunction ) { element = mapperFunction(element, sourceIndex, source); }
			if ( depth>0 && IsArray(element) ) {
				targetIndex = FlattenIntoArray(target, element, ToLength(element.length), targetIndex, depth-1);
			}
			else {
				if ( targetIndex>=9007199254740991 ) { throw TypeError('Invalid index'); }// Number.MAX_SAFE_INTEGER // 2**53-1
				defineIndexValue(target, targetIndex, element);
				++targetIndex;
			}
		}
	}
	return targetIndex;
}
