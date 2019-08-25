import create from '.Object.create';
import defineProperty from '.Object.defineProperty';
import RETURN from '.return';
import NULL from '.null.prototype';
export default (
	/*! j-globals: private (internal) */
	typeof WeakMap==='function'
		? /*#__PURE__*/ function () {
			var Weak = WeakMap;
			var GET = create(NULL);
			GET.value = Weak.prototype.get;
			var SET = create(NULL);
			SET.value = Weak.prototype.set;
			function add (weak, THIS) {
				var _THIS = create(NULL);
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