import Object_assign from '.Object.assign';
import Object_create from '.Object.create?=';
import Object_freeze from '.Object.freeze';
import hasOwnProperty from '.Object.prototype.hasOwnProperty';
import getOwnPropertyDescriptors from '.null.getOwnPropertyDescriptors';
export default (
	/*! j-globals: null (polyfill) */
	/*#__PURE__*/ function () {
		'use strict';
		var assign = Object_assign || function assign (target, source) {
				for ( var key in source ) {
					if ( hasOwnProperty.call(source, key) ) { target[key] = source[key]; }
				}
				if ( hasOwnProperty.call(source, 'toString') ) { target.toString = source.toString; }
				if ( hasOwnProperty.call(source, 'toLocaleString') ) { target.toLocaleString = source.toLocaleString; }
				if ( hasOwnProperty.call(source, 'valueOf') ) { target.valueOf = source.valueOf; }
				if ( hasOwnProperty.call(source, 'hasOwnProperty') ) { target.hasOwnProperty = source.hasOwnProperty; }
				if ( hasOwnProperty.call(source, 'isPrototypeOf') ) { target.isPrototypeOf = source.isPrototypeOf; }
				if ( hasOwnProperty.call(source, 'propertyIsEnumerable') ) { target.propertyIsEnumerable = source.propertyIsEnumerable; }
				if ( hasOwnProperty.call(source, 'constructor') ) { target.constructor = source.constructor; }
				return target;
			};
		var NULL = function (object, define) {
			if ( object ) {
				return define
					? /*#__PURE__*/ Object_create(null, /*#__PURE__*/getOwnPropertyDescriptors(object))
					: /*#__PURE__*/ assign(/*#__PURE__*/ Object_create(null), object);
			}
		};
		delete NULL.name;
		//try { delete NULL.length; } catch (error) {}
		NULL.prototype = null;
		Object_freeze && Object_freeze(NULL);
		return NULL;
	}()
	/*¡ j-globals: null (polyfill) */
);