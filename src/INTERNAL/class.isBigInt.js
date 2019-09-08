import valueOf from '.BigInt.prototype.valueOf?';
import throwStackOverflowErrorEarly from '.void.KEEP';
export default (
	/*! j-globals: class.isBigInt (internal) */
	valueOf
		? function () {
			function __PURE__ (value) {
				throwStackOverflowErrorEarly();
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