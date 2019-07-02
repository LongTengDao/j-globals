import Object_getOwnPropertyDescriptor from '.Object.getOwnPropertyDescriptor';
import PropertyDescriptor from '.null.PropertyDescriptor';
export default (
	/*! j-globals: null.getOwnPropertyDescriptor (internal) */
	function getOwnPropertyDescriptor (object, key) {
		var descriptor = /*#__PURE__*/ Object_getOwnPropertyDescriptor(object, key);
		return /*#__PURE__*/ descriptor.hasOwnProperty('value')
			? /*#__PURE__*/ PropertyDescriptor(descriptor.value, descriptor.writable, descriptor.enumerable, descriptor.configurable)
			: /*#__PURE__*/ PropertyDescriptor(descriptor.get, descriptor.set, descriptor.enumerable, descriptor.configurable);
	}
	/*¡ j-globals: null.getOwnPropertyDescriptor (internal) */
);