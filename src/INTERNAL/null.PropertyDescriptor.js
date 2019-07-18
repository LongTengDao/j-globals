import create from '.Object.create';
export default (
	/*! j-globals: null.PropertyDescriptor (internal) */
	function () {
		function __PURE__ (value_get, set_writable, enumerable, configurable) {
			var propertyDescriptor = create(null);
			if ( set_writable===true ) {
				propertyDescriptor.value = value_get;
				propertyDescriptor.writable = true;
			}
			else if ( set_writable===false ) {
				propertyDescriptor.value = value_get;
				propertyDescriptor.writable = false;
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