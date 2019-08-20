import undefined from '.undefined';
import propertyIsEnumerable from '.Object.prototype.propertyIsEnumerable';
import hasOwnProperty from '.Object.prototype.hasOwnProperty';
import Object_create from '.Object.create';
export default (
	/*! j-globals: null.create (internal) */
	function () {
		var keys = Object.keys;
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		function Descriptor (source) {
			var target = Object_create(null);
			if ( hasOwnProperty.call(source, 'value') ) { target.value = source.value; }
			if ( hasOwnProperty.call(source, 'writable') ) { target.writable = source.writable; }
			if ( hasOwnProperty.call(source, 'get') ) { target.get = source.get; }
			if ( hasOwnProperty.call(source, 'set') ) { target.set = source.set; }
			if ( hasOwnProperty.call(source, 'enumerable') ) { target.enumerable = source.enumerable; }
			if ( hasOwnProperty.call(source, 'configurable') ) { target.configurable = source.configurable; }
			return target;
		}
		function __PURE__ (proto, descriptorMap) {
			var created = Object_create(null);
			var names = keys(descriptorMap);
			for ( var length = names.length, index = 0; index<length; ++index ) {
				var name = names[index];
				created[name] = Descriptor(descriptorMap[name]);
			}
			if ( getOwnPropertySymbols ) {
				var symbols = getOwnPropertySymbols(descriptorMap);
				for ( length = symbols.length, index = 0; index<length; ++index ) {
					var symbol = symbols[index];
					if ( propertyIsEnumerable.call(descriptorMap, symbol) ) { created[symbol] = Descriptor(descriptorMap[symbol]); }
				}
			}
			return Object_create(proto, created);
		}
		return function create (proto, descriptorMap) {
			return descriptorMap===undefined
				? /*#__PURE__*/ Object_create(proto===undefined ? null : proto)
				: /*#__PURE__*/ __PURE__(proto, descriptorMap);
		};
	}()
	/*¡ j-globals: null.create (internal) */
);