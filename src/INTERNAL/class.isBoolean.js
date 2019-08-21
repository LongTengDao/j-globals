import valueOf from '.Boolean.prototype.valueOf';
import { throwOverflow } from '.native';
export default (
	/*! j-globals: class.isBoolean (internal) */
	function () {
		function __PURE__ (value) {
			throwOverflow();
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