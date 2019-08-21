import valueOf from '.Symbol.prototype.valueOf?';
import { throwOverflow } from '.native';
export default (
	/*! j-globals: class.isSymbol (internal) */
	valueOf
		? function () {
			function __PURE__ (value) {
				throwOverflow();
				try { valueOf.call(value); }
				catch (error) { return false; }
				return true;
			}
			return function isSymbol (value) {
				return /*#__PURE__*/ __PURE__(value);
			};
		}()
		: function isSymbol () { return false; }
	/*¡ j-globals: class.isSymbol (internal) */
);