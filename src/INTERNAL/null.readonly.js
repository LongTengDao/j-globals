import push from '.Array.prototype.push';
export default (
	/*! j-globals: null.Readonly (internal) */
	function () {
		var create = Object.create;
		var getOwnPropertyNames = Object.getOwnPropertyNames;
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		function __PURE__ (source, deep) {
			var descriptorMap = create(null);
			var keys = getOwnPropertyNames(source);
			if ( getOwnPropertySymbols ) { push.apply(keys, getOwnPropertySymbols(source)); }
			for ( var index = 0, length = keys.length; index<length; ++index ) {
				var key = keys[index];
				var value = source[key];
				var descriptor = create(null);
				descriptor.value = deep && typeof value==='object' && value ? __PURE__(value, deep) : value;
				descriptor.writable = false;
				descriptor.enumerable = true;
				descriptor.configurable = false;
				descriptorMap[key] = descriptor;
			}
			return create(null, descriptorMap);
		}
		return function Readonly (object, deep) {
			return /*#__PURE__*/ __PURE__(object, deep);
		};
	}()
	/*¡ j-globals: null.Readonly (internal) */
);