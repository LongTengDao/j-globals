import has from '.Set.prototype.has?';
import { throwOverflow } from '.native';
export default (
	/*! j-globals: class.isSet (internal) */
	has
		? function () {
			function __PURE__ (value) {
				throwOverflow();
				try { has.call(value); }
				catch (error) { return false; }
				return true;
			}
			return function isSet (value) {
				return /*#__PURE__*/ __PURE__(value);
			};
		}()
		: function isSet () { return false; }
	/*¡ j-globals: class.isSet (internal) */
);