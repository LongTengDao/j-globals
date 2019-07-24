export default (
	/*! j-globals: Error (polyfill) */
	/*# __PURE__*/ Error('0').message ? Error : /*#__PURE__*/ function () {
		function Error0 (message) {
			return Error(0, message);
		}
		Error0.prototype = Error.prototype;
		return Error0;
	}()
	/*¡ j-globals: Error (polyfill) */
);