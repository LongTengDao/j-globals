import has from '.Map.prototype.has?';
import throwStackOverflowErrorEarly from '.void.KEEP';
export default (
	/*! j-globals: class.isMap (internal) */
	has
		? function () {
			function __PURE__ (value) {
				throwStackOverflowErrorEarly();
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