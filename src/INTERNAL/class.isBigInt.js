import valueOf from '.BigInt.prototype.valueOf?';
import { throwOverflow } from '.native';
export default (
	/*! j-globals: class.isBigInt (internal) */
	valueOf
		? function () {
			function __PURE__ (value) {
				throwOverflow();
				try { valueOf.call(value); }
				catch (error) { return false; }
				return true;
			}
			return function isBigInt (value) {
				return /*#__PURE__*/ __PURE__(value);
			};
		}()
		: function isBigInt () { return false; }
	/*¡ j-globals: class.isBigInt (internal) */
);