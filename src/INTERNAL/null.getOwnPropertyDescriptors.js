import create from '.Object.create';
import getOwnPropertyDescriptor from '.null.getOwnPropertyDescriptor';
var ownKeys = typeof Reflect==='object' ? Reflect.ownKeys : Object.getOwnPropertyNames;
export default (
	/*! j-globals: null.getOwnPropertyDescriptors (internal) */
	function getOwnPropertyDescriptors (object) {
		var descriptorMap = /*#__PURE__*/ create(null);
		for ( var keys = /*#__PURE__*/ ownKeys(object), length = keys.length, index = 0; index<length; ++index ) {
			var key = keys[index];
			descriptorMap[key] = /*#__PURE__*/ getOwnPropertyDescriptor(object, key);
		}
		return descriptorMap;
	}
	/*¡ j-globals: null.getOwnPropertyDescriptors (internal) */
);