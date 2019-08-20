import Object_getOwnPropertyDescriptor from '.Object.getOwnPropertyDescriptor';
export default (
	/*! j-globals: null.getOwnPropertyDescriptor (internal) */
	function () {
		function __PURE__ (descriptor) {
			var propertyDescriptor = create(null);
			if ( descriptor.hasOwnProperty('value') ) {
				propertyDescriptor.value = descriptor.value;
				propertyDescriptor.writable = descriptor.writable;
			}
			else {
				propertyDescriptor.get = descriptor.get;
				propertyDescriptor.set = descriptor.set;
			}
			propertyDescriptor.enumerable = descriptor.enumerable;
			propertyDescriptor.configurable = descriptor.configurable;
			return propertyDescriptor;
		}
		return function getOwnPropertyDescriptor (object, key) {
			return /*#__PURE__*/__PURE__(/*#__PURE__*/Object_getOwnPropertyDescriptor(object, key));
		};
	}()
	/*¡ j-globals: null.getOwnPropertyDescriptor (internal) */
);