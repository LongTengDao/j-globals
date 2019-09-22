import create from '.Object.create';
import defineProperty from '.Object.defineProperty';
import NULL from '.null.prototype';
import undefined from '.undefined';
export default (
	/*! j-globals: private (internal) */
	/*#__PURE__*/ function (WeakMap) {
		var GET = create(NULL);
		GET.value = WeakMap.prototype.get;
		var SET = create(NULL);
		SET.value = WeakMap.prototype.set;
		function set (weak, THIS, _THIS) {
			weak.set(THIS, _THIS);
			return _THIS;
		}
		function Null () { return create(NULL); }
		return function Private (PRIVATE) {
			var weak = /*#__PURE__*/defineProperty(/*#__PURE__*/defineProperty(/*#__PURE__*/new WeakMap, 'get', GET), 'set', SET);
			var _This = PRIVATE===undefined
				? Null
				: typeof PRIVATE==='function'
					? 'prototype' in PRIVATE
						? function (THIS) { return new PRIVATE(THIS); }
						: function (THIS) { return PRIVATE(THIS); }
					: function () { return create(PRIVATE); };
			return function _ (THIS) {
				return /*#__PURE__*/weak.get(THIS) || /*#__PURE__*/set(weak, THIS, /*#__PURE__*/_This(THIS));
			};
		};
	}(WeakMap)
	/*¡ j-globals: private (internal) */
);