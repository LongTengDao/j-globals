import has from '.Map.prototype.has?';
import { throwOverflow } from '.native';
export default (
	/*! j-globals: class.isMap (internal) */
	has
		? function () {
			function __PURE__ (value) {
				throwOverflow();
				try { has.call(value); }
				catch (error) { return false; }
				return true;
			}
			return function isMap (value) {
				return /*#__PURE__*/ __PURE__(value);
			};
		}()
		: function isMap () { return false; }
	/*¡ j-globals: class.isMap (internal) */
);