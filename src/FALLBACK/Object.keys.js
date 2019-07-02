export default (
	/*! j-globals: Object.keys (fallback) */
	/*#__PURE__*/ function () {
		var keys = Object.keys;
		if ( keys ) {
			try {
				keys(0);
				return keys;
			}
			catch (error) { }
		}
	}()
	/*¡ j-globals: Object.keys (fallback) */
)