import create from '.Object.create';
import getOwnPropertyDescriptor from '.null.getOwnPropertyDescriptor';
import NULL from '.null.prototype';
var ownKeys = typeof Reflect==='object' ? Reflect.ownKeys : Object.getOwnPropertyNames;
export default (
	/*! j-globals: null.getOwnPropertyDescriptors (internal) */
	function getOwnPropertyDescriptors (object) {
		var descriptorMap = /*#__PURE__*/ create(NULL);
		for ( var keys = /*#__PURE__*/ ownKeys(object), length = keys.length, index = 0; index<length; ++index ) {
			var key = keys[index];
			descriptorMap[key] = /*#__PURE__*/ getOwnPropertyDescriptor(object, key);
		}
		return descriptorMap;
	}
	/*¡ j-globals: null.getOwnPropertyDescriptors (internal) */
);