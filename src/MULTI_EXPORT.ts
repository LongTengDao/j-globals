import assign from '.Object.assign';
import create from '.Object.create';

import NULL from './NULL';

export default /*#__PURE__*/ assign(create(NULL), {
	
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
	],
	
	'return': [
		'true',
		'false',
		'sideeffects',
	],
	
}) as { [chain :string] :string[] };
