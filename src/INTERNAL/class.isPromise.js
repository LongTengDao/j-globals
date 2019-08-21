import then from '.Promise.prototype.then?';
import { throwOverflow } from '.native';
export default (
	/*! j-globals: class.isPromise (internal) */
	then
		? function () {
			function __PURE__ (value) {
				throwOverflow();
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