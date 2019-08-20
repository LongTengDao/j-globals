var create = Object.create;
export default (
	/*! j-globals: null.readonly (internal) */
	function () {
		function __PURE__ (value) {
			var propertyDescriptor = create(null);
			propertyDescriptor.value = value;
			propertyDescriptor.writable = false;
			propertyDescriptor.enumerable = true;
			propertyDescriptor.configurable = false;
			return propertyDescriptor;
		}
		return function readonly (value) {
			return /*#__PURE__*/ __PURE__(value);
		};
	}()
	/*¡ j-globals: null.readonly (internal) */
);