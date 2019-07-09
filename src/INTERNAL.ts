import assign from '.Object.assign';
import create from '.Object.create';

import Default from './INTERNAL/default?text';
import Private from './INTERNAL/private?text';
import of from './INTERNAL/for.of?text';

import TYPEOF from './INTERNAL/typeof?text';

import CLASS from './INTERNAL/class?text';
import class_isBoolean from './INTERNAL/class.isBoolean?text';
import class_isNumber from './INTERNAL/class.isNumber?text';
import class_isString from './INTERNAL/class.isString?text';
import class_isDate from './INTERNAL/class.isDate?text';
import class_isRegExp from './INTERNAL/class.isRegExp?text';
import class_isMap from './INTERNAL/class.isMap?text';
import class_isSet from './INTERNAL/class.isSet?text';
import class_isWeakMap from './INTERNAL/class.isWeakMap?text';
import class_isWeakSet from './INTERNAL/class.isWeakSet?text';
import class_isPromise from './INTERNAL/class.isPromise?text';
import class_isSymbol from './INTERNAL/class.isSymbol?text';
import class_isBigInt from './INTERNAL/class.isBigInt?text';

import NULL from './INTERNAL/null?text';
import NULL_assign from './INTERNAL/null.assign?text';
import NULL_create from './INTERNAL/null.create?text';
import NULL_defineProperties from './INTERNAL/null.defineProperties?text';
import NULL_defineProperty from './INTERNAL/null.defineProperty?text';
import NULL_fromEntries from './INTERNAL/null.fromEntries?text';
import NULL_getOwnPropertyDescriptor from './INTERNAL/null.getOwnPropertyDescriptor?text';
import NULL_getOwnPropertyDescriptors from './INTERNAL/null.getOwnPropertyDescriptors?text';
import NULL_PropertyDescriptor from './INTERNAL/null.PropertyDescriptor?text';

import RETURN from './INTERNAL/return?text';
import return_true from './INTERNAL/return.true?text';
import return_false from './INTERNAL/return.false?text';
import return_sideeffects from './INTERNAL/return.sideeffects?text';

import throwError from './INTERNAL/throw.Error?text';
import throwEvalError from './INTERNAL/throw.EvalError?text';
import THROW from './INTERNAL/throw?text';
import throwRangeError from './INTERNAL/throw.RangeError?text';
import throwReferenceError from './INTERNAL/throw.ReferenceError?text';
import throwSyntaxError from './INTERNAL/throw.SyntaxError?text';
import throwTypeError from './INTERNAL/throw.TypeError?text';
import throwURIError from './INTERNAL/throw.URIError?text';

import NATIVE from './INTERNAL/native?text';

const INTERNAL = /*#__PURE__*/ assign(create(null), {
	
	'native': NATIVE,
	
	'default': Default,
	'private': Private,
	'for.of': of,
	
	'typeof': TYPEOF,
	
	'class': CLASS,
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
	
	'null': NULL,
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
	'return.sideeffects': return_sideeffects,
	
	'throw.Error': throwError,
	'throw.EvalError': throwEvalError,
	'throw': THROW,
	'throw.RangeError': throwRangeError,
	'throw.ReferenceError': throwReferenceError,
	'throw.SyntaxError': throwSyntaxError,
	'throw.TypeError': throwTypeError,
	'throw.URIError': throwURIError,
	
}) as { [chain :string] :string };

export default INTERNAL;
