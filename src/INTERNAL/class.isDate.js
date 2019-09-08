import valueOf from '.Date.prototype.valueOf';
import throwStackOverflowErrorEarly from '.void.KEEP';
export default (
	/*! j-globals: class.isDate (internal) */
	function () {
		function __PURE__ (value) {
			throwStackOverflowErrorEarly();
			try { valueOf.call(value); }
			catch (error) { return false; }
			return true;
		}
		return function isDate (value) {
			return /*#__PURE__*/ __PURE__(value);
		};
	}()
	/*¡ j-globals: class.isDate (internal) */
);