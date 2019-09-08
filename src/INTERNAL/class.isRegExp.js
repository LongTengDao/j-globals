import test from '.RegExp.prototype.test';
import throwStackOverflowErrorEarly from '.void.KEEP';
export default (
	/*! j-globals: class.isRegExp (internal) */
	function () {
		function __PURE__ (value) {
			throwStackOverflowErrorEarly();
			try { test.call(value, ''); }
			catch (error) { return false; }
			return true;
		}
		return function isRegExp (value) {
			return /*#__PURE__*/ __PURE__(value);
		};
	}()
	/*¡ j-globals: class.isRegExp (internal) */
);