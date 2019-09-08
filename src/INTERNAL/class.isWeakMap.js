import has from '.WeakMap.prototype.has?';
import throwStackOverflowErrorEarly from '.void.KEEP';
export default (
	/*! j-globals: class.isWeakMap (internal) */
	has
		? function () {
			function __PURE__ (value) {
				throwStackOverflowErrorEarly();
				try { has.call(value, has); }
				catch (error) { return false; }
				return true;
			}
			return function isWeakMap (value) {
				return /*#__PURE__*/ __PURE__(value);
			};
		}()
		: function isWeakMap () { return false; }
	/*¡ j-globals: class.isWeakMap (internal) */
);