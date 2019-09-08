import valueOf from '.Boolean.prototype.valueOf';
import throwStackOverflowErrorEarly from '.void.KEEP';
export default (
	/*! j-globals: class.isBoolean (internal) */
	function () {
		function __PURE__ (value) {
			throwStackOverflowErrorEarly();
			try { valueOf.call(value); }
			catch (error) { return false; }
			return true;
		}
		return function isBoolean (value) {
			return /*#__PURE__*/ __PURE__(value);
		};
	}()
	/*¡ j-globals: class.isBoolean (internal) */
);