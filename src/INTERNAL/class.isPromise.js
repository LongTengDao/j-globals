import then from '.Promise.prototype.then?';
import throwStackOverflowErrorEarly from '.void.KEEP';
export default (
	/*! j-globals: class.isPromise (internal) */
	then
		? function () {
			function __PURE__ (value) {
				throwStackOverflowErrorEarly();
				try { then.call(value); }
				catch (error) { return false; }
				return true;
			}
			return function isPromise (value) {
				return /*#__PURE__*/ __PURE__(value);
			};
		}()
		: function isPromise () { return false; }
	/*¡ j-globals: class.isPromise (internal) */
);