import create from '.Object.create';
import defineProperty from '.Object.defineProperty';
import RETURN from '.return';
export default (
	/*! j-globals: private (internal) */
	typeof WeakMap==='function'
		? /*#__PURE__*/ function () {
			var Weak = WeakMap;
			var GET = create(null);
			GET.value = Weak.prototype.get;
			var SET = create(null);
			SET.value = Weak.prototype.set;
			function add (weak, THIS) {
				var _THIS = create(null);
				weak.set(THIS, _THIS);
				return _THIS;
			}
			return function Private () {
				var weak = /*#__PURE__*/ defineProperty(/*#__PURE__*/ defineProperty(/*#__PURE__*/ new Weak, 'get', GET), 'set', SET);
				return function _ (THIS) {
					return /*#__PURE__*/ weak.get(THIS) || /*#__PURE__*/ add(weak, THIS);
				};
			};
		}()
		: function Private () { return RETURN; }
	/*¡ j-globals: private (internal) */
);