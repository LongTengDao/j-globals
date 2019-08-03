import Object_assign from '.Object.assign';
import hasOwnProperty from ".Object.prototype.hasOwnProperty";
import Object_create from '.Object.create';
import Object_freeze from '.Object.freeze';
import Object_getOwnPropertyDescriptor from '.Object.getOwnPropertyDescriptor';
var ownKeys = typeof Reflect==='object' ? Reflect.ownKeys : Object.getOwnPropertyNames;
export default (
	/*! j-globals: null (internal) */
	/*#__PURE__*/ function () {
		'use strict';
		var assign = Object_assign || function assign (target, source) {
			for ( var key in source ) {
				if ( hasOwnProperty.call(source, key) ) { target[key] = source[key]; }
			}
			return target;
		}
		var DESCRIPTOR = Object_create(null);
		DESCRIPTOR.enumerable = true;
		DESCRIPTOR.configurable = true;
		function getOwnPropertyDescriptors (object) {
			var descriptorMap = Object_create(null);
			for ( var keys = ownKeys(object), length = keys.length, index = 0; index<length; ++index ) {
				var key = keys[index];
				var nullDescriptor = Object_create(DESCRIPTOR);
				var protoDescriptor = Object_getOwnPropertyDescriptor(object, key);
				if ( protoDescriptor.hasOwnProperty('value') ) {
					nullDescriptor.value = protoDescriptor.value;
					nullDescriptor.writable = true;
				}
				else {
					nullDescriptor.get = protoDescriptor.get;
					nullDescriptor.set = protoDescriptor.set;
				}
				descriptorMap[key] = nullDescriptor;
			}
			return descriptorMap;
		}
		var NULL = function (object, define) {
			if ( object ) {
				return define
					? /*#__PURE__*/ Object_create(null, /*#__PURE__*/ getOwnPropertyDescriptors(object))
					: /*#__PURE__*/ assign(/*#__PURE__*/ Object_create(null), object);
			}
		};
		delete NULL.name;
		//try { delete NULL.length; } catch (error) {}
		NULL.prototype = null;
		Object_freeze(NULL);
		return NULL;
	}()
	/*¡ j-globals: null (internal) */
);