import NULL from '.null.prototype';
var create = Object.create;
export default (
	/*! j-globals: null.PropertyDescriptor (internal) */
	function () {
		function __PURE__ (value_get, set_writable, enumerable, configurable) {
			var propertyDescriptor = create(NULL);
			if ( set_writable===true || set_writable===false ) {
				propertyDescriptor.value = value_get;
				propertyDescriptor.writable = set_writable;
			}
			else {
				propertyDescriptor.get = value_get;
				propertyDescriptor.set = set_writable;
			}
			propertyDescriptor.enumerable = enumerable;
			propertyDescriptor.configurable = configurable;
			return propertyDescriptor;
		}
		return function PropertyDescriptor (value_get, set_writable, enumerable, configurable) {
			return /*#__PURE__*/ __PURE__(value_get, set_writable, enumerable, configurable);
		};
	}()
	/*¡ j-globals: null.PropertyDescriptor (internal) */
);