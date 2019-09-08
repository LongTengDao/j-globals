import has from '.WeakSet.prototype.has?';
import throwStackOverflowErrorEarly from '.void.KEEP';
export default (
	/*! j-globals: class.isWeakSet (internal) */
	has
		? function () {
			function __PURE__ (value) {
				throwStackOverflowErrorEarly();
				try { has.call(value, has); }
				catch (error) { return false; }
				return true;
			}
			return function isWeakSet (value) {
				return /*#__PURE__*/ __PURE__(value);
			};
		}()
		: function isWeakSet () { return false; }
	/*¡ j-globals: class.isWeakSet (internal) */
);