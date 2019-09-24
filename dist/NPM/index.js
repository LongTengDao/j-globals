'use strict';

const version = '13.1.2';

const assign = Object.assign;

const create = Object.create;

const NULL = create(null);

const MULTI_EXPORT = /*#__PURE__*/ assign(create(NULL), {
	
	'Array': [ 'prototype', 'from', 'isArray', 'of' ],
	'Array.prototype': [
		'concat',
		'copyWithin',
		'every',
		'entries',
		'fill',
		'find',
		'findIndex',
		'filter',
		'flat',
		'flatMap',
		'forEach',
		'includes',
		'indexOf',
		'join',
		'keys',
		'lastIndexOf',
		'map',
		'pop',
		'push',
		'reduce',
		'reduceRight',
		'reverse',
		'shift',
		'slice',
		'some',
		'sort',
		'splice',
		'toLocaleString',
		'toString',
		'unshift',
		'values',
	],
	'Boolean': [ 'prototype' ],
	'Boolean.prototype': [ 'toString', 'valueOf' ],
	'Date': [ 'prototype', 'UTC', 'now', 'parse' ],
	'Date.prototype': [
		'getDate',
		'getDay',
		'getFullYear',
		'getHours',
		'getMilliseconds',
		'getMinutes',
		'getMonth',
		'getSeconds',
		'getTime',
		'getTimezoneOffset',
		'getUTCDate',
		'getUTCDay',
		'getUTCFullYear',
		'getUTCHours',
		'getUTCMilliseconds',
		'getUTCMinutes',
		'getUTCMonth',
		'getUTCSeconds',
		/*'getYear',*/
		'setDate',
		'setFullYear',
		'setHours',
		'setMilliseconds',
		'setMinutes',
		'setMonth',
		'setSeconds',
		'setTime',
		'setUTCDate',
		'setUTCFullYear',
		'setUTCHours',
		'setUTCMilliseconds',
		'setUTCMinutes',
		'setUTCMonth',
		'setUTCSeconds',
		/*'setYear',*/
		'toDateString',
		/*'toGMTString',*/
		'toISOString',
		'toJSON',
		'toLocaleDateString',
		'toLocaleString',
		'toLocaleTimeString',
		'toString',
		'toTimeString',
		'toUTCString',
		'valueOf',
	],
	'Error': [ 'prototype' ],
	'Error.prototype': [ 'toString' ],
	'EvalError': [ 'prototype' ],
	'EvalError.prototype': [ 'toString' ],
	'Function': [ 'prototype' ],
	'Function.prototype': [ 'apply', 'bind', 'call', 'toString' ],
	'Math': [
		'E',
		'LN10',
		'LN2',
		'LOG10E',
		'LOG2E',
		'PI',
		'SQRT1_2',
		'SQRT2',
		'abs',
		'acos',
		'acosh',
		'asin',
		'asinh',
		'atan',
		'atan2',
		'atanh',
		'cbrt',
		'ceil',
		'clz32',
		'cos',
		'cosh',
		'exp',
		'expm1',
		'floor',
		'fround',
		'hypot',
		'imul',
		'log',
		'log10',
		'log1p',
		'log2',
		'max',
		'min',
		'pow',
		'random',
		'round',
		'sign',
		'sin',
		'sinh',
		'sqrt',
		'tan',
		'tanh',
		'trunc',
	],
	'Number': [
		'prototype',
		'isFinite',
		'isInteger',
		'isNaN',
		'isSafeInteger',
		'parseFloat',
		'parseInt',
		'EPSILON',
		'MAX_SAFE_INTEGER',
		'MAX_VALUE',
		'MIN_SAFE_INTEGER',
		'MIN_VALUE',
		'NEGATIVE_INFINITY',
		'NaN',
		'POSITIVE_INFINITY',
	],
	'Number.prototype': [ 'toExponential', 'toFixed', 'toLocaleString', 'toPrecision', 'toString', 'valueOf' ],
	'Object': [
		'prototype',
		'assign',
		'create',
		'defineProperties',
		'defineProperty',
		'entries',
		'freeze',
		'fromEntries',
		'getOwnPropertyDescriptor',
		'getOwnPropertyDescriptors',
		'getOwnPropertyNames',
		'getOwnPropertySymbols',
		'getPrototypeOf',
		'is',
		'isExtensible',
		'isFrozen',
		'isSealed',
		'keys',
		'preventExtensions',
		'seal',
		'setPrototypeOf',
		'values',
	],
	'Object.prototype': [ /*'__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__',*/ 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf' ],
	'RangeError': [ 'prototype' ],
	'RangeError.prototype': [ 'toString' ],
	'ReferenceError': [ 'prototype' ],
	'ReferenceError.prototype': [ 'toString' ],
	'RegExp': [ 'prototype' ],
	'RegExp.prototype': [ 'compile', 'exec', 'source', 'test', 'toString' ],
	'String': [ 'prototype', 'fromCharCode', 'fromCodePoint', 'raw' ],
	'String.prototype': [
		'charAt',
		'charCodeAt',
		'codePointAt',
		'concat',
		'endsWith',
		'includes',
		'indexOf',
		'lastIndexOf',
		'localeCompare',
		'match',
		'matchAll',
		'normalize',
		'padEnd',
		'padStart',
		'repeat',
		'replace',
		'search',
		'slice',
		'split',
		'startsWith',
		'substr',
		'substring',
		'sup',
		'toLocaleLowerCase',
		'toLocaleUpperCase',
		'toLowerCase',
		'toString',
		'toUpperCase',
		'trim',
		'trimEnd',
		'trimLeft',
		'trimRight',
		'trimStart',
		'valueOf',
	],
	'SyntaxError': [ 'prototype' ],
	'SyntaxError.prototype': [ 'toString' ],
	'TypeError': [ 'prototype' ],
	'TypeError.prototype': [ 'toString' ],
	'URIError': [ 'prototype' ],
	'URIError.prototype': [ 'toString' ],
	
	'console': [
		'assert',
		'clear',
		/*'context',*/
		'count',
		'countReset',
		'debug',
		'dir',//
		'dirxml',//
		'error',
		/*'_exception',*/
		'group',
		'groupCollapsed',
		'groupEnd',
		'info',
		'log',
		'memory',//
		'profile',//
		'profileEnd',//
		'table',
		'time',
		'timeEnd',
		'timeLog',
		'timeStamp',//
		'trace',
		'warn',
	],
	'JSON': [ 'parse', 'stringify' ],
	
	'Reflect': [
		'apply',
		'construct',
		'defineProperty',
		'deleteProperty',
		'get',
		'getOwnPropertyDescriptor',
		'getPrototypeOf',
		'has',
		'isExtensible',
		'ownKeys',
		'preventExtensions',
		'set',
		'setPrototypeOf',
	],
	'Proxy': [ 'revocable' ],
	'Map': [ 'prototype' ],
	'Map.prototype': [ 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'get', 'set', 'size', 'values' ],
	'Set': [ 'prototype' ],
	'Set.prototype': [ 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'size', 'values' ],
	'WeakMap': [ 'prototype' ],
	'WeakMap.prototype': [ 'delete', 'has', 'get', 'set' ],
	'WeakSet': [ 'prototype' ],
	'WeakSet.prototype': [ 'add', 'delete', 'has' ],
	
	'Promise': [ 'prototype', 'all', 'race', 'reject', 'resolve' ],
	'Promise.prototype': [ 'then' , 'catch', 'finally' ],
	'Symbol': [ 'prototype',
		'asyncIterator',
		'for',
		'hasInstance',
		'isConcatSpreadable',
		'iterator',
		'keyFor',
		'match',
		'matchAll',
		'replace',
		'search',
		'species',
		'split',
		'toPrimitive',
		'toStringTag',
		'unscopables',
	],
	'Symbol.prototype': [ 'toString', 'valueOf' ],
	'BigInt': [ 'prototype', 'asIntN', 'asUintN' ],
	'BigInt.prototype': [ 'toLocaleString', 'toString', 'valueOf' ],
	
	/*
	'globalThis': [// SharedArrayBuffer ArrayBuffer **Array DataView Intl?
		'parseFloat',
		'parseInt',
		'Infinity',
		'NaN',
		'undefined',
		'decodeURI',
		'decodeURIComponent',
		'encodeURI',
		'encodeURIComponent',
		'escape',
		'unescape',
		'isFinite',
		'isNaN',
		'process',
		'Buffer',
		'cancelAnimationFrame',
		'clearImmediate',
		'clearInterval',
		'clearTimeout',
		'requestAnimationFrame',
		'setImmediate',
		'setInterval',
		'setTimeout',
	],
	*/
	
	'null': [
		'prototype',
		'assign',
		'create',
		'defineProperties',
		'defineProperty',
		'fromEntries',
		'getOwnPropertyDescriptor',
		'getOwnPropertyDescriptors',
		'PropertyDescriptor',
	],
	
	'throw': [
		'Error',
		'EvalError',
		'RangeError',
		'ReferenceError',
		'SyntaxError',
		'TypeError',
		'URIError',
	],
	
	'class': [
		'isBoolean', 'isNumber', 'isString', 'isDate', 'isRegExp',
		'isMap', 'isSet', 'isWeakMap', 'isWeakSet',
		'isPromise', 'isSymbol',
		'isBigInt',
		'isPrimitive',
	],
	
	'return': [
		'true',
		'false',
		'KEEP',
	],
	
	'void': [
		'KEEP',
	],
	
})                                 ;

const OPTIONS          =
	/*#__PURE__*/
	assign(create(NULL), {
		bom: false,
		tab: '\t',
		eol: '\n',
		pre: '.',
		sur: '',
	});

const hasOwnProperty = Object.prototype.hasOwnProperty;

const toStringTag = typeof Symbol!=='undefined' ? Symbol.toStringTag : undefined;

const defineProperty = Object.defineProperty;

const freeze = Object.freeze;

const seal = Object.seal;

const NULL$1 = (
	/*! j-globals: null.prototype (internal) */
	Object.create
		? /*#__PURE__*/ Object.preventExtensions(Object.create(null))
		: null
	/*¡ j-globals: null.prototype (internal) */
);

const Default = (
	/*! j-globals: default (internal) */
	function Default (exports, addOnOrigin) {
		return /*#__PURE__*/ function Module (exports, addOnOrigin) {
			if ( !addOnOrigin ) { addOnOrigin = exports; exports = create(NULL$1); }
			if ( assign ) { assign(exports, addOnOrigin); }
			else { for ( var key in addOnOrigin ) { if ( hasOwnProperty.call(addOnOrigin, key) ) { exports[key] = addOnOrigin[key]; } } }
			exports['default'] = exports;
			typeof exports==='function' && exports.prototype && seal(exports.prototype);
			if ( toStringTag ) {
				var descriptor = create(NULL$1);
				descriptor.value = 'Module';
				defineProperty(exports, toStringTag, descriptor);
			}
			return freeze(exports);
		}(exports, addOnOrigin);
	}
	/*¡ j-globals: default (internal) */
);

/*!
 * 模块名称：ES
 * 模块功能：ECMAScript 语法相关共享实用程序。从属于“简计划”。
   　　　　　ECMAScript syntax util. Belong to "Plan J".
 * 模块版本：0.11.0
 * 许可条款：LGPL-3.0
 * 所属作者：龙腾道 <LongTengDao@LongTengDao.com> (www.LongTengDao.com)
 * 问题反馈：https://GitHub.com/LongTengDao/j-es/issues
 * 项目主页：https://GitHub.com/LongTengDao/j-es/
 */

var RESERVED_WORD_ES3 = /^(?:break|c(?:a(?:se|tch)|lass|on(?:st|tinue))|d(?:o|e(?:bugger|fault|lete))|e(?:lse|num|x(?:port|tends))|f(?:alse|inally|or|unction)|i(?:f|mport|n(?:stanceof)?)|n(?:ew|ull)|return|s(?:uper|witch)|t(?:h(?:is|row)|r(?:y|ue)|ypeof)|v(?:ar|oid)|w(?:hile|ith))$/;

var RESERVED_WORD_ESM = /^(?:arguments|break|c(?:a(?:se|tch)|lass|on(?:st|tinue))|d(?:o|e(?:bugger|fault|lete))|e(?:lse|num|val|x(?:port|tends))|f(?:alse|inally|or|unction)|i(?:f|mp(?:lements|ort)|n(?:stanceof|terface)?)|let|n(?:ew|ull)|p(?:ackage|r(?:ivate|otected)|ublic)|return|s(?:tatic|uper|witch)|t(?:h(?:is|row)|r(?:y|ue)|ypeof)|v(?:ar|oid)|w(?:hile|ith)|yield)$/;

var IDENTIFIER_NAME_ES6 = /^(?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])(?:[\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF])*$/;

var IDENTIFIER_NAME_ES5 = /^[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u021F\u0222-\u0233\u0250-\u02AD\u02B0-\u02B8\u02BB-\u02C1\u02D0\u02D1\u02E0-\u02E4\u02EE\u037A\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03D7\u03DA-\u03F3\u0400-\u0481\u048C-\u04C4\u04C7\u04C8\u04CB\u04CC\u04D0-\u04F5\u04F8\u04F9\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0640-\u064A\u0671-\u06D3\u06D5\u06E5\u06E6\u06FA-\u06FC\u0710\u0712-\u072C\u0780-\u07A5\u0905-\u0939\u093D\u0950\u0958-\u0961\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8B\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B36-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB5\u0BB7-\u0BB9\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D60\u0D61\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6A\u0F88-\u0F8B\u1000-\u1021\u1023-\u1027\u1029\u102A\u1050-\u1055\u10A0-\u10C5\u10D0-\u10F6\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1206\u1208-\u1246\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1286\u1288\u128A-\u128D\u1290-\u12AE\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12CE\u12D0-\u12D6\u12D8-\u12EE\u12F0-\u130E\u1310\u1312-\u1315\u1318-\u131E\u1320-\u1346\u1348-\u135A\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u1780-\u17B3\u1820-\u1877\u1880-\u18A8\u1E00-\u1E9B\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u207F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2131\u2133-\u2139\u2160-\u2183\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303A\u3041-\u3094\u309D\u309E\u30A1-\u30FA\u30FC-\u30FE\u3105-\u312C\u3131-\u318E\u31A0-\u31B7\u3400-\u4DB5\u4E00-\u9FA5\uA000-\uA48C\uAC00-\uD7A3\uF900-\uFA2D\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC][\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u021F\u0222-\u0233\u0250-\u02AD\u02B0-\u02B8\u02BB-\u02C1\u02D0\u02D1\u02E0-\u02E4\u02EE\u0300-\u034E\u0360-\u0362\u037A\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03D7\u03DA-\u03F3\u0400-\u0481\u0483-\u0486\u048C-\u04C4\u04C7\u04C8\u04CB\u04CC\u04D0-\u04F5\u04F8\u04F9\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05A1\u05A3-\u05B9\u05BB-\u05BD\u05BF\u05C1\u05C2\u05C4\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0640-\u0655\u0660-\u0669\u0670-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06ED\u06F0-\u06FC\u0710-\u072C\u0730-\u074A\u0780-\u07B0\u0901-\u0903\u0905-\u0939\u093C-\u094D\u0950-\u0954\u0958-\u0963\u0966-\u096F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A02\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A59-\u0A5C\u0A5E\u0A66-\u0A74\u0A81-\u0A83\u0A85-\u0A8B\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B36-\u0B39\u0B3C-\u0B43\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB5\u0BB7-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE7-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C60\u0C61\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC\u0EDD\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6A\u0F71-\u0F84\u0F86-\u0F8B\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1021\u1023-\u1027\u1029\u102A\u102C-\u1032\u1036-\u1039\u1040-\u1049\u1050-\u1059\u10A0-\u10C5\u10D0-\u10F6\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1206\u1208-\u1246\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1286\u1288\u128A-\u128D\u1290-\u12AE\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12CE\u12D0-\u12D6\u12D8-\u12EE\u12F0-\u130E\u1310\u1312-\u1315\u1318-\u131E\u1320-\u1346\u1348-\u135A\u1369-\u1371\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u1780-\u17D3\u17E0-\u17E9\u1810-\u1819\u1820-\u1877\u1880-\u18A9\u1E00-\u1E9B\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u207F\u20D0-\u20DC\u20E1\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2131\u2133-\u2139\u2160-\u2183\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303A\u3041-\u3094\u3099\u309A\u309D\u309E\u30A1-\u30FE\u3105-\u312C\u3131-\u318E\u31A0-\u31B7\u3400-\u4DB5\u4E00-\u9FA5\uA000-\uA48C\uAC00-\uD7A3\uF900-\uFA2D\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE20-\uFE23\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE72\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF65-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/;

var IDENTIFIER_NAME_ES3 = /^[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u01F5\u01FA-\u0217\u0250-\u02A8\u02B0-\u02B8\u02BB-\u02C1\u02D0\u02D1\u02E0-\u02E4\u037A\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03D6\u03DA\u03DC\u03DE\u03E0\u03E2-\u03F3\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E-\u0481\u0490-\u04C4\u04C7\u04C8\u04CB\u04CC\u04D0-\u04EB\u04EE-\u04F5\u04F8\u04F9\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0640-\u064A\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D3\u06D5\u06E5\u06E6\u0905-\u0939\u093D\u0950\u0958-\u0961\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8B\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B36-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB5\u0BB7-\u0BB9\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D60\u0D61\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F69\u0F88-\u0F8B\u10A0-\u10C5\u10D0-\u10F6\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1E00-\u1E9B\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u207F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u2131\u2133-\u2138\u2160-\u2182\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3041-\u3094\u309D\u309E\u30A1-\u30FA\u30FC-\u30FE\u3105-\u312C\u3131-\u318E\u4E00-\u9FA5\uAC00-\uD7A3\uF900-\uFA2D\uFB00-\uFB06\uFB13-\uFB17\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC][\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u01F5\u01FA-\u0217\u0250-\u02A8\u02B0-\u02B8\u02BB-\u02C1\u02D0\u02D1\u02E0-\u02E4\u0300-\u0345\u0360\u0361\u037A\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03CE\u03D0-\u03D6\u03DA\u03DC\u03DE\u03E0\u03E2-\u03F3\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E-\u0481\u0483-\u0486\u0490-\u04C4\u04C7\u04C8\u04CB\u04CC\u04D0-\u04EB\u04EE-\u04F5\u04F8\u04F9\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05A1\u05A3-\u05B9\u05BB-\u05BD\u05BF\u05C1\u05C2\u05C4\u05D0-\u05EA\u05F0-\u05F2\u0621-\u063A\u0640-\u0652\u0660-\u0669\u0670-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0901-\u0903\u0905-\u0939\u093C-\u094D\u0950-\u0954\u0958-\u0963\u0966-\u096F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A02\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A59-\u0A5C\u0A5E\u0A66-\u0A74\u0A81-\u0A83\u0A85-\u0A8B\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B36-\u0B39\u0B3C-\u0B43\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB5\u0BB7-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE7-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C60\u0C61\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D66-\u0D6F\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC\u0EDD\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F69\u0F71-\u0F84\u0F86-\u0F8B\u0F90-\u0F95\u0F97\u0F99-\u0FAD\u0FB1-\u0FB7\u0FB9\u10A0-\u10C5\u10D0-\u10F6\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1E00-\u1E9B\u1EA0-\u1EF9\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u207F\u20D0-\u20DC\u20E1\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u2131\u2133-\u2138\u2160-\u2182\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3041-\u3094\u3099\u309A\u309D\u309E\u30A1-\u30FE\u3105-\u312C\u3131-\u318E\u4E00-\u9FA5\uAC00-\uD7A3\uF900-\uFA2D\uFB00-\uFB06\uFB13-\uFB17\uFB1E-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE20-\uFE23\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE72\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF65-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/;

var Cf = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;

var CANT_IN_SINGLE_QUOTE = /[\n\r'\\\u2028\u2029]/g;
function staticallyEscape (cant_in_single_quote                              )         {
	return CHAR_TO_ESCAPED[cant_in_single_quote];
}

var CHAR_TO_ESCAPED = { '\n': '\\n', '\r': '\\r', '\'': '\\\'', '\\': '\\\\', '\u2028': '\\u2028', '\u2029': '\\u2029' };
function dynamicallyEscape (char_in_cf        )         {
	if ( char_in_cf.length>1 ) {
		return dynamicallyEscape(char_in_cf.charAt(0))+dynamicallyEscape(char_in_cf.charAt(1));
	}
	var hex         = char_in_cf.charCodeAt(0).toString(16).toUpperCase();
	switch ( hex.length ) {
		case 4:
			return '\\u'+hex;
		case 3:
			return '\\u0'+hex;
		case 2:
			return '\\x'+hex;
	}
	return '\\x0'+hex;
}

                                           

function StringLiteral (value        )         {
	return '\''
		+value
		.replace(CANT_IN_SINGLE_QUOTE, staticallyEscape            )
		.replace(Cf, dynamicallyEscape            )
		+'\'';
}

var LIKE_SAFE_INTEGER = /^(?:0|[1-9]\d{0,15})$/;
function isIntegerIndex (key        )          {
	return LIKE_SAFE_INTEGER.test(key) && key       <=9007199254740991;
}
function isReservedWord (name        , noStrict          )          {
	return noStrict
		? RESERVED_WORD_ES3.test(name)
		: RESERVED_WORD_ESM.test(name);
}
function isIdentifierName (name        , ES         )          {
	if ( ES ) {
		if ( ES>=6 ) { return IDENTIFIER_NAME_ES6.test(name); }
		if ( ES>=5 ) { return IDENTIFIER_NAME_ES5.test(name); }
	}
	return IDENTIFIER_NAME_ES3.test(name);
}
function PropertyAccessor (key        , ES         )         {
	if ( isIdentifierName(key, ES) ) { if ( ES >=5 || !RESERVED_WORD_ES3.test(key) ) { return '.'+key; } }
	else { if ( isIntegerIndex(key) ) { return '['+key+']'; } }
	return '['+StringLiteral(key)+']';
}
function PropertyAccessors (keys          , ES         )         {
	var propertyAccessors         = '';
	for ( var length = keys.length, index = 0; index<length; ++index ) {
		propertyAccessors += PropertyAccessor(keys[index], ES);
	}
	return propertyAccessors;
}

/*¡ ES */

const Default$1 = 'import create from \'.Object.create\';\nimport assign from \'.Object.assign\';\nimport hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport toStringTag from \'.Symbol.toStringTag?\';\nimport defineProperty from \'.Object.defineProperty\';\nimport freeze from \'.Object.freeze\';\nimport seal from \'.Object.seal\';\nimport NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: default (internal) */\n	function Default (exports, addOnOrigin) {\n		return /*#__PURE__*/ function Module (exports, addOnOrigin) {\n			if ( !addOnOrigin ) { addOnOrigin = exports; exports = create(NULL); }\n			if ( assign ) { assign(exports, addOnOrigin); }\n			else { for ( var key in addOnOrigin ) { if ( hasOwnProperty.call(addOnOrigin, key) ) { exports[key] = addOnOrigin[key]; } } }\n			exports[\'default\'] = exports;\n			typeof exports===\'function\' && exports.prototype && seal(exports.prototype);\n			if ( toStringTag ) {\n				var descriptor = create(NULL);\n				descriptor.value = \'Module\';\n				defineProperty(exports, toStringTag, descriptor);\n			}\n			return freeze(exports);\n		}(exports, addOnOrigin);\n	}\n	/*¡ j-globals: default (internal) */\n);';

const Private = 'import create from \'.Object.create\';\nimport defineProperty from \'.Object.defineProperty\';\nimport NULL from \'.null.prototype\';\nimport undefined from \'.undefined\';\nexport default (\n	/*! j-globals: private (internal) */\n	/*#__PURE__*/ function (WeakMap) {\n		var GET = create(NULL);\n		GET.value = WeakMap.prototype.get;\n		var SET = create(NULL);\n		SET.value = WeakMap.prototype.set;\n		function set (weak, THIS, _THIS) {\n			weak.set(THIS, _THIS);\n			return _THIS;\n		}\n		function Null () { return create(NULL); }\n		return function Private (PRIVATE) {\n			var weak = /*#__PURE__*/defineProperty(/*#__PURE__*/defineProperty(/*#__PURE__*/new WeakMap, \'get\', GET), \'set\', SET);\n			var _This = PRIVATE===undefined\n				? Null\n				: typeof PRIVATE===\'function\'\n					? \'prototype\' in PRIVATE\n						? function (THIS) { return new PRIVATE(THIS); }\n						: function (THIS) { return PRIVATE(THIS); }\n					: function () { return create(PRIVATE); };\n			return function _ (THIS) {\n				return /*#__PURE__*/weak.get(THIS) || /*#__PURE__*/set(weak, THIS, /*#__PURE__*/_This(THIS));\n			};\n		};\n	}(WeakMap)\n	/*¡ j-globals: private (internal) */\n);';

const of = 'import undefined from \'.undefined\';\nimport Symbol_iterator from \'.Symbol.iterator?\';\nimport toString from \'.Object.prototype.toString\';\nimport charAt from \'.String.prototype.charAt\';\nimport return_false from \'.return.false\';\nimport String_prototype from \'String.prototype\';\nimport { createBound } from \'.native\';\nimport isPrimitive from \'.class.isPrimitive\';\nexport default (\n	/*! j-globals: for.of (internal) */\n	/*#__PURE__*/ function () { \'use strict\';\n		\n		var ES3 = this!==undefined;\n		\n		var isIterable = Symbol_iterator===undefined\n			? return_false\n			: function isIterable (value) { return Symbol_iterator in ( typeof value===\'string\' ? String_prototype : Object(value) ); };\n		\n		function tryReturn (iterable) {\n			try { iterable[\'return\'](); }\n			catch (error) {}\n		}\n		\n		function tryFnValue_tryReturn_throw (callbackfn, value, iterable) {\n			try { return callbackfn(value); }\n			catch (error) {\n				tryReturn(iterable);\n				throw error;\n			}\n		}\n		\n		return function of (arrayLike_iterable, callbackfn/*, thisArg*/) {\n			if ( typeof callbackfn!==\'function\' ) { throw TypeError(typeof callbackfn+\' is not a function\'); }\n			if ( arguments.length>2 ) { callbackfn = createBound(callbackfn, arguments[2]); }\n			if ( arrayLike_iterable==null ) { throw TypeError(\'Cannot convert undefined or null to object\'); }\n			var length, index;\n			if ( isIterable(arrayLike_iterable) ) {\n				arrayLike_iterable = arrayLike_iterable[Symbol_iterator]();\n				if ( isPrimitive(arrayLike_iterable) ) { throw TypeError(\'Result of the Symbol.iterator method is not an object\'); }\n				for ( index = 0; ; ++index ) {\n					var step = arrayLike_iterable.next();\n					if ( isPrimitive(step) ) { throw TypeError(\'Iterator result \'+step+\' is not an object\'); }\n					if ( step.done ) { break; }\n					if ( tryFnValue_tryReturn_throw(callbackfn, step.value, arrayLike_iterable) ) {\n						tryReturn(arrayLike_iterable);\n						break;\n					}\n				}\n				return;\n			}\n			if ( ES3 ) {\n				if ( typeof arrayLike_iterable===\'string\' ) {\n					for ( length = arrayLike_iterable.length, index = 0; index<length; ++index ) {\n						if ( callbackfn(arrayLike_iterable.charAt(index)) ) { break; }\n					}\n					return;\n				}\n				if ( toString.call(arrayLike_iterable)===\'[object String]\' ) {\n					for ( length = arrayLike_iterable.length, index = 0; index<length; ++index ) {\n						var char = charAt.call(arrayLike_iterable, index);\n						if ( index in arrayLike_iterable && arrayLike_iterable[index]!==char ) { throw TypeError(\'stringObject[index] is not writable in ES3+ spec\'); }\n						if ( callbackfn(char) ) { break; }\n					}\n					return;\n				}\n			}\n			for ( length = parseInt(arrayLike_iterable.length), index = 0; index<length; ++index ) {\n				if ( callbackfn(arrayLike_iterable[index]) ) { break; }\n			}\n		};\n		\n	}()\n	/*¡ j-globals: for.of (internal) */\n);';

const For = 'import create from \'.Object.create\';\nimport NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: Symbol.For (internal) */\n	function For () {\n		var cache = create(NULL);\n		var handler = create(NULL);\n		handler.get = (FOR, name) => cache[name] || ( cache[name] = Symbol(name) );\n		return new Proxy((name) => cache[name] || ( cache[name] = Symbol(name) ), handler);\n	}\n	/*¡ j-globals: Symbol.For (internal) */\n);';

const TYPEOF = 'export default (\n	/*! j-globals: typeof (internal) */\n	function TYPEOF (value) {\n		return value===null ? \'null\' : typeof value;\n	}\n	/*¡ j-globals: typeof (internal) */\n);';

const class_isBoolean = 'import valueOf from \'.Boolean.prototype.valueOf\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isBoolean (internal) */\n	function () {\n		function __PURE__ (value) {\n			throwStackOverflowErrorEarly();\n			try { valueOf.call(value); }\n			catch (error) { return false; }\n			return true;\n		}\n		return function isBoolean (value) {\n			return /*#__PURE__*/ __PURE__(value);\n		};\n	}()\n	/*¡ j-globals: class.isBoolean (internal) */\n);';

const class_isNumber = 'import valueOf from \'.Number.prototype.valueOf\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isNumber (internal) */\n	function () {\n		function __PURE__ (value) {\n			throwStackOverflowErrorEarly();\n			try { valueOf.call(value); }\n			catch (error) { return false; }\n			return true;\n		}\n		return function isNumber (value) {\n			return /*#__PURE__*/ __PURE__(value);\n		};\n	}()\n	/*¡ j-globals: class.isNumber (internal) */\n);';

const class_isString = 'import valueOf from \'.String.prototype.valueOf\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isString (internal) */\n	function () {\n		function __PURE__ (value) {\n			throwStackOverflowErrorEarly();\n			try { valueOf.call(value); }\n			catch (error) { return false; }\n			return true;\n		}\n		return function isString (value) {\n			return /*#__PURE__*/ __PURE__(value);\n		};\n	}()\n	/*¡ j-globals: class.isString (internal) */\n);';

const class_isDate = 'import valueOf from \'.Date.prototype.valueOf\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isDate (internal) */\n	function () {\n		function __PURE__ (value) {\n			throwStackOverflowErrorEarly();\n			try { valueOf.call(value); }\n			catch (error) { return false; }\n			return true;\n		}\n		return function isDate (value) {\n			return /*#__PURE__*/ __PURE__(value);\n		};\n	}()\n	/*¡ j-globals: class.isDate (internal) */\n);';

const class_isRegExp = 'import test from \'.RegExp.prototype.test\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isRegExp (internal) */\n	function () {\n		function __PURE__ (value) {\n			throwStackOverflowErrorEarly();\n			try { test.call(value, \'\'); }\n			catch (error) { return false; }\n			return true;\n		}\n		return function isRegExp (value) {\n			return /*#__PURE__*/ __PURE__(value);\n		};\n	}()\n	/*¡ j-globals: class.isRegExp (internal) */\n);';

const class_isMap = 'import has from \'.Map.prototype.has?\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isMap (internal) */\n	has\n		? function () {\n			function __PURE__ (value) {\n				throwStackOverflowErrorEarly();\n				try { has.call(value); }\n				catch (error) { return false; }\n				return true;\n			}\n			return function isMap (value) {\n				return /*#__PURE__*/ __PURE__(value);\n			};\n		}()\n		: function isMap () { return false; }\n	/*¡ j-globals: class.isMap (internal) */\n);';

const class_isSet = 'import has from \'.Set.prototype.has?\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isSet (internal) */\n	has\n		? function () {\n			function __PURE__ (value) {\n				throwStackOverflowErrorEarly();\n				try { has.call(value); }\n				catch (error) { return false; }\n				return true;\n			}\n			return function isSet (value) {\n				return /*#__PURE__*/ __PURE__(value);\n			};\n		}()\n		: function isSet () { return false; }\n	/*¡ j-globals: class.isSet (internal) */\n);';

const class_isWeakMap = 'import has from \'.WeakMap.prototype.has?\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isWeakMap (internal) */\n	has\n		? function () {\n			function __PURE__ (value) {\n				throwStackOverflowErrorEarly();\n				try { has.call(value, has); }\n				catch (error) { return false; }\n				return true;\n			}\n			return function isWeakMap (value) {\n				return /*#__PURE__*/ __PURE__(value);\n			};\n		}()\n		: function isWeakMap () { return false; }\n	/*¡ j-globals: class.isWeakMap (internal) */\n);';

const class_isWeakSet = 'import has from \'.WeakSet.prototype.has?\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isWeakSet (internal) */\n	has\n		? function () {\n			function __PURE__ (value) {\n				throwStackOverflowErrorEarly();\n				try { has.call(value, has); }\n				catch (error) { return false; }\n				return true;\n			}\n			return function isWeakSet (value) {\n				return /*#__PURE__*/ __PURE__(value);\n			};\n		}()\n		: function isWeakSet () { return false; }\n	/*¡ j-globals: class.isWeakSet (internal) */\n);';

const class_isPromise = 'import then from \'.Promise.prototype.then?\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isPromise (internal) */\n	then\n		? function () {\n			function __PURE__ (value) {\n				throwStackOverflowErrorEarly();\n				try { then.call(value); }\n				catch (error) { return false; }\n				return true;\n			}\n			return function isPromise (value) {\n				return /*#__PURE__*/ __PURE__(value);\n			};\n		}()\n		: function isPromise () { return false; }\n	/*¡ j-globals: class.isPromise (internal) */\n);';

const class_isSymbol = 'import valueOf from \'.Symbol.prototype.valueOf?\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isSymbol (internal) */\n	valueOf\n		? function () {\n			function __PURE__ (value) {\n				throwStackOverflowErrorEarly();\n				try { valueOf.call(value); }\n				catch (error) { return false; }\n				return true;\n			}\n			return function isSymbol (value) {\n				return /*#__PURE__*/ __PURE__(value);\n			};\n		}()\n		: function isSymbol () { return false; }\n	/*¡ j-globals: class.isSymbol (internal) */\n);';

const class_isBigInt = 'import valueOf from \'.BigInt.prototype.valueOf?\';\nimport throwStackOverflowErrorEarly from \'.void.KEEP\';\nexport default (\n	/*! j-globals: class.isBigInt (internal) */\n	valueOf\n		? function () {\n			function __PURE__ (value) {\n				throwStackOverflowErrorEarly();\n				try { valueOf.call(value); }\n				catch (error) { return false; }\n				return true;\n			}\n			return function isBigInt (value) {\n				return /*#__PURE__*/ __PURE__(value);\n			};\n		}()\n		: function isBigInt () { return false; }\n	/*¡ j-globals: class.isBigInt (internal) */\n);';

const class_isPrimitive = 'export default (\n	/*! j-globals: class.isPrimitive (internal) */\n	function isPrimitive (argument) {\n		return Object(argument)!==argument;\n	}\n	/*¡ j-globals: class.isPrimitive (internal) */\n);';

const NULL_prototype = 'export default (\n	/*! j-globals: null.prototype (internal) */\n	Object.create\n		? /*#__PURE__*/ Object.preventExtensions(Object.create(null))\n		: null\n	/*¡ j-globals: null.prototype (internal) */\n);';

const NULL_ = 'import hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport Object_freeze from \'.Object.freeze\';\nimport { create as Object_create } from \'.native\';\nimport _NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: null.constructor (internal) */\n	/*#__PURE__*/ function () {\n		\'use strict\';\n		var assign = Object.assign || function assign (target, source) {\n			for ( var key in source ) {\n				if ( hasOwnProperty.call(source, key) ) { target[key] = source[key]; }\n			}\n			return target;\n		};\n		var NULL = function (object) {\n			if ( object ) {\n				return /*#__PURE__*/ assign(/*#__PURE__*/ Object_create(_NULL), object);\n			}\n		};\n		delete NULL.name;\n		//try { delete NULL.length; } catch (error) {}\n		NULL.prototype = null;\n		Object_freeze(NULL);\n		return NULL;\n	}()\n	/*¡ j-globals: null.constructor (internal) */\n);';

const NULL_assign = 'import Object_assign from \'.Object.assign\';\nimport { create } from \'.native\';\nimport NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: null.assign (internal) */\n	function assign (target, firstSource) {\n		if ( arguments.length>2 ) {\n			if ( target===null ) { arguments[0] = create(NULL); }\n			return Object_assign.apply(null, arguments);\n		}\n		else {\n			return Object_assign(target===null ? create(NULL) : target, firstSource);\n		}\n	}\n	/*¡ j-globals: null.assign (internal) */\n);';

const NULL_create = 'import undefined from \'.undefined\';\nimport propertyIsEnumerable from \'.Object.prototype.propertyIsEnumerable\';\nimport { Descriptor, create as Object_create } from \'.native\';\nimport NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: null.create (internal) */\n	function () {\n		var keys = Object.keys;\n		var getOwnPropertySymbols = Object.getOwnPropertySymbols;\n		function __PURE__ (proto, descriptorMap) {\n			var created = Object_create(NULL);\n			var names = keys(descriptorMap);\n			for ( var length = names.length, index = 0; index<length; ++index ) {\n				var name = names[index];\n				created[name] = Descriptor(descriptorMap[name]);\n			}\n			if ( getOwnPropertySymbols ) {\n				var symbols = getOwnPropertySymbols(descriptorMap);\n				for ( length = symbols.length, index = 0; index<length; ++index ) {\n					var symbol = symbols[index];\n					if ( propertyIsEnumerable.call(descriptorMap, symbol) ) { created[symbol] = Descriptor(descriptorMap[symbol]); }\n				}\n			}\n			return Object_create(proto, created);\n		}\n		return function create (proto, descriptorMap) {\n			return descriptorMap===undefined\n				? /*#__PURE__*/ Object_create(proto===undefined ? NULL : proto)\n				: /*#__PURE__*/ __PURE__(proto, descriptorMap);\n		};\n	}()\n	/*¡ j-globals: null.create (internal) */\n);';

const NULL_defineProperties = 'import propertyIsEnumerable from \'.Object.prototype.propertyIsEnumerable\';\nimport keys from \'.Object.keys\';\nimport getOwnPropertySymbols from \'.Object.getOwnPropertySymbols\';\nimport Object_defineProperties from \'.Object.defineProperties\';\nimport { Descriptor, create } from \'.native\';\nimport NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: null.defineProperties (internal) */\n	function () {\n		return function defineProperties (object, descriptorMap) {\n			var created = create(NULL);\n			var names = keys(descriptorMap);\n			for ( var length = names.length, index = 0; index<length; ++index ) {\n				var name = names[index];\n				created[name] = Descriptor(descriptorMap[name]);\n			}\n			var symbols = getOwnPropertySymbols(descriptorMap);\n			for ( length = symbols.length, index = 0; index<length; ++index ) {\n				var symbol = symbols[index];\n				if ( propertyIsEnumerable.call(descriptorMap, symbol) ) { created[symbol] = Descriptor(descriptorMap[symbol]); }\n			}\n			return Object_defineProperties(object, created);\n		};\n	}()\n	/*¡ j-globals: null.defineProperties (internal) */\n);';

const NULL_defineProperty = 'import Object_defineProperty from \'.Object.defineProperty\';\nimport { Descriptor } from \'.native\';\nexport default (\n	/*! j-globals: null.defineProperty (internal) */\n	function () {\n		var Reflect_defineProperty = typeof Reflect===\'object\' ? Reflect.defineProperty : function (object, key, descriptor) {\n			try { Object_defineProperty(object, key, descriptor); }\n			catch (error) { return false; }\n			return true;\n		};\n		return function defineProperty (object, key, descriptor, useReflect) {\n			return ( useReflect ? Reflect_defineProperty : Object_defineProperty )(object, key, Descriptor(descriptor));\n		};\n	}()\n	/*¡ j-globals: null.defineProperty (internal) */\n);';

const NULL_fromEntries = 'import assign from \'.Object.assign\';\nimport Object_fromEntries from \'.Object.fromEntries\';\nimport { create } from \'.native\';\nimport NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: null.fromEntries (internal) */\n	function fromEntries (entries) {\n		return /*#__PURE__*/ assign(/*#__PURE__*/ create(NULL), /*#__PURE__*/ Object_fromEntries(entries));\n	}\n	/*¡ j-globals: null.fromEntries (internal) */\n);';

const NULL_getOwnPropertyDescriptor = 'import Object_getOwnPropertyDescriptor from \'.Object.getOwnPropertyDescriptor\';\nimport { create } from \'.native\';\nimport NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: null.getOwnPropertyDescriptor (internal) */\n	function () {\n		function __PURE__ (descriptor) {\n			var propertyDescriptor = create(NULL);\n			if ( descriptor.hasOwnProperty(\'value\') ) {\n				propertyDescriptor.value = descriptor.value;\n				propertyDescriptor.writable = descriptor.writable;\n			}\n			else {\n				propertyDescriptor.get = descriptor.get;\n				propertyDescriptor.set = descriptor.set;\n			}\n			propertyDescriptor.enumerable = descriptor.enumerable;\n			propertyDescriptor.configurable = descriptor.configurable;\n			return propertyDescriptor;\n		}\n		return function getOwnPropertyDescriptor (object, key) {\n			return /*#__PURE__*/__PURE__(/*#__PURE__*/Object_getOwnPropertyDescriptor(object, key));\n		};\n	}()\n	/*¡ j-globals: null.getOwnPropertyDescriptor (internal) */\n);';

const NULL_getOwnPropertyDescriptors = 'import getOwnPropertyDescriptor from \'.null.getOwnPropertyDescriptor\';\nimport { create } from \'.native\';\nimport NULL from \'.null.prototype\';\nvar ownKeys = typeof Reflect===\'object\' ? Reflect.ownKeys : Object.getOwnPropertyNames;\nexport default (\n	/*! j-globals: null.getOwnPropertyDescriptors (internal) */\n	function getOwnPropertyDescriptors (object) {\n		var descriptorMap = /*#__PURE__*/ create(NULL);\n		for ( var keys = /*#__PURE__*/ ownKeys(object), length = keys.length, index = 0; index<length; ++index ) {\n			var key = keys[index];\n			descriptorMap[key] = /*#__PURE__*/ getOwnPropertyDescriptor(object, key);\n		}\n		return descriptorMap;\n	}\n	/*¡ j-globals: null.getOwnPropertyDescriptors (internal) */\n);';

const NULL_PropertyDescriptor = 'import { create } from \'.native\';\nimport NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: null.PropertyDescriptor (internal) */\n	function () {\n		function __PURE__ (value_get, set_writable, enumerable, configurable) {\n			var propertyDescriptor = create(NULL);\n			if ( set_writable===true || set_writable===false ) {\n				propertyDescriptor.value = value_get;\n				propertyDescriptor.writable = set_writable;\n			}\n			else {\n				propertyDescriptor.get = value_get;\n				propertyDescriptor.set = set_writable;\n			}\n			propertyDescriptor.enumerable = enumerable;\n			propertyDescriptor.configurable = configurable;\n			return propertyDescriptor;\n		}\n		return function PropertyDescriptor (value_get, set_writable, enumerable, configurable) {\n			return /*#__PURE__*/ __PURE__(value_get, set_writable, enumerable, configurable);\n		};\n	}()\n	/*¡ j-globals: null.PropertyDescriptor (internal) */\n);';

const RETURN = 'export default (\n	/*! j-globals: return (internal) */\n	function RETURN (value) {\n		return value;\n	}\n	/*¡ j-globals: return (internal) */\n);';

const return_true = 'export default (\n	/*! j-globals: return.true (internal) */\n	function return_true () {\n		return true;\n	}\n	/*¡ j-globals: return.true (internal) */\n);';

const return_false = 'export default (\n	/*! j-globals: return.false (internal) */\n	function return_false () {\n		return false;\n	}\n	/*¡ j-globals: return.false (internal) */\n);';

const return_KEEP = 'export default (\n	/*! j-globals: return.KEEP (internal) */\n	/*#__PURE__*/ function () {\n		"use strict";\n		try { return Function(\'"use strict";return function(v){return v}\')(); }\n		catch (error) {}\n		return function KEEP (value) { return value; };\n	}()\n	/*¡ j-globals: return.KEEP (internal) */\n);';

const void_KEEP = 'export default (\n	/*! j-globals: void.KEEP (internal) */\n	/*#__PURE__*/ function () {\n		"use strict";\n		try { return Function(\'"use strict";return function(){}\')(); }\n		catch (error) {}\n		return function KEEP () {};\n	}()\n	/*¡ j-globals: void.KEEP (internal) */\n);';

const throwError = 'import Error0 from \'.Error?=\';\nexport default (\n	/*! j-globals: throw.Error (internal) */\n	function throwError (message) {\n		throw Error0(message);\n	}\n	/*¡ j-globals: throw.Error (internal) */\n);';

const throwEvalError = 'export default (\n	/*! j-globals: throw.EvalError (internal) */\n	function throwEvalError (message) {\n		throw EvalError(message);\n	}\n	/*¡ j-globals: throw.EvalError (internal) */\n);';

const THROW = 'export default (\n	/*! j-globals: throw (internal) */\n	function THROW (error) {\n		throw error;\n	}\n	/*¡ j-globals: throw (internal) */\n);';

const throwRangeError = 'export default (\n	/*! j-globals: throw.RangeError (internal) */\n	function throwRangeError (message) {\n		throw RangeError(message);\n	}\n	/*¡ j-globals: throw.RangeError (internal) */\n);';

const throwReferenceError = 'export default (\n	/*! j-globals: throw.ReferenceError (internal) */\n	function throwReferenceError (message) {\n		throw ReferenceError(message);\n	}\n	/*¡ j-globals: throw.ReferenceError (internal) */\n);';

const throwSyntaxError = 'export default (\n	/*! j-globals: throw.SyntaxError (internal) */\n	function throwSyntaxError (message) {\n		throw SyntaxError(message);\n	}\n	/*¡ j-globals: throw.SyntaxError (internal) */\n);';

const throwTypeError = 'export default (\n	/*! j-globals: throw.TypeError (internal) */\n	function throwTypeError (message) {\n		throw TypeError(message);\n	}\n	/*¡ j-globals: throw.TypeError (internal) */\n);';

const throwURIError = 'export default (\n	/*! j-globals: throw.URIError (internal) */\n	function throwURIError (message) {\n		throw URIError(message);\n	}\n	/*¡ j-globals: throw.URIError (internal) */\n);';

const NATIVE = 'import floor from \'.Math.floor\';\nimport IsArray from \'.Array.isArray?=\';\nimport Infinity from \'.Infinity\';\nimport Symbol_species from \'.Symbol.species?\';\nimport undefined from \'.undefined\';\nimport toString from \'.Object.prototype.toString\';\nimport Object_prototype from \'.Object.prototype\';\nimport Array_prototype from \'.Array.prototype\';\nimport fromCharCode from \'.String.fromCharCode\';\nimport ArrayCreate from \'.Array\';\nimport hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport NULL from \'.null.prototype\';\nimport isPrimitive from \'.class.isPrimitive\';\n\nexport var create = Object.create;\nexport function Descriptor (source) {\n	var target = create(NULL);\n	if ( hasOwnProperty.call(source, \'value\') ) { target.value = source.value; }\n	if ( hasOwnProperty.call(source, \'writable\') ) { target.writable = source.writable; }\n	if ( hasOwnProperty.call(source, \'get\') ) { target.get = source.get; }\n	if ( hasOwnProperty.call(source, \'set\') ) { target.set = source.set; }\n	if ( hasOwnProperty.call(source, \'enumerable\') ) { target.enumerable = source.enumerable; }\n	if ( hasOwnProperty.call(source, \'configurable\') ) { target.configurable = source.configurable; }\n	return target;\n}\n\n//                 18446744073709551615 // 0xFFFFFFFFFFFFFFFF //                                                         // 0b1777777777777777777777 // 2**64-1\n//                  9223372036854775807 // 0x7FFFFFFFFFFFFFFF //                                                         // 0b0777777777777777777777 // 2**63-1\nvar MAX_SAFE_INTEGER = 9007199254740991;// 0x001FFFFFFFFFFFFF // 0b11111111111111111111111111111111111111111111111111111 // 0o0000377777777777777777 // 2**53-1\nvar MAX_ARRAY_LENGTH = /*  */4294967295;// 0x00000000FFFFFFFF // 0b00000000000000000000011111111111111111111111111111111 // 0o0000000000037777777777 // 2**32-1\n//                                      // 0x000000003FFFFFFF // 0b00000000000000000000000111111111111111111111111111111 // 0o0000000000007777777777 // 2**30-1\n//var MAX_STRING_LENGTH =    1073741799;// 0x000000003FFFFFE7 // 0b00000000000000000000000111111111111111111111111100111 // 0o0000000000007777777747 // 2**30-1-24\nvar LIKE_SAFE_INTEGER = /^(?:0|[1-9]\\d{0,15})$/;\nvar LIKE_ARRAY_INDEX = /^(?:0|[1-4]\\d{0,9}|[5-9]\\d{0,8})$/;\nfunction isIntegerIndex (key) {\n	return LIKE_SAFE_INTEGER.test(key) && key<=MAX_SAFE_INTEGER;\n}\nfunction isArrayIndex (key) {\n	return LIKE_ARRAY_INDEX.test(key) && key<MAX_ARRAY_LENGTH;\n}\nexport { isArrayIndex as isIndex };\n\nexport function ToObject (argument, _message) { return Object(/*#__PURE__*/ RequireObjectCoercible(argument, _message)); }\nexport function ToString (argument) { return \'\'+argument; }\nexport function ToNumber (argument) { return +argument; }// !Number(): throw bigint\nexport function ToInteger (argument) {\n	argument = ToNumber(argument);\n	if ( argument!==argument ) { return 0; }\n	if ( argument===0 || argument===Infinity || argument=== -Infinity ) { return argument; }\n	return argument>0 ? floor(argument) : -floor(-argument);\n}\nexport function RequireObjectCoercible (argument, _message) {\n	if ( argument==null ) { throw TypeError(_message); }\n	return argument;\n}\nexport function UTF16Decode (lead, trail) { return ( lead-0xD800 )*1024+( trail-0xDC00 )+0x10000; }\n\nexport function UTF16Encoding (cp) {\n	if ( cp<=0xFFFF ) { return fromCharCode(cp); }\n	cp -= 0x10000;\n	return fromCharCode(floor(cp/1024)+0xD800, cp%1024+0xDC00);\n}\n\nexport function ToLength (argument) {// [v] ES 6: start number only could has use in ES 6 class species\n	var len = ToNumber(argument);\n	if ( len>0 ) { return len>MAX_SAFE_INTEGER ? MAX_SAFE_INTEGER : floor(len); }\n	return 0;\n}\nexport function ToUint32 (argument) {// ES 5\n	return argument>>>0;\n	//var number = ToNumber(argument);\n	//if ( !number || number===Infinity || number===-Infinity ) { return 0; }\n	//var posInt = number>0 ? floor(number) : -floor(-number);\n	//var int32bit = posInt%4294967296;// 2**32 // MAX_ARRAY_LENGTH+1\n	//return int32bit<0 ? int32bit+4294967296 : int32bit;\n}\n\nfunction IsConstructor (argument) { return typeof argument===\'function\'; }// alert regexp ...\n//function notThisRealm_and_isBuiltInArrayConstructorOfItsRealm (originalArray_constructor) { }\nexport var TheUndefinedType = 1;\nexport var TheNullType = 2;\nexport var TheBooleanType = 3;\nexport var TheStringType = 4;\nexport var TheSymbolType = 5;\nexport var TheNumberType = 6;\nexport var TheObjectType = 7;\nexport var TheBigIntType = -1;\nexport function Type (argument) {\n	if ( Object(argument)===argument ) { return TheObjectType; }// document.all unknown date ...\n	switch ( typeof argument ) {\n		case \'object\':\n			return TheNullType;\n		case \'undefined\':\n			return TheUndefinedType;\n		case \'boolean\':\n			return TheBooleanType;\n		case \'string\':\n			return TheStringType;\n		case \'symbol\':\n			return TheSymbolType;\n		case \'number\':\n			return TheNumberType;\n		case \'bigint\':\n			return TheBigIntType;\n	}\n	return 0;\n}\nexport function ArraySpeciesCreate (originalArray, length) {\n	var C;\n	if ( IsArray(originalArray) ) {\n		C = originalArray.constructor;\n		//if ( IsConstructor(C) && notThisRealm_and_isBuiltInArrayConstructorOfItsRealm(C) ) { C = undefined; }\n		if ( isPrimitive(C) ) {\n			C = Symbol_species===undefined ? undefined : C[Symbol_species];\n			if ( C===null ) { C = undefined; }\n		}\n	}\n	if ( C===undefined ) { return ArrayCreate(length); }\n	if ( !IsConstructor(C) ) { throw TypeError(\'object.constructor[Symbol.species] is not a constructor\'); }\n	return new C(length);\n}\n\nvar descriptor = create && /*#__PURE__*/ function () {\n	var descriptor = create(NULL);\n	descriptor.value = undefined;\n	descriptor.writable = true;\n	descriptor.enumerable = true;\n	descriptor.configurable = true;\n	return descriptor;\n}();\nvar defineProperty = Object.defineProperty;\nexport var defineIndexValue = create\n	? function CreateDataProperty (array, index, value) {\n		index in Array_prototype && defineProperty(array, index, descriptor);\n		array[index] = value;\n	}\n	: function CreateDataProperty (array, index, value) {\n		array[index] = value;\n	};\nexport var defineKeyValue = create\n	? typeof Symbol===\'function\'\n		? typeof Proxy===\'function\'\n			? function () {\n				var PropertyKey = /*#__PURE__*/ new Proxy({}, { get: function (target, key) { return key; } });\n				return function CreateDataProperty (object, key, value) {\n					key = PropertyKey[key];\n					key in Object_prototype && defineProperty(object, key, descriptor);\n					object[key] = value;\n				};\n			}()\n			: function CreateDataProperty (object, key, value) {\n				descriptor.value = value;\n				try {defineProperty(object, key, descriptor);}\n				finally { descriptor.value = undefined; }\n			}\n		: function CreateDataProperty (object, key, value) {\n			key = \'\'+key;\n			key in Object_prototype && defineProperty(object, key, descriptor);\n			object[key] = value;\n		}\n	: function CreateDataProperty (object, key, value) {\n		object[key] = value;\n	};\n\nexport var createBound = function () {\n	\'use strict\';\n	return this;\n}()\n	? function createBound (fn, thisArg) {\n		return thisArg===undefined ? fn : function bound () {\n			return apply.call(fn, thisArg, arguments);\n		};\n	}\n	: function createBound (fn, thisArg) {\n		if ( thisArg==null ) { throw TypeError(\'undefined or null cannot become this in ES3\'); }\n		return function bound () {\n			return apply.call(fn, thisArg, arguments);\n		};\n	};\nexport function assertArrayFn (fn) {\n	switch ( typeof fn ) {\n		case \'function\':\n			return;\n		case \'object\':\n			throw TypeError(( fn ? toString.call(fn) : fn )+\' is not a function\');\n		default:\n			throw TypeError(String(fn)+\' is not a function\');\n	}\n}\n\nexport function FlattenIntoArray (target, source, sourceLen, start, depth, mapperFunction) {\n	var targetIndex = start;\n	for ( var sourceIndex = 0; sourceIndex<sourceLen; ++sourceIndex ) {\n		if ( sourceIndex in source ) {\n			var element = source[sourceIndex];\n			if ( mapperFunction ) { element = mapperFunction(element, sourceIndex, source); }\n			if ( depth>0 && IsArray(element) ) {\n				targetIndex = FlattenIntoArray(target, element, ToLength(element.length), targetIndex, depth-1);\n			}\n			else {\n				if ( targetIndex>=9007199254740991 ) { throw TypeError(\'Invalid index\'); }// Number.MAX_SAFE_INTEGER // 2**53-1\n				defineIndexValue(target, targetIndex, element);\n				++targetIndex;\n			}\n		}\n	}\n	return targetIndex;\n}\n';

const INTERNAL = /*#__PURE__*/ assign(create(NULL), {
	
	'native': NATIVE,
	
	'default': Default$1,
	'private': Private,
	'for.of': of,
	
	'Symbol.For': For,
	
	'typeof': TYPEOF,
	
	'class.isBoolean': class_isBoolean,
	'class.isNumber': class_isNumber,
	'class.isString': class_isString,
	'class.isDate': class_isDate,
	'class.isRegExp': class_isRegExp,
	'class.isMap': class_isMap,
	'class.isSet': class_isSet,
	'class.isWeakMap': class_isWeakMap,
	'class.isWeakSet': class_isWeakSet,
	'class.isPromise': class_isPromise,
	'class.isSymbol': class_isSymbol,
	'class.isBigInt': class_isBigInt,
	'class.isPrimitive': class_isPrimitive,
	
	'null.prototype': NULL_prototype,
	'null': NULL_,
	'null.assign': NULL_assign,
	'null.create': NULL_create,
	'null.defineProperties': NULL_defineProperties,
	'null.defineProperty': NULL_defineProperty,
	'null.getOwnPropertyDescriptor': NULL_getOwnPropertyDescriptor,
	'null.getOwnPropertyDescriptors': NULL_getOwnPropertyDescriptors,
	'null.fromEntries': NULL_fromEntries,
	'null.PropertyDescriptor': NULL_PropertyDescriptor,
	
	'return': RETURN,
	'return.true': return_true,
	'return.false': return_false,
	'return.KEEP': return_KEEP,
	
	'void.KEEP': void_KEEP,
	
	'throw.Error': throwError,
	'throw.EvalError': throwEvalError,
	'throw': THROW,
	'throw.RangeError': throwRangeError,
	'throw.ReferenceError': throwReferenceError,
	'throw.SyntaxError': throwSyntaxError,
	'throw.TypeError': throwTypeError,
	'throw.URIError': throwURIError,
	
})                               ;

const _Buffer_from_ = 'import hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport undefined from \'.undefined\';\nexport default (\n	/*! j-globals: Buffer.from (fallback) */\n	typeof Buffer===\'function\' && /*#__PURE__*/ hasOwnProperty.call(Buffer, \'from\') ? Buffer.from : undefined\n	/*¡ j-globals: Buffer.from (fallback) */\n);';

const _Object_keys_ = 'export default (\n	/*! j-globals: Object.keys (fallback) */\n	/*#__PURE__*/ function () {\n		var keys = Object.keys;\n		if ( keys ) {\n			try {\n				keys(0);\n				return keys;\n			}\n			catch (error) { }\n		}\n	}()\n	/*¡ j-globals: Object.keys (fallback) */\n)';

const _Object_defineProperty_ = 'export default (\n	/*! j-globals: Object.defineProperty (fallback) */\n	Object.seal && Object.defineProperty\n	/*¡ j-globals: Object.defineProperty (fallback) */\n)';

const FALLBACK = /*#__PURE__*/ assign(create(NULL), {
	'Object.assign': _Object_defineProperty_,
	'Object.entries': _Object_keys_,
	'Buffer.from': _Buffer_from_,
})                               ;

const _Default = 'import create from \'.Object.create?=\';\nimport hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport toStringTag from \'.Symbol.toStringTag?\';\nvar assign = Object.assign;\nvar defineProperty = Object.defineProperty;\nvar freeze = Object.freeze;\nvar seal = Object.seal;\nexport default (\n	/*! j-globals: default (internal) */\n	function Default (exports, addOnOrigin) {\n		return /*#__PURE__*/ function Module (exports, addOnOrigin) {\n			if ( !addOnOrigin ) { addOnOrigin = exports; exports = create(null); }\n			if ( assign ) { assign(exports, addOnOrigin); }\n			else {\n				for ( var key in addOnOrigin ) { if ( hasOwnProperty.call(addOnOrigin, key) ) { exports[key] = addOnOrigin[key]; } }\n				if ( !{ \'toString\': null }.propertyIsEnumerable(\'toString\') ) {\n					var keys = [ \'constructor\', \'propertyIsEnumerable\', \'isPrototypeOf\', \'hasOwnProperty\', \'valueOf\', \'toLocaleString\', \'toString\' ];\n					while ( key = keys.pop() ) { if ( hasOwnProperty.call(addOnOrigin, key) ) { exports[key] = addOnOrigin[key]; } }\n				}\n			}\n			exports[\'default\'] = exports;\n			if ( seal ) {\n				typeof exports===\'function\' && exports.prototype && seal(exports.prototype);\n				if ( toStringTag ) {\n					var descriptor = create(null);\n					descriptor.value = \'Module\';\n					defineProperty(exports, toStringTag, descriptor);\n				}\n				freeze(exports);\n			}\n			return exports;\n		}(exports, addOnOrigin);\n	}\n	/*¡ j-globals: default (internal) */\n);';

const _Reflect_ownKeys = 'import getOwnPropertyNames from \'.Object.getOwnPropertyNames?=\';\nimport push from \'.Array.prototype.push\';\nimport isPrimitive from \'.class.isPrimitive\';\nexport default typeof Reflect===\'object\' ? Reflect.ownKeys : (\n	/*! j-globals: Reflect.ownKeys (polyfill) */\n	/*#__PURE__*/ function () {\n		\n		var __PURE__;\n		\n		var Object_getOwnPropertySymbols = Object.getOwnPropertySymbols;\n		\n		var Object_getOwnPropertyNames = Object.getOwnPropertyNames;\n		if ( Object_getOwnPropertyNames ) {\n			try { Object_getOwnPropertyNames(0); }\n			catch (error) {\n				if ( Object_getOwnPropertySymbols ) {\n					__PURE__ = function ownKeys (object) {\n						var keys = Object_getOwnPropertyNames(object);\n						push.apply(keys, Object_getOwnPropertySymbols);\n						return keys;\n					};\n				}\n				else { return Object_getOwnPropertyNames; }\n			}\n		}\n		else { Object_getOwnPropertyNames = getOwnPropertyNames; }\n		\n		if ( !__PURE__ ) {\n			__PURE__ = Object_getOwnPropertySymbols\n				? function ownKeys (object) {\n					if ( isPrimitive(object) ) { throw TypeError(\'Reflect.ownKeys called on non-object\'); }\n					var keys = Object_getOwnPropertyNames(object);\n					push.apply(keys, Object_getOwnPropertySymbols);\n					return keys;\n				}\n				: function ownKeys (object) {\n					if ( isPrimitive(object) ) { throw TypeError(\'Reflect.ownKeys called on non-object\'); }\n					return Object_getOwnPropertyNames(object);\n				};\n		}\n		\n		return function ownKeys (object) {\n			return /*#__PURE__*/ __PURE__(object);\n		};\n		\n	}()\n	/*¡ j-globals: Reflect.ownKeys (polyfill) */\n);';

const _Reflect_apply = 'import Function_prototype_apply from \'.Function.prototype.apply\';\nexport default typeof Reflect===\'object\' ? Reflect.apply : (\n	/*! j-globals: Reflect.apply (polyfill) */\n	function apply (target, thisArg, args) {\n		return Function_prototype_apply.call(target, thisArg, args);\n	}\n	/*¡ j-globals: Reflect.apply (polyfill) */\n);';

const _Object_create = 'import undefined from \'.undefined\';\nexport default Object.create || (\n	/*! j-globals: Object.create (polyfill) */\n	/*#__PURE__*/ function () {\n		var NULL;\n		if ( document.domain ) {\n			try { dom = new ActiveXObject(\'htmlfile\'); }\n			catch (error) { }\n		}\n		if ( dom ) {\n			dom.write(\'<script><\\/script>\');\n			dom.close();\n			NULL = dom.parentWindow.Object.prototype;\n		}\n		else {\n			dom = document.createElement(\'iframe\');\n			dom.setAttribute(\'style\', \'display:none !important;_display:none;\');//dom.style.display = \'none\';\n			var parent = document.body || document.documentElement;\n			parent.appendChild(dom);\n			dom.src = \'javascript:\';\n			NULL = dom.contentWindow.Object.prototype;\n			parent.removeChild(dom);\n		}\n		var dom = null;\n		delete NULL.constructor;\n		delete NULL.hasOwnProperty;\n		delete NULL.isPrototypeOf;\n		delete NULL.propertyIsEnumerable;\n		delete NULL.toLocaleString;\n		delete NULL.toString;\n		delete NULL.valueOf;\n		var Null = function () {};\n		Null.prototype = NULL;\n		var constructor = function () {};\n		function __PURE__ (o, properties) {\n			if ( properties!==undefined ) { throw TypeError(\'CAN NOT defineProperties in ES 3 Object.create polyfill\'); }\n			if ( o===null ) { return new Null; }\n			if ( typeof o!==\'object\' && typeof o!==\'function\' ) { throw TypeError(\'Object prototype may only be an Object or null: \'+o); }\n			constructor.prototype = o;\n			var created = new constructor;\n			constructor.prototype = NULL;\n			return created;\n		}\n		return function create (o, properties) {\n			return /*#__PURE__*/ __PURE__(o, properties);\n		};\n	}()\n	/*¡ j-globals: Object.create (polyfill) */\n);';

const _Object_keys = 'import Array_prototype from \'.Array.prototype\';\nimport Boolean_prototype from \'.Boolean.prototype\';\nimport Date_prototype from \'.Date.prototype\';\nimport Error_prototype from \'.Error.prototype\';\nimport EvalError_prototype from \'.EvalError.prototype\';\nimport Function_prototype from \'.Function.prototype\';\nimport Number_prototype from \'.Number.prototype\';\nimport Object_prototype from \'.Object.prototype\';\nimport hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport propertyIsEnumerable from \'.Object.prototype.propertyIsEnumerable\';\nimport toString from \'.Object.prototype.toString\';\nimport RangeError_prototype from \'.RangeError.prototype\';\nimport ReferenceError_prototype from \'.ReferenceError.prototype\';\nimport RegExp_prototype from \'.RegExp.prototype\';\nimport String_prototype from \'.String.prototype\';\nimport SyntaxError_prototype from \'.SyntaxError.prototype\';\nimport TypeError_prototype from \'.TypeError.prototype\';\nimport URIError_prototype from \'.URIError.prototype\';\nimport { isIndex } from \'.native\';\nexport default (\n	/*! j-globals: Object.keys (polyfill) */\n	/*#__PURE__*/ function () {\n		\n		var Object_keys = Object.keys;\n		if ( Object_keys ) {\n			try {\n				Object_keys(0);\n				return Object_keys;\n			}\n			catch (error) { }\n			return function keys (object) {\n				return Object_keys(object==null ? object : Object(object));\n			};\n		}\n		\n		var function_prototypeIsEnumerable = function () {}.propertyIsEnumerable(\'prototype\');\n		if ( !{ \'toString\': null }.propertyIsEnumerable(\'toString\') ) {\n			var hasNotEnumOwnButNotNativePrototypeBug = function hasNotEnumOwnButNotNativePrototypeBug (object, key, keys) {\n				if ( hasOwnProperty.call(object, key) ) {\n					switch ( key ) {\n						case \'toString\':\n						case \'constructor\':\n							switch ( object ) {\n								case Object_prototype:\n								case Number_prototype:\n								case Date_prototype:\n								case String_prototype:\n								case Boolean_prototype:\n								case Array_prototype:\n								case Function_prototype:\n								case RegExp_prototype:\n								case Error_prototype:\n								case SyntaxError_prototype:\n								case RangeError_prototype:\n								case EvalError_prototype:\n								case ReferenceError_prototype:\n								case TypeError_prototype:\n								case URIError_prototype:\n									return;\n							}\n							break;\n						case \'toLocaleString\':\n							switch ( object ) {\n								case Object_prototype:\n								case Number_prototype:\n								case Date_prototype:\n								case Array_prototype:\n									return;\n							}\n							break;\n						case \'valueOf\':\n							switch ( object ) {\n								case Object_prototype:\n								case Number_prototype:\n								case Date_prototype:\n								case String_prototype:\n								case Boolean_prototype:\n									return;\n							}\n							break;\n						case \'hasOwnProperty\':\n						case \'isPrototypeOf\':\n						case \'propertyIsEnumerable\':\n							if ( object===Object_prototype ) { return; }\n							break;\n					}\n					for ( var index = keys.length; index--; ) {\n						if ( keys[index]===key ) { return; }\n					}\n					return true;\n				}\n			};\n		}\n		\n		function __PURE__ (object) {\n			\n			if ( object==null ) { throw TypeError(\'Cannot convert undefined or null to object\'); }\n			\n			var length,\n				index = 0,\n				key,\n				keys = [];\n			\n			switch ( typeof object ) {\n				\n				case \'object\':\n					if ( toString.call(object)===\'[object String]\' ) {\n						throw TypeError(\'stringObject\\\'s index keys have bug in ES3\');\n						//for ( length = object.length; index<length; ++index ) { keys[index] = \'\'+index; }\n						//for ( key in object ) { if ( hasOwnProperty.call(object, key) && ( !isIndex(key) || key>=length ) ) { keys[index++] = key; } }\n					}\n					else if ( hasOwnProperty.call(object, \'length\') && !propertyIsEnumerable.call(object, \'length\') || hasOwnProperty.call(object, \'callee\') && !propertyIsEnumerable.call(object, \'callee\') ) {\n						for ( length = object.length; index<length; ++index ) { if ( hasOwnProperty.call(object, index) ) { keys[index] = \'\'+index; } }\n						for ( key in object ) { if ( hasOwnProperty.call(object, key) && ( !isIndex(key) || key>=length ) ) { keys[index++] = key; } }\n					}\n					else {\n						for ( key in object ) { if ( hasOwnProperty.call(object, key) ) { keys[index++] = key; } }\n					}\n					break;\n					\n				case \'function\':\n					if ( function_prototypeIsEnumerable ) {\n						throw TypeError(\'function\\\'s prototype key has enum bug\');\n						//for ( key in object ) { if ( hasOwnProperty.call(object, key) && key!==\'prototype\' ) { keys[index++] = key; } }\n					}\n					else {\n						for ( key in object ) { if ( hasOwnProperty.call(object, key) ) { keys[index++] = key; } }\n					}\n					break;\n					\n				case \'string\':\n					throw TypeError(\'string[index] keys have bug in ES3\');\n				//	for ( length = object.length; index<length; ++index ) { keys[index] = \'\'+index; }\n				//	return keys;\n					\n				default:\n					for ( key in object = Object(object) ) {\n						if ( hasOwnProperty.call(object, key) ) {\n							keys[index++] = key;\n						}\n					}\n					return keys;\n					\n			}\n			\n			if ( hasNotEnumOwnButNotNativePrototypeBug ) {\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'toString\', keys) ) { keys[index++] = \'toString\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'toLocaleString\', keys) ) { keys[index++] = \'toLocaleString\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'valueOf\', keys) ) { keys[index++] = \'valueOf\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'hasOwnProperty\', keys) ) { keys[index++] = \'hasOwnProperty\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'isPrototypeOf\', keys) ) { keys[index++] = \'isPrototypeOf\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'propertyIsEnumerable\', keys) ) { keys[index++] = \'propertyIsEnumerable\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'constructor\', keys) ) { keys[index] = \'constructor\'; }\n			}\n			\n			return keys;\n			\n		}\n		\n		return function keys (object) {\n			return /*#__PURE__*/ __PURE__(object);\n		};\n		\n	}()\n	/*¡ j-globals: Object.keys (polyfill) */\n);';

const _Object_values = 'import toString from \'.Object.prototype.toString\';\n//import hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport Object_keys from \'.Object.keys?=\';\nimport { defineIndexValue } from \'.native\';\nexport default Object.values || (\n	/*! j-globals: Object.values (polyfill) */\n	/*#__PURE__*/ function () {\n		\n		var string_noIndex = !\'_\'.hasOwnProperty(0);\n		\n		function __PURE__ (object) {\n			var values, keys, length, index;\n			switch ( typeof object ) {\n				case \'object\':\n					if ( string_noIndex && toString.call(object)===\'[object String]\' ) {\n						throw TypeError(\'stringObject\\\'s index keys have bug in ES3\');/*\n						values = split.call(object, \'\');\n						length = index = values.length;\n						for ( var key in object ) {\n							if ( hasOwnProperty.call(object, key) ) {\n								if ( isIndex(key) && key<length ) {\n									if ( object[key]!==values[key] ) { throw TypeError(\'stringObject[index] is not writable in ES3+ spec\'); }\n								}\n								else { values[index++] = object[key]; }\n							}\n						}\n						return values;*/\n					}\n					break;\n				case \'function\':\n					break;\n				case \'string\':\n					if ( string_noIndex ) { throw TypeError(\'string[index] keys have bug in ES3\'); }\n					return object.split(\'\');\n				default:\n					object = Object(object);\n					break;\n			}\n			values = [];\n			for ( keys = Object_keys(object), length = keys.length, index = 0; index<length; ++index ) {\n				defineIndexValue(values, index, object[keys[index]]);\n			}\n			return values;\n		}\n		\n		return function values (object) {\n			return /*#__PURE__*/ __PURE__(object);\n		};\n		\n	}()\n	/*¡ j-globals: Object.values (polyfill) */\n);';

const _Object_entries = 'import toString from \'.Object.prototype.toString\';\n//import hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\n//import charAt from \'.String.prototype.charAt\';\nimport Object_keys from \'.Object.keys?=\';\nimport { defineIndexValue } from \'.native\';\nexport default (\n	/*! j-globals: Object.entries (polyfill) */\n	Object.entries || /*#__PURE__*/ function () {\n		\n		var string_noIndex = !\'_\'.hasOwnProperty(0);\n		\n		function __PURE__ (object) {\n			var entries = [], keys, length, index = 0, key;\n			switch ( typeof object ) {\n				case \'object\':\n					if ( string_noIndex && toString.call(object)===\'[object String]\' ) {\n						throw TypeError(\'stringObject\\\'s index keys have bug in ES3\');/*\n						for ( length = object.length; index<length; ++index ) {\n							defineIndexValue(entries, index, [ \'\'+index, charAt.call(object, index) ]);\n						}\n						for ( key in object ) {\n							if ( hasOwnProperty.call(object, key) ) {\n								if ( isIndex(key) && key<length ) {\n									if ( object[key]!==charAt.call(object, key) ) { throw TypeError(\'stringObject[index] is not writable in ES3+ spec\'); }\n								}\n								else { defineIndexValue(entries, index++, [ key, object[key] ]); }\n							}\n						}\n						return entries*/\n					}\n					break;\n				case \'function\':\n					break;\n				case \'string\':\n					if ( string_noIndex ) { throw TypeError(\'string[index] keys have bug in ES3\'); }\n					for ( length = object.length; index<length; ++index ) {\n						defineIndexValue(entries, index, [ \'\'+index, object.charAt(index) ]);\n					}\n					return entries;\n				default:\n					object = Object(object);\n					break;\n			}\n			for ( keys = Object_keys(object), length = keys.length; index<length; ++index ) {\n				defineIndexValue(entries, index, [ key = keys[index], object[key] ]);\n			}\n			return entries;\n		}\n		\n		return function entries (object) {\n			return /*#__PURE__*/ __PURE__(object);\n		};\n		\n	}()\n	/*¡ j-globals: Object.entries (polyfill) */\n);';

const _Object_assign = 'import toString from \'.Object.prototype.toString\';\nimport hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\n//import charAt from \'.String.prototype.charAt\';\nimport Object_keys from \'.Object.keys?=\';\nexport default (\n	/*! j-globals: Object.assign (polyfill) */\n	Object.assign || /*#__PURE__*/ function () {\n		\n		var string_noIndex = !\'_\'.hasOwnProperty(0);\n		\n		return function assign (target, firstSource) {\n			if ( target==null ) { throw TypeError(\'Cannot convert undefined or null to object\'); }\n			target = Object(target);\n			var lastIndex = arguments.length-1;\n			if ( lastIndex ) {\n				for ( var currentIndex = 1, source = firstSource; ; ) {\n					if ( source!=null ) {\n						var keys, length, index, key;\n						switch ( typeof source ) {\n							case \'object\':\n								if ( string_noIndex && toString.call(source)===\'[object String]\' ) {\n									throw TypeError(\'stringObject\\\'s index keys have bug in ES3\');/*\n									for ( length = source.length, index = 0; index<length; ++index ) {\n										target[index] = charAt.call(source, index);\n									}\n									for ( key in source ) {\n										if ( hasOwnProperty.call(source, key) ) {\n											if ( isIndex(key) && key<length ) {\n												if ( source[key]!==charAt.call(source, key) ) { throw TypeError(\'source stringObject[index] is not writable in ES3+ spec\'); }\n											}\n											else { target[key] = source[key]; }\n										}\n									}\n									break;*/\n								}\n							case \'function\':\n								for ( keys = Object_keys(source), length = keys.length, index = 0; index<length; ++index ) {\n									key = keys[index];\n									target[key] = source[key];\n								}\n								break;\n							case \'string\':\n								if ( string_noIndex ) { throw TypeError(\'string[index] keys have bug in ES3\'); }\n								for ( length = source.length, index = 0; index<length; ++index ) {\n									target[index] = source.charAt(index);\n								}\n								break;\n							default:\n								for ( key in source = Object(source) ) {\n									if ( hasOwnProperty.call(source, key) ) {\n										target[key] = source[key];\n									}\n								}\n								break;\n						}\n					}\n					if ( currentIndex===lastIndex ) { break; }\n					source = arguments[++currentIndex];\n				}\n			}\n			return target;\n		};\n		\n	}()\n	/*¡ j-globals: Object.assign (polyfill) */\n);';

const _Object_is = 'export default (\n	/*! j-globals: Object.is (polyfill) */\n	Object.is || function is (x, y) {\n		return x===y ? x!==0 || 1/x===1/y : x!==x && y!==y;\n	}\n	/*¡ j-globals: Object.is (polyfill) */\n);';

const _Object_fromEntries = 'import TypeError from \'.TypeError\';\nimport of from \'.for.of\';\nimport { defineKeyValue } from \'.native\';\nexport default (\n	/*! j-globals: Object.fromEntries (polyfill) */\n	Object.fromEntries || /*#__PURE__*/ function () {\n		\n		function __PURE__ (entries) {\n			if ( entries==null ) { throw TypeError(\'undefined is not iterable\'); }\n			var object = {};\n			of(entries, function (entry) {\n				if ( typeof entry!==\'object\' && typeof entry!==\'function\' || entry===null ) { throw TypeError(\'Iterator value \'+( entry && entry.toString() )+\' is not an entry object\'); }\n				defineKeyValue(object, entry[0], entry[1]);\n			});\n			return object;\n		}\n		\n		return function fromEntries (entries) {\n			return /*#__PURE__*/ __PURE__(entries);\n		};\n		\n	}()\n	/*¡ j-globals: Object.fromEntries (polyfill) */\n);';

const _Object_getOwnPropertyNames = 'import hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport propertyIsEnumerable from \'.Object.prototype.propertyIsEnumerable\';\nimport toString from \'.Object.prototype.toString\';\nimport { isIndex } from \'.native\';\nexport default (\n	/*! j-globals: Object.getOwnPropertyNames (polyfill) */\n	/*#__PURE__*/ function () {\n		\n		var Object_getOwnPropertyNames = Object.getOwnPropertyNames;\n		if ( Object_getOwnPropertyNames ) {\n			try {\n				Object_getOwnPropertyNames(0);\n				return Object_getOwnPropertyNames;\n			}\n			catch (error) { }\n			return function getOwnPropertyNames (object) {\n				return Object_getOwnPropertyNames(object==null ? object : Object(object));\n			};\n		}\n		\n		var string_noIndex = !\'_\'.hasOwnProperty(0);\n		\n		if ( !{ \'toString\': null }.propertyIsEnumerable(\'toString\') ) {\n			var hasNotEnumOwnButNotNativePrototypeBug = function hasNotEnumOwnButNotNativePrototypeBug (object, name, names) {\n				for ( var index = names.length; index--; ) {\n					if ( names[index]===\'name\' ) { return false; }\n				}\n				return true;\n			};\n		}\n		\n		function __PURE__ (object) {\n			\n			if ( object==null ) { throw TypeError(\'Cannot convert undefined or null to object\'); }\n			\n			var length,\n				index = 0,\n				name,\n				names = [];\n			\n			switch ( typeof object ) {\n				\n				case \'object\':\n					if ( hasOwnProperty.call(object, \'length\') && !propertyIsEnumerable.call(object, \'length\') ) {\n						if ( toString.call(object)===\'[object Array]\' ) {\n							for ( name in object ) { if ( hasOwnProperty.call(object, name) && isIndex(name) ) { names[index++] = name; } }\n						}\n						else {\n							if ( string_noIndex && toString.call(object)===\'[object String]\' ) { throw TypeError(\'stringObject\\\'s index keys have bug in ES3\'); }\n							for ( length = object.length; index<length; ++index ) { if ( hasOwnProperty.call(object, index) ) { names[index] = \'\'+index; } }\n							for ( name in object ) { if ( hasOwnProperty.call(object, name) && isIndex(name) && name>=length ) { names[index++] = name; } }\n							if ( hasOwnProperty.call(object, \'callee\') && !propertyIsEnumerable.call(object, \'callee\') ) { names[index++] = \'callee\'; }\n						}\n						names[index++] = \'length\';\n						for ( name in object ) { if ( hasOwnProperty.call(object, name) && !isIndex(name) ) { names[index++] = name; } }\n					}\n					else {\n						for ( name in object ) { if ( hasOwnProperty.call(object, name) ) { names[index++] = name; } }\n					}\n					break;\n				\n				case \'function\':\n					for ( name in object ) { if ( hasOwnProperty.call(object, name) && isIndex(name) ) { names[index++] = name; } }\n					if ( hasOwnProperty.call(object, \'prototype\') && !propertyIsEnumerable.call(object, \'prototype\') ) { names[index++] = \'prototype\'; }\n					if ( hasOwnProperty.call(object, \'caller\') && !propertyIsEnumerable.call(object, \'caller\') ) { names[index++] = \'caller\'; }\n					if ( hasOwnProperty.call(object, \'arguments\') && !propertyIsEnumerable.call(object, \'arguments\') ) { names[index++] = \'arguments\'; }\n					if ( hasOwnProperty.call(object, \'length\') && !propertyIsEnumerable.call(object, \'length\') ) { names[index++] = \'length\'; }\n					for ( name in object ) { if ( hasOwnProperty.call(object, name) && !isIndex(name) ) { names[index++] = name; } }\n					break;\n				\n				case \'string\':\n					throw TypeError(\'string[index] keys have bug in ES3\');\n				//	for ( length = object.length; index<length; ++index ) { names[index] = \'\'+index; }\n				//	return names;\n				default:\n					for ( name in object = Object(object) ) { if ( hasOwnProperty.call(object, name) ) { names[index++] = name; } }\n					break;\n			}\n			\n			if ( hasNotEnumOwnButNotNativePrototypeBug ) {\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'toString\', names) ) { names[index++] = \'toString\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'toLocaleString\', names) ) { names[index++] = \'toLocaleString\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'valueOf\', names) ) { names[index++] = \'valueOf\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'hasOwnProperty\', names) ) { names[index++] = \'hasOwnProperty\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'isPrototypeOf\', names) ) { names[index++] = \'isPrototypeOf\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'propertyIsEnumerable\', names) ) { names[index++] = \'propertyIsEnumerable\'; }\n				if ( hasNotEnumOwnButNotNativePrototypeBug(object, \'constructor\', names) ) { names[index] = \'constructor\'; }\n			}\n			\n			return names;\n			\n		}\n		\n		return function getOwnPropertyNames (object) {\n			return /*#__PURE__*/ __PURE__(object);\n		};\n		\n	}()\n	/*¡ j-globals: Object.getOwnPropertyNames (polyfill) */\n);';

const _Object_getOwnPropertySymbols = 'export default (\n	/*! j-globals: Object.getOwnPropertySymbols (polyfill) */\n	Object.getOwnPropertySymbols || function getOwnPropertySymbols () {\n		return [];\n	}\n	/*¡ j-globals: Object.getOwnPropertySymbols (polyfill) */\n);';

const _Array_of = 'import slice from \'.Array.prototype.slice\';////?=\nexport default (\n	/*! j-globals: Array.of (polyfill) */\n	Array.of || function of () {\n		return /*#__PURE__*/ slice.call(arguments);\n	}\n	/*¡ j-globals: Array.of (polyfill) */\n);';

const _Array_from = 'import undefined from \'.undefined\';\nimport Symbol_iterator from \'.Symbol.iterator?\';\nimport toString from \'.Object.prototype.toString\';\nimport of from \'.for.of\';\nimport return_false from \'.return.false\';\nimport String_prototype from \'.String.prototype\';\nimport { defineIndexValue, assertArrayFn, createBound } from \'.native\';\nexport default (\n	/*! j-globals: Array.from (polyfill) */\n	Array.from || /*#__PURE__*/ function () {\n		\'use strict\';\n		\n		var ES3 = this!==undefined;\n		\n		var isIterable = Symbol_iterator===undefined\n			? return_false\n			: function isIterable (value) { return Symbol_iterator in ( typeof value===\'string\' ? String_prototype : Object(value) ); };\n		\n		function __PURE__ (arrayLike_iterable, mapfn, thisArg) {\n			var array, length, index;\n			if ( arguments.length>1 && mapfn!==undefined ) {\n				assertArrayFn(mapfn);\n				if ( arguments.length>2 ) { mapfn = createBound(mapfn, thisArg); }\n			}\n			if ( arrayLike_iterable==null ) { throw TypeError(\'Cannot convert undefined or null to object\'); }\n			if ( isIterable(arrayLike_iterable) ) {\n				array = [];\n				of(arrayLike_iterable, mapfn\n					? function callbackfn (value, index) { defineIndexValue(array, index, mapfn(value, index)); }\n					: function callbackfn (value, index) { defineIndexValue(array, index, value); }\n				);\n				return array;\n			}\n			if ( ES3 ) {\n				if ( typeof arrayLike_iterable===\'string\' ) {\n					array = arrayLike_iterable.split(\'\');\n					if ( fn ) { for ( length = array.length, index = 0; index<length; ++index ) { array[index] = fn(array[index]); } }\n					return array;\n				}\n				if ( toString.call(arrayLike_iterable)===\'[object String]\' ) {\n					array = split.call(arrayLike_iterable);\n					if ( fn ) {\n						for ( length = array.length, index = 0; index<length; ++index ) {\n							var char = array[index];\n							if ( index in arrayLike_iterable && arrayLike_iterable[index]!==char ) { throw TypeError(\'stringObject[index] is not writable in ES3+ spec\'); }\n							array[index] = fn(char);\n						}\n					}\n					return array;\n				}\n			}\n			length = parseInt(arrayLike_iterable.length);\n			if ( !( length>=0 ) ) { length = 0; }\n			array = Array(length);\n			index = 0;\n			if ( fn ) { for ( ; index<length; ++index ) { defineIndexValue(array, index, fn(arrayLike_iterable[index], index)); } }\n			else { for ( ; index<length; ++index ) { defineIndexValue(array, index, arrayLike_iterable[index]); } }\n			return array;\n		}\n		\n		return function from (arrayLike_iterable) {\n			return /*#__PURE__*/ __PURE__.apply(this, arguments);\n		};\n		\n	}()\n	/*¡ j-globals: Array.from (polyfill) */\n);';

const _Array_isArray = 'import toString from \'.Object.prototype.toString\';\nexport default (\n	/*! j-globals: Array.isArray (polyfill) */\n	Array.isArray || function isArray (value) {\n		return /*#__PURE__*/ toString.call(value)===\'[object Array]\';\n	}\n	/*¡ j-globals: Array.isArray (polyfill) */\n);';

const _Array_prototype_map = '//import split from \'.String.prototype.split\';\nimport Symbol_species from \'.Symbol.species?\';\nimport undefined from \'.undefined\';\nimport { ToObject, ToString, ToLength, ArraySpeciesCreate, defineIndexValue, createBound, assertArrayFn } from \'.native\';\nexport default (\n	/*! j-globals: Array.prototype.map (polyfill) */\n	( Symbol_species===undefined || typeof Symbol_species===\'symbol\' ) && Array.prototype.map || /*#__PURE__*/ function () { \'use strict\';\n		\n		var string_noIndex = !\'_\'.hasOwnProperty(0);\n		\n		return function map (callbackfn/*, thisArg*/) {\n			var O = ToObject(this, \'Array.prototype.map called on null or undefined\');\n			if ( string_noIndex && O instanceof String ) {\n				throw TypeError(\'stringObject\\\'s index keys have bug in ES3\');\n				//if ( toString.call(O)===\'[object String]\' ) { O = split.call(O); }\n				//else { throw TypeError(\'There is no way in ES 3 to read the index of an object, which is instanceof String, but not [object String]\'); }\n			}\n			var len = ToLength(O.length);\n			assertArrayFn(callbackfn);\n			if ( arguments.length>1 ) { callbackfn = createBound(callbackfn, arguments[1]); }\n			var A = ArraySpeciesCreate(this, len);\n			for ( var k = 0; k<len; ++k ) {\n				var Pk = ToString(k);\n				if ( Pk in O ) {\n					var kValue = O[Pk];\n					var mappedValue = callbackfn(kValue, k, O);\n					defineIndexValue(A, Pk, mappedValue);\n				}\n			}\n			return A;\n		};\n		\n	}()\n	/*¡ j-globals: Array.prototype.map (polyfill) */\n);';

const _Array_prototype_flat = '//import split from \'.String.prototype.split\';\nimport { ToObject, ToInteger, ToLength, ArraySpeciesCreate, FlattenIntoArray } from \'.native\';\nexport default (\n	/*! j-globals: Array.prototype.flat (polyfill) */\n	Array.prototype.flat || /*#__PURE__*/ function () { \'use strict\';\n		\n		var string_noIndex = !\'_\'.hasOwnProperty(0);\n		var undefined;\n		\n		return function flat (/*depth*/) {\n			var O = ToObject(this, \'Array.prototype.flat called on null or undefined\');\n			if ( string_noIndex && O instanceof String ) {\n				throw TypeError(\'stringObject\\\'s index keys have bug in ES3\');\n				//if ( toString.call(O)===\'[object String]\' ) { O = split.call(O); }\n				//else { throw TypeError(\'There is no way in ES 3 to read the index of an object, which is instanceof String, but not [object String]\'); }\n			}\n			var sourceLen = ToLength(O.length);\n			var depthNum = arguments.length && arguments[0]!==undefined ? ToInteger(arguments[0]) : 1;\n			var A = ArraySpeciesCreate(O, 0);\n			FlattenIntoArray(A, O, sourceLen, 0, depthNum);\n			return A;\n		};\n		\n	}()\n	/*¡ j-globals: Array.prototype.flat (polyfill) */\n);';

const _Array_prototype_flatMap = '//import split from \'.String.prototype.split\';\nimport { ToObject, ToLength, assertArrayFn, createBound, ArraySpeciesCreate, FlattenIntoArray } from \'.native\';\nexport default (\n	/*! j-globals: Array.prototype.flatMap (polyfill) */\n	Array.prototype.flatMap || /*#__PURE__*/ function () { \'use strict\';\n		\n		var string_noIndex = !\'_\'.hasOwnProperty(0);\n		\n		return function flatMap (mapperFunction, /*thisArg*/) {\n			var O = ToObject(this, \'Array.prototype.flatMap called on null or undefined\');\n			if ( string_noIndex && O instanceof String ) {\n				throw TypeError(\'stringObject\\\'s index keys have bug in ES3\');\n				//if ( toString.call(O)===\'[object String]\' ) { O = split.call(O); }\n				//else { throw TypeError(\'There is no way in ES 3 to read the index of an object, which is instanceof String, but not [object String]\'); }\n			}\n			var sourceLen = ToLength(O.length);\n			assertArrayFn(mapperFunction);\n			if ( arguments.length>1 ) { mapperFunction = createBound(mapperFunction, arguments[1]); }\n			var A = ArraySpeciesCreate(O, 0);\n			FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction);\n			return A;\n		};\n		\n	}()\n	/*¡ j-globals: Array.prototype.flatMap (polyfill) */\n);';

const _globalThis = 'export default (\n	/*! j-globals: globalThis (polyfill) */\n	/*#__PURE__*/ function GlobalThis () {\n		\n		try {\n			return this// IE9- (IE8-: self!==window)\n				||\n				Function(\'return this\')();// (0, eval) (IE8- not global) (also writable) // function(){}.constructor\n		}\n		\n		catch (error) {// !CSP (e.g. Google Chrome Apps)\n			\n			if ( typeof window===\'object\' && typeof document===\'object\' ) { return window; }// Browser (window document IE9+ readonly) // frames !Worker & !readonly too\n			\n			if ( typeof self===\'object\' ) { return self; }// Worker !readonly\n			\n			//if ( typeof global===\'object\' && typeof process===\'object\' && typeof require===\'function\' ) { return global; }// Node.js\n			\n			//if ( typeof globalThis===\'object\' ) { return globalThis; }\n			\n			/*\n			var __global_this_access_key__ = \'__\\u5168\\u5C40_\\u5BF9\\u8C61_\\u8BBF\\u95EE_\\u952E\\u540D__\';\n			if ( !( __global_this_access_key__ in {} ) ) {\n				try { __\\u5168\\u5C40_\\u5BF9\\u8C61_\\u8BBF\\u95EE_\\u952E\\u540D__; }\n				catch (error) {\n					var d = Object.create(import NULL from \'.null.prototype\');\n					d.get = function () { return this; };\n					d.configurable = true;\n					try {\n						Object.defineProperty(Object.prototype, __global_this_access_key__, d);// catch !extensible Object.prototype || !configurable globalObject get throw\n						try { return __\\u5168\\u5C40_\\u5BF9\\u8C61_\\u8BBF\\u95EE_\\u952E\\u540D__; }// IE11+ (IE10-: window !instanceof Object)\n						finally { delete Object.prototype[__global_this_access_key__]; }\n					}\n					catch (error) { }\n				}\n			}\n			*/\n			\n			//throw error;\n			\n		}\n		\n	}()\n	/*¡ j-globals: globalThis (polyfill) */\n);';

const _Error = 'export default (\n	/*! j-globals: Error (polyfill) */\n	/*# __PURE__*/ Error(\'0\').message ? Error : /*#__PURE__*/ function () {\n		function Error0 (message) {\n			return Error(0, message);\n		}\n		Error0.prototype = Error.prototype;\n		return Error0;\n	}()\n	/*¡ j-globals: Error (polyfill) */\n);';

const _undefined = 'export default (\n	/*! j-globals: undefined (polyfill) */\n	void 0\n	/*¡ j-globals: undefined (polyfill) */\n);';

const _Infinity = 'export default (\n	/*! j-globals: Infinity (polyfill) */\n	1/0\n	/*¡ j-globals: Infinity (polyfill) */\n);';

const _NaN = 'export default (\n	/*! j-globals: NaN (polyfill) */\n	0/0\n	/*¡ j-globals: NaN (polyfill) */\n);';

const _Number_MAX_SAFE_INTEGER = 'export default (\n	/*! j-globals: Number.MAX_SAFE_INTEGER (polyfill) */\n	Number.MAX_SAFE_INTEGER || 9007199254740991\n	/*¡ j-globals: Number.MAX_SAFE_INTEGER (polyfill) */\n);';

const _Number_MIN_SAFE_INTEGER = 'export default (\n	/*! j-globals: Number.MIN_SAFE_INTEGER (polyfill) */\n	Number.MIN_SAFE_INTEGER || -9007199254740991\n	/*¡ j-globals: Number.MIN_SAFE_INTEGER (polyfill) */\n);';

const _Number_isSafeInteger = 'import isInteger from \'.Number.isInteger?=\';\nexport default (\n	/*! j-globals: Number.isSafeInteger (polyfill) */\n	Number.isSafeInteger || function isSafeInteger (number) {\n		return /*#__PURE__*/isInteger(number) && -9007199254740991<=number && number<=9007199254740991;\n	}\n	/*¡ j-globals: Number.isSafeInteger (polyfill) */\n);';

const _Number_isInteger = 'import ceil from \'.Math.ceil\';\nexport default (\n	/*! j-globals: Number.isInteger (polyfill) */\n	Number.isInteger || function isInteger (number) {\n		return typeof number===\'number\' && /*#__PURE__*/ceil(number)===number;\n	}\n	/*¡ j-globals: Number.isInteger (polyfill) */\n);';

const _Number_isFinite = 'import Infinity from \'.Infinity\';\nexport default (\n	/*! j-globals: Number.isFinite (polyfill) */\n	Number.isFinite || function isFinite (number) {\n		return typeof number===\'number\' && number===number && number!==Infinity && number!==-Infinity;\n	}\n	/*¡ j-globals: Number.isFinite (polyfill) */\n);';

const _Number_isNaN = 'export default (\n	/*! j-globals: Number.isNaN (polyfill) */\n	Number.isNaN || function isNaN (number) {\n		return number!==number;\n	}\n	/*¡ j-globals: Number.isNaN (polyfill) */\n);';

const _Number_EPSILON = 'export default (\n	/*! j-globals: Number.EPSILON (polyfill) */\n	Number.EPSILON || 2.220446049250313e-16\n	/*¡ j-globals: Number.EPSILON (polyfill) */\n);';

const _Buffer_isBuffer = 'export default (\n	/*! j-globals: Buffer.isBuffer (polyfill) */\n	typeof Buffer===\'function\' ? Buffer.isBuffer : function isBuffer (b) {\n		return b instanceof Buffer;\n	}\n	/*¡ j-globals: Buffer.isBuffer (polyfill) */\n);';

const _Buffer_from = 'import hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport Uint8Array from \'.Uint8Array?\';\nimport toPrimitive from \'.Symbol.toPrimitive?\';\nimport undefined from \'.undefined\';\nexport default (\n	/*! j-globals: Buffer.from (polyfill) */\n	typeof Buffer===\'function\' && /*#__PURE__*/ hasOwnProperty.call(Buffer, \'from\') ? Buffer.from : function from (value, encodingOrOffset, length) {\n		if ( typeof value===\'string\' ) { return /*#__PURE__*/ new Buffer(value, encodingOrOffset); }\n		if ( Uint8Array ? value instanceof Uint8Array : value instanceof Buffer ) { return /*#__PURE__*/ new Buffer(value); }\n		if ( /*#__PURE__*/ toString.call(value)===\'[object Array]\' || value instanceof Array ) { return /*#__PURE__*/ new Buffer(value); }\n		if ( typeof value.valueOf===\'function\' ) {\n			var valued = /*#__PURE__*/ value.valueOf();\n			if ( valued!=null && valued!==value ) { return /*#__PURE__*/ from(valued, encodingOrOffset, length); }\n		}\n		if ( typeof toPrimitive!==undefined && typeof value[toPrimitive]===\'function\' ) { return /*#__PURE__*/ from(/*#__PURE__*/ value[toPrimitive](\'string\'), encodingOrOffset, length); }\n		return /*#__PURE__*/ new Buffer(value, encodingOrOffset, length);\n	}\n	/*¡ j-globals: Buffer.from (polyfill) */\n);';

const _Buffer_alloc = 'import undefined from \'.undefined\';\nexport default (\n	/*! j-globals: Buffer.alloc (polyfill) */\n	typeof Buffer===\'function\' && Buffer.alloc || function alloc (size, fill, encoding) {\n		return fill===undefined\n			? /*#__PURE__*/ new Buffer(size).fill(0)\n			: /*#__PURE__*/ new Buffer(size).fill(fill, encoding);\n	}\n	/*¡ j-globals: Buffer.alloc (polyfill) */\n);';

const _Buffer_allocUnsafe = 'export default (\n	/*! j-globals: Buffer.allocUnsafe (polyfill) */\n	typeof Buffer===\'function\' && Buffer.allocUnsafe || function allocUnsafe (size) {\n		return /*#__PURE__*/ new Buffer(size);\n	}\n	/*¡ j-globals: Buffer.allocUnsafe (polyfill) */\n);';

const _Buffer_allocUnsafeSlow = 'export default (\n	/*! j-globals: Buffer.allocUnsafeSlow (polyfill) */\n	typeof Buffer===\'function\' && Buffer.allocUnsafeSlow || function allocUnsafeSlow (size) {\n		return /*#__PURE__*/ new Buffer(size);\n	}\n	/*¡ j-globals: Buffer.allocUnsafeSlow (polyfill) */\n);';

const _NULL_assign = 'import Object_assign from \'.Object.assign?=\';\nimport create from \'.Object.create?=\';\nimport NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: null.assign (polyfill) */\n	function assign (target, firstSource) {\n		if ( arguments.length>2 ) {\n			if ( target===null ) { arguments[0] = create(NULL); }\n			return Object_assign.apply(null, arguments);\n		}\n		else {\n			return Object_assign(target===null ? create(NULL) : target, firstSource);\n		}\n	}\n	/*¡ j-globals: null.assign (polyfill) */\n);';

const _NULL_fromEntries = 'import TypeError from \'.TypeError\';\nimport create from \'.Object.create?=\';\nimport of from \'.for.of\';\nimport NULL from \'.null.prototype\';\nvar Object_fromEntries = Object.fromEntries;\nvar assign = Object.assign;\nexport default (\n	/*! j-globals: null.fromEntries (polyfill) */\n	Object_fromEntries\n		\n		? function fromEntries (entries) {\n			return /*#__PURE__*/ assign(/*#__PURE__*/ create(NULL), /*#__PURE__*/ Object_fromEntries(entries));\n		}\n		\n		: /*#__PURE__*/ function () {\n			\n			function __PURE__ (entries) {\n				if ( entries==null ) { throw TypeError(\'undefined is not iterable\'); }\n				var object = create(NULL);\n				of(entries, function (entry) {\n					if ( typeof entry!==\'object\' && typeof entry!==\'function\' || entry===null ) { throw TypeError(\'Iterator value \'+( entry && entry.toString() )+\' is not an entry object\'); }\n					object[entry[0]] = entry[1];\n				});\n				return assign ? assign(create(NULL), object) : object;\n			}\n			\n			return function fromEntries (entries) {\n				return /*#__PURE__*/ __PURE__(entries);\n			};\n			\n		}()\n	\n	/*¡ j-globals: null.fromEntries (polyfill) */\n);';

const _NULL = 'import Object_create from \'.Object.create?=\';\nimport hasOwnProperty from \'.Object.prototype.hasOwnProperty\';\nimport _NULL from \'.null.prototype\';\nexport default (\n	/*! j-globals: null (polyfill) */\n	/*#__PURE__*/ function () {\n		\'use strict\';\n		var assign = Object.assign || function assign (target, source) {\n			for ( var key in source ) {\n				if ( hasOwnProperty.call(source, key) ) { target[key] = source[key]; }\n			}\n			if ( hasOwnProperty.call(source, \'toString\') ) { target.toString = source.toString; }\n			if ( hasOwnProperty.call(source, \'toLocaleString\') ) { target.toLocaleString = source.toLocaleString; }\n			if ( hasOwnProperty.call(source, \'valueOf\') ) { target.valueOf = source.valueOf; }\n			if ( hasOwnProperty.call(source, \'hasOwnProperty\') ) { target.hasOwnProperty = source.hasOwnProperty; }\n			if ( hasOwnProperty.call(source, \'isPrototypeOf\') ) { target.isPrototypeOf = source.isPrototypeOf; }\n			if ( hasOwnProperty.call(source, \'propertyIsEnumerable\') ) { target.propertyIsEnumerable = source.propertyIsEnumerable; }\n			if ( hasOwnProperty.call(source, \'constructor\') ) { target.constructor = source.constructor; }\n			return target;\n		}\n		var NULL = function (object) {\n			if ( object ) {\n				return /*#__PURE__*/ assign(/*#__PURE__*/ Object_create(_NULL), object);\n			}\n		};\n		delete NULL.name;\n		//try { delete NULL.length; } catch (error) {}\n		NULL.prototype = null;\n		return NULL;\n	}()\n	/*¡ j-globals: null (polyfill) */\n);';

const _Map = 'import Symbol_iterator from \'.Symbol.iterator?\';\nimport undefined from \'.undefined\';\nimport TypeError from \'.TypeError\';\nimport of from \'.for.of\';\nimport PropertyDescriptor from \'.null.PropertyDescriptor\';\nimport { defineIndexValue, createBound } from \'.native\';\nimport NaN from \'.NaN\';\nexport default (\n	/*! j-globals: Map (polyfill) */\n	typeof Map===\'function\' && Map.prototype && /*#__PURE__*/ function () {\n		var map = new Map;\n		return map.keys && map.set(-0, 0)===map && 1/map.keys().next().value>0;\n	}() ? Map : /*#__PURE__*/ function () { \'use strict\';\n		\n		var DELETED = {};\n		\n		function Map (entries) {\n			this.size = 0;\n			this._keys = [];\n			this._values = [];\n			if ( entries==null ) { return; }\n			var map = this;\n			return /*#__PURE__*/ of(entries, function (entry) {\n				if ( typeof entry!==\'object\' && typeof entry!==\'function\' || entry===null ) { throw TypeError(\'Iterator value \'+( entry && entry.toString() )+\' is not an entry object\'); }\n				map.set(entry[0], entry[1]);\n			});\n		}\n		\n		function get (key) {\n			var _keys = this._keys;\n			var index = _keys.length;\n			if ( key===key ) { while ( index-- ) { if ( key===_keys[index] ) { return this._values[index]; } } }\n			else { while ( index-- ) { if ( _keys[index]!==_keys[index] ) { return this._values[index]; } } }\n		}\n		\n		function set (key, value) {\n			var _keys = this._keys;\n			var length = _keys.length;\n			var index = length;\n			if ( key===key ) {\n				while ( index-- ) {\n					if ( key===_keys[index] ) {\n						this._values[index] = value;\n						return this;\n					}\n				}\n			}\n			else {\n				while ( index-- ) {\n					if ( _keys[index]!==_keys[index] ) {\n						this._values[index] = value;\n						return this;\n					}\n				}\n			}\n			defineIndexValue(_keys, length, key===0 ? 0 : key);\n			defineIndexValue(this._values, length, value);\n			++this.size;\n			return this;\n		}\n		\n		function has (key) {\n			var _keys = this._keys;\n			var index = _keys.length;\n			if ( key===key ) { while ( index-- ) { if ( key===_keys[index] ) { return true; } } }\n			else { while ( index-- ) { if ( _keys[index]!==_keys[index] ) { return true; } } }\n			return false;\n		}\n		\n		function delete$ (key) {\n			var _keys = this._keys;\n			var index = _keys.length;\n			if ( key===key ) {\n				while ( index-- ) {\n					if ( key===_keys[index] ) {\n						_keys[index] = DELETED;\n						this._values[index] = DELETED;\n						--this.size;\n						return true;\n					}\n				}\n			}\n			else {\n				while ( index-- ) {\n					if ( _keys[index]!==_keys[index] ) {\n						_keys[index] = DELETED;\n						this._values[index] = DELETED;\n						--this.size;\n						return true;\n					}\n				}\n			}\n			return false;\n		}\n		\n		function clear () {\n			this.size = 0;\n			var _keys = this._keys;\n			var _values = this._values;\n			var index = _keys.length;\n			while ( index-- ) {\n				_keys[index] = DELETED;\n				_values[index] = DELETED;\n			}\n		}\n		\n		function entries () { return new MapIterator(this, \'entries\'); }\n		\n		function forEach (callback/*, thisArg*/) {\n			switch ( typeof callback ) {\n				case \'function\':\n					break;\n				case \'undefined\':\n					throw TypeError(\'undefined is not a function\');\n				case \'string\':\n					throw TypeError(\'string "\'+callback+\'" is not a function\');\n				case \'number\':\n					throw TypeError(\'number \'+callback+\' is not a function\');\n				case \'boolean\':\n					throw TypeError(\'boolean \'+callback+\' is not a function\');\n				case \'object\':\n					throw TypeError(\'object \'+( callback ? \'\' : \'null \' )+\'is not a function\');\n				default:\n					throw TypeError(typeof callback+\' is not a function\');\n			}\n			if ( arguments.length>1 ) { callback = createBound(callback, arguments[1]); }\n			for ( var _keys = this._keys, _values = this._values, index = 0; index<_keys.length; ++index ) {\n				var key = _keys[index];\n				key===DELETED || callback(_values[index], key, this);\n			}\n		}\n		\n		function keys () { return new MapIterator(this, \'keys\'); }\n		\n		function size () { throw TypeError(\'Method get Map.prototype.size called on incompatible receiver #<Map>\'); }\n		\n		function values () { return new MapIterator(this, \'values\'); }\n		\n		function MapIterator (set, kind) {\n			this._index = 0;\n			this._kind = kind;\n			this._keys = set._keys;\n			this._values = set._values;\n		}\n		\n		function next () {\n			var _index = this._index;\n			var _keys = this._keys;\n			var length = _keys.length;\n			if ( _index<length ) {\n				do {\n					var key = _keys[_index];\n					if ( key===DELETED ) { continue; }\n					this._index = _index+1;\n					return {\n						value:\n							this._kind===\'entries\' ? [key, this._values[_index]] :\n								this._kind===\'values\' ? this._values[_index] :\n									key,\n						done: false\n					};\n				}\n				while ( ++_index<length );\n				this._index = _index;\n			}\n			return { value: undefined, done: true };\n		}\n		\n		if ( Object.create ) {\n			var Object_defineProperty = Object.defineProperty;\n			\n			var prototype = Map.prototype;\n			Object_defineProperty(Map, \'prototype\', PropertyDescriptor(prototype, false, false, false));\n			//Object_defineProperty(prototype, \'constructor\', PropertyDescriptor(Map, true, false, true));\n			Object_defineProperty(prototype, \'get\', PropertyDescriptor(get, true, false, true));\n			Object_defineProperty(prototype, \'set\', PropertyDescriptor(set, true, false, true));\n			Object_defineProperty(prototype, \'has\', PropertyDescriptor(has, true, false, true));\n			Object_defineProperty(prototype, \'delete\', PropertyDescriptor(delete$, true, false, true));\n			Object_defineProperty(prototype, \'clear\', PropertyDescriptor(clear, true, false, true));\n			Object_defineProperty(prototype, \'entries\', PropertyDescriptor(entries, true, false, true));\n			Object_defineProperty(prototype, \'forEach\', PropertyDescriptor(forEach, true, false, true));\n			Object_defineProperty(prototype, \'keys\', PropertyDescriptor(keys, true, false, true));\n			var SIZE = PropertyDescriptor(0, true, false, false);\n			Object_defineProperty(prototype, \'size\', PropertyDescriptor(size, function size (value) { Object_defineProperty(this, \'size\', SIZE); }, false, true));\n			Object_defineProperty(prototype, \'values\', PropertyDescriptor(values, true, false, true));\n			Object_defineProperty(prototype, \'toString\', PropertyDescriptor(function () { return \'[object Map]\'; }, true, false, true));\n			Object_defineProperty(prototype, \'_keys\', PropertyDescriptor(undefined, function _keys (value) { Object_defineProperty(this, \'_keys\', PropertyDescriptor(value, false, false, false)); }, false, false));\n			Object_defineProperty(prototype, \'_values\', PropertyDescriptor(undefined, function _values (value) { Object_defineProperty(this, \'_values\', PropertyDescriptor(value, false, false, false)); }, false, false));\n			\n			prototype = MapIterator.prototype;\n			Object_defineProperty(MapIterator, \'prototype\', PropertyDescriptor(prototype, false, false, false));\n			//Object_defineProperty(prototype, \'constructor\', PropertyDescriptor(MapIterator, true, false, true));\n			Object_defineProperty(prototype, \'next\', PropertyDescriptor(next, true, false, true));\n			Object_defineProperty(prototype, \'toString\', PropertyDescriptor(function () { return \'[object Map]\'; }, true, false, true));\n			\n			if ( Symbol_iterator!==undefined ) {\n				Object_defineProperty(Map.prototype, Symbol_iterator, PropertyDescriptor(entries, true, false, true));\n				Object_defineProperty(prototype, Symbol_iterator, PropertyDescriptor(function () { return this; }, true, false, true));\n			}\n		}\n		else {\n			var Size = Object(NaN);\n			Size.valueOf = Size.toString = size;\n			Map.prototype = {\n				constructor: Map,\n				get: get,\n				set: set,\n				has: has,\n				\'delete\': delete$,\n				clear: clear,\n				entries: entries,\n				forEach: forEach,\n				keys: keys,\n				size: Size,\n				values: values,\n				toString: function () { return \'[object Map]\'; },\n				_keys: [],\n				_values: []\n			};\n			\n			MapIterator.prototype = {\n				constructor: MapIterator,\n				next: next,\n				toString: function () { return \'[object Map Iterator]\'; }\n			};\n			\n			if ( Symbol_iterator!==undefined ) {\n				Map.prototype[Symbol_iterator] = entries;\n				MapIterator.prototype[Symbol_iterator] = function () { return this; };\n			}\n		}\n		\n		return Map;\n		\n	}()\n	/*¡ j-globals: Map (polyfill) */\n);';

const _Set = 'import Symbol_iterator from \'.Symbol.iterator?\';\nimport undefined from \'.undefined\';\nimport TypeError from \'.TypeError\';\nimport of from \'.for.of\';\nimport PropertyDescriptor from \'.null.PropertyDescriptor\';\nimport { defineIndexValue, createBound } from \'.native\';\nimport NaN from \'.NaN\';\nexport default (\n	/*! j-globals: Set (polyfill) */\n	typeof Set===\'function\' && Set.prototype && /*#__PURE__*/ function () {\n		var set = new Set;\n		return set.keys && set.add(-0)===set && 1/set.keys().next().value>0;\n	}() ? Set : /*#__PURE__*/ function () { \'use strict\';\n		\n		var DELETED = {};\n		\n		function Set (values) {\n			this.size = 0;\n			this._values = [];\n			if ( values==null ) { return; }\n			var set = this;\n			return /*#__PURE__*/ of(values, function (value) { set.add(value); });\n		}\n		\n		function has (value) {\n			var _values = this._values;\n			var index = _values.length;\n			if ( value===value ) { while ( index-- ) { if ( value===_values[index] ) { return true; } } }\n			else { while ( index-- ) { if ( _values[index]!==_values[index] ) { return true; } } }\n			return false;\n		}\n		\n		function add (value) {\n			var _values = this._values;\n			var length = _values.length;\n			var index = length;\n			if ( value===value ) {\n				while ( index-- ) {\n					if ( value===_values[index] ) {\n						_values[index] = value;\n						return this;\n					}\n				}\n			}\n			else {\n				while ( index-- ) {\n					if ( _values[index]!==_values[index] ) {\n						_values[index] = value;\n						return this;\n					}\n				}\n			}\n			defineIndexValue(_values, length, value===0 ? 0 : value);\n			++this.size;\n			return this;\n		}\n		\n		function delete$ (key) {\n			var _values = this._values;\n			var index = this.length;\n			if ( key===key ) {\n				while ( index-- ) {\n					if ( key===_values[index] ) {\n						_values[index] = DELETED;\n						--this.size;\n						return true;\n					}\n				}\n			}\n			else {\n				while ( index-- ) {\n					if ( _values[index]!==_values[index] ) {\n						_values[index] = DELETED;\n						--this.size;\n						return true;\n					}\n				}\n			}\n			return false;\n		}\n		\n		function clear () {\n			this.size = 0;\n			var _values = this._values;\n			var index = _values.length;\n			while ( index-- ) { _values[index] = DELETED; }\n		}\n		\n		function entries () { return new SetIterator(this, \'entries\'); }\n		\n		function forEach (callback/*, thisArg*/) {\n			switch ( typeof callback ) {\n				case \'function\':\n					break;\n				case \'undefined\':\n					throw TypeError(\'undefined is not a function\');\n				case \'string\':\n					throw TypeError(\'string "\'+callback+\'" is not a function\');\n				case \'number\':\n					throw TypeError(\'number \'+callback+\' is not a function\');\n				case \'boolean\':\n					throw TypeError(\'boolean \'+callback+\' is not a function\');\n				case \'object\':\n					throw TypeError(\'object \'+( callback ? \'\' : \'null \' )+\'is not a function\');\n				default:\n					throw TypeError(typeof callback+\' is not a function\');\n			}\n			if ( arguments.length>1 ) { callback = createBound(callback, arguments[1]); }\n			for ( var _values = this._values, index = 0; index<_values.length; ++index ) {\n				var value = _values[index];\n				value===DELETED || callback(value, value, this);\n			}\n		}\n		\n		function size () { throw TypeError(\'Method get Set.prototype.size called on incompatible receiver #<Set>\'); }\n		\n		function values () { return new SetIterator(this, \'values\'); }\n		\n		function keys () { return new SetIterator(this, \'keys\'); }\n		\n		function SetIterator (set, kind) {\n			this._index = 0;\n			this._kind = kind;\n			this._values = set._values;\n		}\n		\n		function next () {\n			var _index = this._index;\n			var _values = this._values;\n			var length = _values.length;\n			if ( _index<length ) {\n				do {\n					var value = _values[_index++];\n					if ( value===DELETED ) { continue; }\n					this._index = _index;\n					return {\n						value:\n							this._kind===\'entries\'\n								? [value, value]\n								: value,\n						done: false\n					};\n				}\n				while ( _index<length );\n				this._index = _index;\n			}\n			return { value: undefined, done: true };\n		}\n		\n		if ( Object.create ) {\n			var Object_defineProperty = Object.defineProperty;\n			\n			var prototype = Set.prototype;\n			Object_defineProperty(Set, \'prototype\', PropertyDescriptor(prototype, false, false, false));\n			//Object_defineProperty(prototype, \'constructor\', PropertyDescriptor(Set, true, false, true));\n			Object_defineProperty(prototype, \'has\', PropertyDescriptor(has, true, false, true));\n			Object_defineProperty(prototype, \'add\', PropertyDescriptor(add, true, false, true));\n			Object_defineProperty(prototype, \'delete\', PropertyDescriptor(delete$, true, false, true));\n			Object_defineProperty(prototype, \'clear\', PropertyDescriptor(clear, true, false, true));\n			Object_defineProperty(prototype, \'entries\', PropertyDescriptor(entries, true, false, true));\n			Object_defineProperty(prototype, \'forEach\', PropertyDescriptor(forEach, true, false, true));\n			var SIZE = PropertyDescriptor(0, true, false, false);\n			Object_defineProperty(prototype, \'size\', PropertyDescriptor(size, function size (value) { Object_defineProperty(this, \'size\', SIZE); }, false, true));\n			Object_defineProperty(prototype, \'values\', PropertyDescriptor(values, true, false, true));\n			Object_defineProperty(prototype, \'keys\', PropertyDescriptor(keys, true, false, true));\n			Object_defineProperty(prototype, \'toString\', PropertyDescriptor(function () { return \'[object Set]\'; }, true, false, true));\n			Object_defineProperty(prototype, \'_values\', PropertyDescriptor(undefined, function _values (value) { Object_defineProperty(this, \'_values\', PropertyDescriptor(value, false, false, false)); }, false, false));\n			\n			prototype = SetIterator.prototype;\n			Object_defineProperty(SetIterator, \'prototype\', PropertyDescriptor(prototype, false, false, false));\n			//Object_defineProperty(prototype, \'constructor\', PropertyDescriptor(SetIterator, true, false, true));\n			Object_defineProperty(prototype, \'next\', PropertyDescriptor(next, true, false, true));\n			Object_defineProperty(prototype, \'toString\', PropertyDescriptor(function () { return \'[object Set Iterator]\'; }, true, false, true));\n			\n			if ( Symbol_iterator!==undefined ) {\n				Object_defineProperty(Set.prototype, Symbol_iterator, PropertyDescriptor(values, true, false, true));\n				Object_defineProperty(prototype, Symbol_iterator, PropertyDescriptor(function () { return this; }, true, false, true));\n			}\n		}\n		else {\n			var Size = Object(NaN);\n			Size.valueOf = Size.toString = size;\n			Set.prototype = {\n				constructor: Set,\n				has: has,\n				add: add,\n				\'delete\': delete$,\n				clear: clear,\n				entries: entries,\n				forEach: forEach,\n				size: Size,\n				values: values,\n				keys: keys,\n				toString: function () { return \'[object Set]\'; },\n				_values: []\n			};\n			\n			SetIterator.prototype = {\n				constructor: SetIterator,\n				next: next,\n				toString: function () { return \'[object Set Iterator]\'; }\n			};\n			\n			if ( Symbol_iterator!==undefined ) {\n				Set.prototype[Symbol_iterator] = values;\n				SetIterator.prototype[Symbol_iterator] = function () { return this; };\n			}\n		}\n		\n		return Set;\n		\n	}()\n	/*¡ j-globals: Set (polyfill) */\n);';

const _String_raw = 'import { ToObject, ToLength, ToString } from \'.native\';\nexport default (\n	/*! j-globals: String.raw (polyfill) */\n	String.raw || function raw (template) {\n		var raw = /*#__PURE__*/ ToObject(/*#__PURE__*/ ToObject(template).raw);\n		var literalSegments = /*#__PURE__*/ ToLength(raw.length);\n		if ( literalSegments===1 ) { return /*#__PURE__*/ ToString(raw[0]); }\n		if ( !literalSegments ) { return \'\'; }\n		var stringElements = /*#__PURE__*/ ToString(raw[0]);\n		for ( var nextIndex = 1, arguments_length = arguments.length; nextIndex<literalSegments; ++nextIndex ) {\n			if ( nextIndex<arguments_length ) { stringElements += /*#__PURE__*/ ToString(arguments[nextIndex]); }\n			stringElements += /*#__PURE__*/ ToString(raw[nextIndex]);\n		}\n		return stringElements;\n	}\n	/*¡ j-globals: String.raw (polyfill) */\n);';

const _String_fromCodePoint = 'import floor from \'.Math.floor\';\nimport { ToNumber, UTF16Encoding } from \'.native\';\nexport default (\n	String.fromCodePoint || /*#__PURE__*/ function () {\n		function assertRange (codePoint) {\n			if ( 0<=codePoint && codePoint<=0x10FFFF && floor(codePoint)===codePoint ) { return codePoint; }\n			throw RangeError(\'Invalid code point \'+codePoint);\n		}\n		return function fromCodePoint (codePoint) {\n			var length = arguments.length;\n			var elements = \'\';\n			if ( length ) {\n				for ( var nextIndex = 1; ; ++nextIndex ) {\n					var nextCP = /*#__PURE__*/ ToNumber(codePoint);\n					elements += /*#__PURE__*/ UTF16Encoding(/*#__PURE__*/ assertRange(nextCP));\n					if ( nextIndex===length ) { break; }\n					codePoint = arguments[nextIndex];\n				}\n			}\n			return elements;\n		};\n	}()\n);';

const _String_prototype_codePointAt = 'import { RequireObjectCoercible, ToString, ToInteger, UTF16Decode } from \'.native\';\nexport default (\n	/*! j-globals: String.prototype.codePointAt (polyfill) */\n	String.prototype.codePointAt || function codePointAt (pos) {\n		var O = /*#__PURE__*/ RequireObjectCoercible(this, \'String.prototype.codePointAt called on null or undefined\');\n		var S = /*#__PURE__*/ ToString(O);\n		var position = /*#__PURE__*/ ToInteger(pos);\n		var size = S.length;\n		if ( position<0 || size<=position ) { return; }\n		var first = /*#__PURE__*/ S.charCodeAt(pos);\n		if ( 0xD800<=first && first<=0xDBFF && position+1!==size ) {\n			var second = /*#__PURE__*/ S.charCodeAt(position+1);\n			if ( 0xDC00<=second && second<=0xDFFF ) {\n				return /*#__PURE__*/ UTF16Decode(first, second);\n			}\n		}\n		return first;\n	}\n	/*¡ j-globals: String.prototype.codePointAt (polyfill) */\n);';

const _document_head = 'export default (\n	/*! j-globals: document.head (polyfill) */\n	document.head || /*#__PURE__*/ function () {\n		var head = document.documentElement.firstChild;\n		while ( head.tagName!==\'HEAD\' ) { head = head.nextSibling; }\n		return head;\n	}()\n	/*¡ j-globals: document.head (polyfill) */\n);';

const POLYFILL = /*#__PURE__*/ assign(create(NULL), {
	
	'default': _Default,
	
	'String.raw': _String_raw,
	'String.fromCodePoint': _String_fromCodePoint,
	'String.prototype.codePointAt': _String_prototype_codePointAt,
	
	'null.assign': _NULL_assign,
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
	
})                               ;

const MODULE_ID = /(?<=^import [a-zA-Z_$][\w$]* from ')\.(.+)(?=';$)/mg;
const IN_GLOBAL = /^\s*globalThis\s*[.[]/;
const ASCII_DOTS = /^[a-z_$][\w$]*(?:\.[\w$]*)*$/i;
const NOT_VARIABLE = /[`~!@#%^&*()\-=+[{\]};:'",<.>/?]/;

function get (id        , { bom = false, tab = '\t', eol = '\n', pre = '.', sur = '' }          = OPTIONS)         {
	let code         = '';
	for ( const chunk of Chunk(parseID(id), bom, tab, eol, pre, sur) ) { code += chunk; }
	return code;
}

function * Chunk ([ chain, multi, fallback, polyfill, exp, along ]                                         , bom         , tab        , eol        , pre        , sur        )                           {
	
	if ( bom ) { yield '\uFEFF'; }
	
	if ( !fallback ) {
		if ( multi ) {
			yield `export default ${wrap(chain)};${eol}${eol}`;
			const identifiers           = [];
			for ( const node of MULTI_EXPORT[chain] ) {
				if ( isReservedWord(node) ) {
					const NODE         = node.toUpperCase();
					yield `import ${NODE} from '${pre}${chain}.${node}${sur}'; export { ${NODE} as ${node} };${eol}`;
					identifiers.push(NODE);
				}
				else {
					yield `import ${node} from '${pre}${chain}.${node}${sur}'; export { ${node} };${eol}`;
					identifiers.push(node);
				}
			}
			yield `${eol}[ ${identifiers.join(', ')} ];`;
		}
		else if ( chain in INTERNAL ) {
			yield pre==='.' && sur==='' && tab==='\t' && eol==='\n'
				? INTERNAL[chain]
				: INTERNAL[chain].replace(MODULE_ID, replacer).split('\n').join(eol).split('\t').join(tab);
		}
		else {
			yield IN_GLOBAL.test(chain)
				? /*globalThis*/ `import globalThis from '${pre}globalThis?=${sur}';${eol}`
				: '';
			yield `export default ${
				chain==='undefined' ? 'void 0' :
					chain==='Infinity' ? '1/0' :
						chain==='NaN' ? '0/0' :
							ES3Chain(chain)
			};`;
		}
	}
	
	else if ( !polyfill ) {
		if ( multi ) { throw Error('暂不支持“.?”'); }
		if ( chain in FALLBACK ) {
			yield pre==='.' && sur==='' && tab==='\t' && eol==='\n'
				? FALLBACK[chain]
				: FALLBACK[chain].replace(MODULE_ID, replacer).split('\n').join(eol).split('\t').join(tab);
		}
		else if ( along ) {
			yield IN_GLOBAL.test(chain)
				? /*globalThis*/ `import globalThis from '${pre}globalThis?=${sur}';${eol}`
				: '';
			yield along.endsWith('"')
				? `import undefined from '${pre}undefined${sur}';${eol}`
				: '';
			yield `export default ${along} ? ${ES3Chain(chain)} : undefined;`;
		}
		else {
			yield `export default ${wrap(ES3Chain(chain))}`;
		}
	}
	
	else if ( !exp ) {
		if ( multi ) {
			yield chain in POLYFILL
				? `export { default } from '${pre}${chain}?=${sur}';${eol}${eol}`
				: `export default ${wrap(chain)};${eol}${eol}`;
			const identifiers           = [];
			for ( const node of MULTI_EXPORT[chain] ) {
				let id         = `${chain}.${node}`;
				if ( id in POLYFILL ) { id += '?='; }
				if ( isReservedWord(node) ) {
					const NODE         = node.toUpperCase();
					yield `import ${NODE} from '${pre}${id}${sur}'; export { ${NODE} as ${node} };${eol}`;
					identifiers.push(NODE);
				}
				else {
					yield `import ${node} from '${pre}${id}${sur}'; export { ${node} };${eol}`;
					identifiers.push(node);
				}
			}
			yield `${eol}var $= [ ${identifiers.join(', ')} ];${eol}`;
		}
		else {
			if ( chain in POLYFILL ) {
				yield pre==='.' && sur==='' && tab==='\t' && eol==='\n'
					? POLYFILL[chain]
					: POLYFILL[chain].replace(MODULE_ID, replacer).split('\n').join(eol).split('\t').join(tab);
			}
			else { throw Error(`@ltd/j-globals 没有为 ${chain} 准备内置的 polyfill`); }
		}
	}
	
	else {
		if ( multi ) { throw Error('不支持“.?=*”'); }
		if ( along ) {
			yield IN_GLOBAL.test(chain)
				? /*globalThis*/ `import globalThis from '${pre}globalThis?=${sur}';${eol}`
				: '';
			yield along.endsWith('d')
				? `import undefined from '${pre}undefined${sur}';${eol}`
				: '';
			yield `export default ${along} ? ${ES3Chain(chain)} : /*#__PURE__*/ ${exp};`;
		}
		else {
			yield `export default typeof globalThis==='object' ? ${ES3Chain(chain)} : /*#__PURE__*/ ${exp};`;
		}
	}
	
	function replacer (id        , chain        )         { return pre+chain+sur; }
	
}

                                                                                                  

function parseID (id        )                                          {
	let chain        ;
	let multi        ;
	const index = id.indexOf('?=');
	if ( index>=0 ) {
		let chain         = id.slice(0, index);
		if ( chain.endsWith('.') ) {
			chain = chain.slice(0, -1);
			multi = '.';
		}
		else { multi = ''; }
		return [ chain, multi, '?', '=', id.slice(index+2), Along(chain, -0) ];
	}
	if ( id.endsWith('?') ) {
		let chain         = id.slice(0, -1);
		if ( chain.endsWith('.') ) {
			chain = chain.slice(0, -1);
			multi = '.';
		}
		else { multi = ''; }
		return [ chain, multi, '?', '', '', Along(chain, -1) ];
	}
	if ( id.endsWith('.') ) {
		chain = id.slice(0, -1);
		multi = '.';
	}
	else {
		chain = id;
		multi = '';
	}
	return [ chain, multi, '', '', '', '' ];
}

function Along (chain        , end        )         {
	const rest           = [];
	const nodes        = Nodes(chain);
	const first         = nodes.shift();
	/*globalThis*/ first==='globalThis' ||
	rest.push(`typeof ${first}!=='undefined'`);
	for ( let index         = 0, length         = nodes.length+end; index<length; ) {
		rest.push(`${first}${PropertyAccessors(nodes.slice(0, ++index))}!==undefined`);
	}
	return rest.join(' && ');
}

function ES3Chain (chain        )         {
	const nodes        = Nodes(chain);
	return nodes.shift()+PropertyAccessors(nodes);
}

function Nodes (chain        )        {
	if ( ASCII_DOTS.test(chain) ) { return chain.split('.')         ; }
	throw SyntaxError('暂不支持解析非纯 ASCII 点号获取法');
}

function wrap (chain        )         {
	return NOT_VARIABLE.test(chain) ? chain : `(${chain})`;
}

const TAB = /(?<=^\n*)\n\t+/;

function toTSD (all                              , { bom = false, tab = '\t', eol = '\n', pre = '.', sur = '' }          = OPTIONS)         {
		let tsd         = '';
		let previous         = '';
		for ( const [ id, chain, multi ] of all ) {
			const current         = fetchFirst(chain);
			if ( current!==previous ) {
				previous = current;
				tsd += eol;
			}
			tsd += `declare module '${pre}${StringLiteral(id).slice(1, -1)}${sur}' { export default `;
			if ( multi ) {
				tsd += `${chain};${eol}`;
				for ( const node of MULTI_EXPORT[chain] ) {
					tsd += `${tab}export { default as ${node} } from '${pre}${chain}.${node}${sur}';${eol}`;
				}
			}
			else {
				switch ( chain ) {
					
					case 'default':
						tsd += trim`Default;${eol}
							${tab}function Default<Exports extends Readonly<{ [key :string] :any, default? :Module<Exports> }>> (exports :Exports) :Module<Exports>;${eol}
							${tab}function Default<Statics extends Readonly<{ [key :string] :any, default? :ModuleFunction<Statics, Main> }>, Main extends Callable | Newable | Callable & Newable> (main :Main, statics :Statics) :ModuleFunction<Statics, Main>;${eol}
							${tab}type Module<Exports> = Readonly<Exports & { default :Module<Exports> }>;${eol}
							${tab}type ModuleFunction<Statics, Main> = Readonly<Statics & { default :ModuleFunction<Statics, Main> }> & Main;${eol}
							${tab}type Callable = (...args :any) => any;${eol}
							${tab}type Newable = { new (...args :any) :any };${eol}`;
						break;
					case 'private':
						tsd += trim`Private;${eol}
							${tab}function Private<_ extends (this :void, instance :any) => object> (Private? :{ new ($ :object) :ReturnType<_> } | { new () :ReturnType<_> } | { (this :void, $ :object) :ReturnType<_> } | { (this :void) :ReturnType<_> } | ReturnType<_>) :_;${eol}
							${tab}function Private<Public extends object, PrivateConstructor extends { new ($ :Public) :object } | { new () :object }> (Private :PrivateConstructor) :(this :void, instance :Public) => InstanceType<PrivateConstructor>;${eol}
							${tab}function Private<Public extends object, PrivateApplier extends { ($ :Public) :object } | { () :object }> (Private :PrivateApplier) :(this :void, instance :Public) => ReturnType<PrivateApplier>;${eol}
							${tab}function Private<Public extends object, Private extends object> (PRIVATE? :Private) :(this :void, instance :Public) => Private;${eol}`;
						break;
					case 'for.of':
						tsd += `of;${eol}${tab}function of<V extends any, T extends any> (arrayLike_iterable :Iterable<V>, callbackfn :(this :T, value :V) => void | boolean, thisArg? :T) :void;${eol}`;
						break;
						
					case 'Symbol.For':
						tsd += trim`For;${eol}
						${tab}function For () :{${eol}
						${tab}${tab}(name :string) :symbol${eol}
						${tab}${tab}[name :string] :symbol${eol}
						${tab}};${eol}`;
						break;
					
					case 'typeof':
						tsd += trim`TYPEOF;${eol}
							${tab}function TYPEOF (value :any) :${eol}
							${tab}${tab}typeof value extends undefined ? 'undefined' :${eol}
							${tab}${tab}typeof value extends null ? 'null' :${eol}
							${tab}${tab}typeof value extends boolean ? 'boolean' :${eol}
							${tab}${tab}typeof value extends number ? 'number' :${eol}
							${tab}${tab}typeof value extends bigint ? 'bigint' :${eol}
							${tab}${tab}typeof value extends symbol ? 'symbol' :${eol}
							${tab}${tab}typeof value extends string ? 'string' :${eol}
							${tab}${tab}typeof value extends ( (...args :any) => any ) | { new (...args :any) :any } ? 'function' | 'object' : // IE6~8: typeof alert...DOM/BOM.host method==='object', alert.call===undefined${eol}
							${tab}${tab}//typeof value extends object ? 'object' | 'function' | 'undefined' : // typeof document.all==='undefined' // Chrome1~23, Safari?: typeof /RegExp/==='function' // Safari?: typeof .childNodes/children==='function'${eol}
							${tab}${tab}Exclude<string, 'boolean' | 'number' | 'string'/* | 'undefined' | 'function' | 'symbol' | 'bigint' | 'null'*/>;// typeof ( /* xhr: */ new ActiveXObject("Msxml2.XMLHTTP") ).abort==='unknown'...'date'${eol}`;
						break;
					
					case 'class.isBoolean':
						tsd += `isBoolean;${eol}${tab}function isBoolean (value :any) :value is Boolean;${eol}`;
						break;
					case 'class.isNumber':
						tsd += `isNumber;${eol}${tab}function isNumber (value :any) :value is Number;${eol}`;
						break;
					case 'class.isString':
						tsd += `isString;${eol}${tab}function isString (value :any) :value is String;${eol}`;
						break;
					case 'class.isDate':
						tsd += `isDate;${eol}${tab}function isDate (value :any) :value is Date;${eol}`;
						break;
					case 'class.isRegExp':
						tsd += `isRegExp;${eol}${tab}function isRegExp (value :any) :value is RegExp;${eol}`;
						break;
					case 'class.isMap':
						tsd += `isMap;${eol}${tab}function isMap (value :any) :value is Map<any, any>;${eol}`;
						break;
					case 'class.isSet':
						tsd += `isSet;${eol}${tab}function isSet (value :any) :value is Set<any>;${eol}`;
						break;
					case 'class.isWeakMap':
						tsd += `isWeakMap;${eol}${tab}function isWeakMap (value :any) :value is WeakMap<any, any>;${eol}`;
						break;
					case 'class.isWeakSet':
						tsd += `isWeakSet;${eol}${tab}function isWeakSet (value :any) :value is WeakSet<any>;${eol}`;
						break;
					case 'class.isPromise':
						tsd += `isPromise;${eol}${tab}function isPromise (value :any) :value is Promise<any>;${eol}`;
						break;
					case 'class.isSymbol':
						tsd += `isSymbol;${eol}${tab}function isSymbol (value :any) :value is Symbol;${eol}`;
						break;
					case 'class.isBigInt':
						tsd += `isBigInt;${eol}${tab}function isBigInt (value :any) :value is BigInt;${eol}`;
						break;
					case 'class.isPrimitive':
						tsd += `isPrimitive;${eol}${tab}function isPrimitive (value :any) :value is undefined | null | boolean | string | symbol | number | bigint;${eol}`;
						break;
					
					case 'null.assign':
						tsd += `assign;${eol}${tab}function assign<O extends {}> (target :null | O, firstSource :O, ...restSources :O[]) :O;${eol}`;
						break;
					case 'null.create':
						tsd += trim`create;${eol}
							${tab}function create<O extends object, OO extends PropertyDescriptorMap> (proto? :null | O, descriptorMap? :OO) :( OO extends TypedPropertyDescriptorMap<infer O> ? O : object ) & O;${eol}
							${tab}type TypedPropertyDescriptorMap<O> = { [k in keyof O] :TypedPropertyDescriptor<O[k]> };${eol}`;
						break;
					case 'null.defineProperties':
						tsd += trim`defineProperties;${eol}
							${tab}function defineProperties<O extends object, OO extends PropertyDescriptorMap> (object :O, descriptorMap :OO) :( OO extends TypedPropertyDescriptorMap<infer O> ? O : never ) & O;${eol}
							${tab}type TypedPropertyDescriptorMap<O> = { [k in keyof O] :TypedPropertyDescriptor<O[k]> };${eol}`;
						break;
					case 'null.defineProperty':
						tsd += trim`defineProperty;${eol}
							${tab}function defineProperty<O extends object, K extends string | symbol, D extends PropertyDescriptor> (object :O, key :K, descriptor :D, useReflect? :false) :( D extends TypedPropertyDescriptor<infer V> ? { [key in K] :V } : never ) & O;${eol}
							${tab}function defineProperty<O extends object, K extends string | symbol, D extends PropertyDescriptor> (object :O, key :K, descriptor :D, useReflect :true) :boolean;${eol}`;
						break;
					case 'null.fromEntries':
						tsd += `fromEntries;${eol}${tab}function fromEntries<K extends string | symbol, V extends any> (entries :Iterable<Readonly<{ 0 :K, 1 :V }>>) :{ [k in K] :V };${eol}`;
						break;
					case 'null.getOwnPropertyDescriptor':
						tsd += `getOwnPropertyDescriptor;${eol}${tab}function getOwnPropertyDescriptor<O extends {}, K extends Extract<keyof O, string | symbol>> (object :O, key :K) :TypedPropertyDescriptor<O[K]>;${eol}`;
						break;
					case 'null.getOwnPropertyDescriptors':
						tsd += `getOwnPropertyDescriptors;${eol}${tab}function getOwnPropertyDescriptors<O extends {}> (object :O) :{ [k in keyof O] :TypedPropertyDescriptor<O[k]> };${eol}`;
						break;
					case 'null.PropertyDescriptor':
						tsd += trim`PropertyDescriptor;${eol}
							${tab}function PropertyDescriptor<V extends any, W extends boolean, E extends boolean, C extends boolean> (value :V, writable :W, enumerable :E, configurable :C) :{ value :V, writable :W, enumerable :E, configurable :C };${eol}
							${tab}function PropertyDescriptor<G extends ( () => any ) | undefined, S extends ( (value :any) => void ) | undefined, E extends boolean, C extends boolean> (get :G, set :S, enumerable :E, configurable :C) :{ get :G, set :S, enumerable :E, configurable :C };${eol}`;
						break;
					case 'null':
						tsd += trim`NULL;${eol}
							${tab}const NULL :{${eol}
							${tab}${tab}new<ValueType> () :NULL<ValueType>,${eol}
							${tab}${tab}new () :object,${eol}
							${tab}${tab}<_ extends never, ObjectType extends object> (object :ObjectType) :ObjectType,${eol}
							${tab}${tab}<ValueType> (object :object) :NULL<ValueType>,${eol}
							${tab}};${eol}
							${tab}type NULL<ValueType> = {${eol}
							${tab}${tab}[key :string] :undefined | ValueType,${eol}
							${tab}${tab}toString? :ValueType,${eol}
							${tab}${tab}toLocaleString? :ValueType,${eol}
							${tab}${tab}valueOf? :ValueType,${eol}
							${tab}${tab}hasOwnProperty? :ValueType,${eol}
							${tab}${tab}isPrototypeOf? :ValueType,${eol}
							${tab}${tab}propertyIsEnumerable? :ValueType,${eol}
							${tab}${tab}__defineGetter__? :ValueType,${eol}
							${tab}${tab}__defineSetter__? :ValueType,${eol}
							${tab}${tab}__lookupGetter__? :ValueType,${eol}
							${tab}${tab}__lookupSetter__? :ValueType,${eol}
							${tab}${tab}__proto__? :ValueType,${eol}
							${tab}${tab}constructor? :ValueType,${eol}
							${tab}};${eol}`;
						break;
					case 'null.prototype':
						tsd += `NULL;${eol}${tab}const NULL :object | null;${eol}`;
						break;
					
					case 'return':
						tsd += `RETURN;${eol}${tab}function RETURN<T extends any> (value :T) :T;${eol}`;
						break;
					case 'return.false':
						tsd += `return_false;${eol}${tab}function return_false () :false;${eol}`;
						break;
					case 'return.true':
						tsd += `return_true;${eol}${tab}function return_true () :true;${eol}`;
						break;
					case 'return.KEEP':
						tsd += `KEEP;${eol}${tab}function KEEP<T extends any> (value :T) :T;${eol}`;
						break;
					
					case 'void.KEEP':
						tsd += `KEEP;${eol}${tab}function KEEP (...args :any[]) :void;${eol}`;
						break;
					
					case 'throw':
						tsd += `THROW;${eol}${tab}function THROW (error :Error) :never;${eol}`;
						break;
					case 'throw.Error':
					case 'throw.EvalError':
					case 'throw.RangeError':
					case 'throw.ReferenceError':
					case 'throw.SyntaxError':
					case 'throw.TypeError':
					case 'throw.URIError':
						tsd += `${chain.replace('.', '')};${eol}${tab}function ${chain.replace('.', '')} (message? :string) :never;${eol}`;
						break;
					
					case 'Object':
						tsd += trim`O;${eol}
							${tab}type O = Object;${eol}
							${tab}const O :{${eol}
							${tab}${tab}<T extends object> (value :T) :T;${eol}
							${tab}${tab}(value? :undefined | null) :object;${eol}
							${tab}${tab}(value :boolean) :Boolean & object;${eol}
							${tab}${tab}(value :number) :Number & object;${eol}
							${tab}${tab}(value :string) :String & object;${eol}
							${tab}${tab}(value :symbol) :Symbol & object;${eol}
							${tab}${tab}(value :bigint) :BigInt & object;${eol}
							${tab}${tab}new<T extends object> (value :T) :T;${eol}
							${tab}${tab}new (value? :undefined | null) :object;${eol}
							${tab}${tab}new (value :boolean) :Boolean & object;${eol}
							${tab}${tab}new (value :number) :Number & object;${eol}
							${tab}${tab}new (value :string) :String & object;${eol}
							${tab}${tab}new (value :symbol) :Symbol & object;${eol}
							${tab}${tab}new (value :bigint) :BigInt & object;${eol}
							${tab}} & {${eol}
							${tab}${tab}readonly [Method in keyof typeof Object] :typeof Object[Method];${eol}
							${tab}};${eol}`;
						break;
					case 'Object.create':
						if ( id==='Object.create?=' ) {
							tsd += trim`create;${eol}
								${tab}function create<P extends object | null> (proto :P) :P extends object ? object & { [K in keyof P] :P[K] } : object;${eol}`;
						}
						else {
							tsd += trim`create;${eol}
								${tab}function create<P extends object | null, D extends TypedPropertyDescriptorMap<object> | void> (proto :P,    descriptorMap? :D) :object & ( D extends TypedPropertyDescriptorMap<infer O> ? O : object ) & ( P extends object ? { [K in keyof P] :P[K] } : object );${eol}
								${tab}type TypedPropertyDescriptorMap<O> = { [K in keyof O] :TypedPropertyDescriptor<O[K]> };${eol}`;
						}
						break;
					case 'Object.fromEntries':
						tsd += `fromEntries;${eol}${tab}function fromEntries<K extends string | symbol, V extends any> (entries :Iterable<Readonly<{ 0 :K, 1 :V }>>) :{ [k in K] :V };${eol}`;
						break;
					case 'Object.entries':
						tsd += `entries;${eol}${tab}function entries<T extends object> (object :T) :[Extract<string, keyof T>, T[Extract<string, keyof T>]][];${eol}`;
						break;
					case 'Object.values':
						tsd += `values;${eol}${tab}function values<T extends object> (object :T) :T[Extract<string, keyof T>][];${eol}`;
						break;
					case 'Object.keys':
						tsd += `keys;${eol}${tab}function keys<T extends object> (object :T) :Extract<string, keyof T>[];${eol}`;
						break;
					case 'Object.getOwnPropertyNames':
						tsd += `getOwnPropertyNames;${eol}${tab}function getOwnPropertyNames<T extends object> (object :T) :Extract<string, keyof T>[];${eol}`;
						break;
					case 'Object.getOwnPropertySymbols':
						tsd += `getOwnPropertySymbols;${eol}${tab}function getOwnPropertySymbols<T extends object> (object :T) :Extract<symbol, keyof T>[];${eol}`;
						break;
						
					case 'Reflect.ownKeys':
						tsd += `ownKeys;${eol}${tab}function ownKeys<T extends object> (object :T) :Extract<string | symbol, keyof T>[];${eol}`;
						break;
					case 'Reflect.apply':
						tsd += `apply;${eol}${tab}function apply<This extends any, Args extends { length :number, [index :number] :any }, Target extends (this :This, ...args :Args & any[]) => any> (target :Target, thisArg :This, args :Readonly<Args>) :Target extends (this :This, ...args :Args & any[]) => infer R ? R : never;${eol}`;
						break;
					case 'Reflect.construct':
						tsd += `construct;${eol}${tab}function construct<Args extends { length :number, [index :number] :any }, Target extends new (...args :Args & any[]) => any, NewTarget extends new (...args :any) => any> (target :Target, args :Readonly<Args>, newTarget? :NewTarget) :Target extends new (...args :Args & any[]) => infer R ? R : never;${eol}`;
						break;
					
					case 'Array.isArray':
						tsd += `isArray;${eol}${tab}function isArray (value :any) :value is readonly any[];${eol}`;
						break;
					
					case 'Map':
						tsd += trim`constructor;${eol}
							${tab}class constructor<K, V> extends Map<K, V> {${eol}
							${tab}${tab}constructor (entries? :Iterable<Readonly<{ 0 :K, 1 :V }>>)${eol}
							${tab}}${eol}`;
						break;
					case 'WeakMap':
						tsd += trim`constructor;${eol}
							${tab}class constructor<K extends object, V> extends WeakMap<K, V> {${eol}
							${tab}${tab}constructor (entries? :Iterable<Readonly<{ 0 :K, 1 :V }>>)${eol}
							${tab}}${eol}`;
						break;
					case 'Set':
						tsd += trim`constructor;${eol}
							${tab}class constructor<V> extends Set<V> {${eol}
							${tab}${tab}constructor (values? :Iterable<V>)${eol}
							${tab}}${eol}`;
						break;
					case 'WeakSet':
						tsd += trim`constructor;${eol}
							${tab}class constructor<V extends object> extends WeakSet<V> {${eol}
							${tab}${tab}constructor (values? :Iterable<V>)${eol}
							${tab}}${eol}`;
						break;
						
					case 'native':
					case 'class':
						tsd += `_; const _ :never; `;
						break;
					
					default:
						tsd += `${chain}; `;
					
				}
			}
			tsd += `}${eol}`;
		}
		return ( bom ? '\uFEFF' : '' )+tsd;
	}
function fetchFirst (chain        )         {
	const index         = chain.indexOf('.');
	return index<0 ? chain : chain.slice(0, index);
}

function trim (template                      , ...values          )         {
	let value         = template[0];
	if ( value.startsWith('\n') ) { throw Error('EOL'); }
	let tab                    ;
	for ( const chunk of template ) {
		const $                         = TAB.exec(chunk);
		if ( $ ) {
			tab = $[0];
			break;
		}
	}
	if ( !tab ) { throw Error('TAB'); }
	value = template[0].split(tab).join('').split('\n').join('');
	const length         = values.length;
	for ( let index         = 0; index<length; ) {
		value +=
			values[index]+
			template[++index].split(tab).join('').split('\n').join('');
	}
	if ( template[length].endsWith(tab.slice(0, -1)) ) { throw Error('EOF'); }
	return value;
}

class Globals extends Set         {
	
	constructor () { super(); }
	
	//static get = get;
	
	get (               id        , options          )         {
		const got         = get(id, options);
		this.add(id);
		return got;
	}
	
	//add
	
	toTSD (               options          )         {
		return toTSD([ ...collectAll(this) ].sort().map(fetchChain), options);
	}
	
	shakingMap (             )                      {
		const map                      = new Map;
		const all              = collectAll(this);
		for ( const fallback of all ) {
			const index         = fallback.indexOf('?');
			if ( index>=0 ) {
				const origin         = fallback.slice(0, index);
				all.has(origin) && map.set(fallback, origin);
			}
		}
		return map;
	}
	
}
const _default = Default(Globals, {
	version,
	Globals,
	get,
});

function collectAll (globals         )              {
	const collection              = new Set;
	for ( const id of globals ) {
		collection.add(id);
		const [ , chain, multi ]                             = fetchChain(id);
		if ( multi ) {
			collection.add(chain);
			for ( const node of MULTI_EXPORT[chain] ) { collection.add(`${chain}.${node}`); }
		}
	}
	return collection;
}

function fetchChain (id        )                             {
	const index         = id.indexOf('?');
	const chain_         = index<0 ? id : id.slice(0, index);
	return chain_.endsWith('.')
		? [ id, chain_.slice(0, -1), '.' ]
		: [ id, chain_, '' ];
}

module.exports = _default;

//# sourceMappingURL=index.js.map