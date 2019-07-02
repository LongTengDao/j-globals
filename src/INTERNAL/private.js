import create from '.Object.create';
import defineProperty from '.Object.defineProperty';
export default (
	/*! j-globals: private (internal) */
	/*#__PURE__*/ function () {
		var Weak = WeakMap;
		var GET = /*#__PURE__*/ create(null);
		GET.value = Weak.prototype.get;
		var SET = /*#__PURE__*/ create(null);
		GET.value = Weak.prototype.set;
		return function Private () {
			var weak = /*#__PURE__*/ defineProperty(/*#__PURE__*/ defineProperty(/*#__PURE__*/ new Weak, 'get', GET), 'set', SET);
			return function _ (THIS) {
				var _THIS;
				return /*#__PURE__*/ weak.get(THIS) || ( /*#__PURE__*/ weak.set(THIS, _THIS = /*#__PURE__*/ create(null)), _THIS );
			};
		};
	}()
	/*¡ j-globals: private (internal) */
);