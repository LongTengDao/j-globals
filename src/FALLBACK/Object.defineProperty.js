export default (
	/*! j-globals: Object.defineProperty (fallback) */
	/*#__PURE__*/ function () {
		var defineProperty = Object.defineProperty;
		if ( defineProperty ) {
			try {
				var descriptor = Object.create(null);
				descriptor.get = function () {};
				descriptor.configurable = false;
				defineProperty({}, 0, descriptor);
				return defineProperty;
			}
			catch (error) { }
		}
	}()
	/*¡ j-globals: Object.defineProperty (fallback) */
)