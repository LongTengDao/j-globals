import assign from '.Object.assign';
import create from '.Object.create';

import _Default from './POLYFILL/default?text';

import _Reflect_ownKeys from './POLYFILL/Reflect.ownKeys?text';
import _Reflect_apply from './POLYFILL/Reflect.apply?text';

import _Object_create from './POLYFILL/Object.create?text';
import _Object_keys from './POLYFILL/Object.keys?text';
import _Object_values from './POLYFILL/Object.values?text';
import _Object_entries from './POLYFILL/Object.entries?text';
import _Object_assign from './POLYFILL/Object.assign?text';
import _Object_is from './POLYFILL/Object.is?text';
import _Object_fromEntries from './POLYFILL/Object.fromEntries?text';
import _Object_getOwnPropertyNames from './POLYFILL/Object.getOwnPropertyNames?text';
import _Object_getOwnPropertySymbols from './POLYFILL/Object.getOwnPropertySymbols?text';

import _Array_of from './POLYFILL/Array.of?text';
import _Array_from from './POLYFILL/Array.from?text';
import _Array_isArray from './POLYFILL/Array.isArray?text';
import _Array_prototype_map from './POLYFILL/Array.prototype.map?text';
import _Array_prototype_flat from './POLYFILL/Array.prototype.flat?text';
import _Array_prototype_flatMap from './POLYFILL/Array.prototype.flatMap?text';

import _globalThis from './POLYFILL/globalThis?text';

import _Error from './POLYFILL/Error?text';

//import _Function_prototype_bind from './POLYFILL/Function.prototype.bind?text';

import _undefined from './POLYFILL/undefined?text';
import _Infinity from './POLYFILL/Infinity?text';
import _NaN from './POLYFILL/NaN?text';

import _Number_MAX_SAFE_INTEGER from './POLYFILL/Number.MAX_SAFE_INTEGER?text';
import _Number_MIN_SAFE_INTEGER from './POLYFILL/Number.MIN_SAFE_INTEGER?text';
import _Number_isSafeInteger from './POLYFILL/Number.isSafeInteger?text';
import _Number_isInteger from './POLYFILL/Number.isInteger?text';
import _Number_isFinite from './POLYFILL/Number.isFinite?text';
import _Number_isNaN from './POLYFILL/Number.isNaN?text';
import _Number_EPSILON from './POLYFILL/Number.EPSILON?text';

import _Buffer_isBuffer from './POLYFILL/Buffer.isBuffer?text';
import _Buffer_from from './POLYFILL/Buffer.from?text';
import _Buffer_alloc from './POLYFILL/Buffer.alloc?text';
import _Buffer_allocUnsafe from './POLYFILL/Buffer.allocUnsafe?text';
import _Buffer_allocUnsafeSlow from './POLYFILL/Buffer.allocUnsafeSlow?text';

import _NULL_assign from './POLYFILL/null.assign?text';
import _NULL_create from './POLYFILL/null.create?text';
import _NULL_fromEntries from './POLYFILL/null.fromEntries?text';
import _NULL from './POLYFILL/null?text';

import _Map from './POLYFILL/Map?text';
import _Set from './POLYFILL/Set?text';

import _String_raw from './POLYFILL/String.raw?text';
import _String_fromCodePoint from './POLYFILL/String.fromCodePoint?text';
import _String_prototype_codePointAt from './POLYFILL/String.prototype.codePointAt?text';

import _document_head from './POLYFILL/document.head?text';

const POLYFILL = /*#__PURE__*/ assign(create(null), {
	
	'default': _Default,
	
	'String.raw': _String_raw,
	'String.fromCodePoint': _String_fromCodePoint,
	'String.prototype.codePointAt': _String_prototype_codePointAt,
	
	'null.assign': _NULL_assign,
	'null.create': _NULL_create,
	'null.fromEntries': _NULL_fromEntries,
	'null': _NULL,
	
	'Reflect.ownKeys': _Reflect_ownKeys,
	'Reflect.apply': _Reflect_apply,
	
	'Object.assign': _Object_assign,
	'Object.create': _Object_create,
	'Object.entries': _Object_entries,
	'Object.fromEntries': _Object_fromEntries,
	'Object.getOwnPropertyNames': _Object_getOwnPropertyNames,
	'Object.getOwnPropertySymbols': _Object_getOwnPropertySymbols,
	'Object.is': _Object_is,
	'Object.keys': _Object_keys,
	'Object.values': _Object_values,
	
	'Array.of': _Array_of,
	'Array.from': _Array_from,
	'Array.isArray': _Array_isArray,
	//'Array.prototype.splice': ,
	//'Array.prototype.find': ,
	//'Array.prototype.findIndex': ,
	//'Array.prototype.forEach': ,
	'Array.prototype.map': _Array_prototype_map,
	//'Array.prototype.reduce': ,
	//'Array.prototype.reduceRight': ,
	//'Array.prototype.every': ,
	//'Array.prototype.some': ,
	//'Array.prototype.indexOf': ,
	//'Array.prototype.lastIndexOf': ,
	//'Array.prototype.includes': ,
	'Array.prototype.flat': _Array_prototype_flat,
	'Array.prototype.flatMap': _Array_prototype_flatMap,
	
	'globalThis': _globalThis,
	
	'Error': _Error,
	
	//'Function.prototype.bind': _Function_prototype_bind,
	
	'undefined': _undefined,
	'Infinity': _Infinity,
	'NaN': _NaN,
	
	'Number.MAX_SAFE_INTEGER': _Number_MAX_SAFE_INTEGER,
	'Number.MIN_SAFE_INTEGER': _Number_MIN_SAFE_INTEGER,
	'Number.isSafeInteger': _Number_isSafeInteger,
	'Number.isInteger': _Number_isInteger,
	'Number.isFinite': _Number_isFinite,
	'Number.isNaN': _Number_isNaN,
	'Number.EPSILON': _Number_EPSILON,
	
	//'JSON': ,
	//'JSON.parse': ,
	//'JSON.stringify': ,
	
	'Buffer.isBuffer': _Buffer_isBuffer,
	'Buffer.from': _Buffer_from,
	'Buffer.alloc': _Buffer_alloc,
	'Buffer.allocUnsafe': _Buffer_allocUnsafe,
	'Buffer.allocUnsafeSlow': _Buffer_allocUnsafeSlow,
	
	'Map': _Map,
	'Set': _Set,
	
	'document.head': _document_head,
	
}) as { [chain :string] :string };

export default POLYFILL;