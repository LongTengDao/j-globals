import valueOf from '.Number.prototype.valueOf';
import throwStackOverflowErrorEarly from '.void.KEEP';
export default (
	/*! j-globals: class.isNumber (internal) */
	function () {
		function __PURE__ (value) {
			throwStackOverflowErrorEarly();
			try { valueOf.call(value); }
			catch (error) { return false; }
			return true;
		}
		return function isNumber (value) {
			return /*#__PURE__*/ __PURE__(value);
		};
	}()
	/*¡ j-globals: class.isNumber (internal) */
);