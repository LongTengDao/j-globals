import test from '.RegExp.prototype.test';
import { throwOverflow } from '.native';
export default (
	/*! j-globals: class.isRegExp (internal) */
	function () {
		function __PURE__ (value) {
			throwOverflow();
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