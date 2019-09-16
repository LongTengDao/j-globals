import undefined from '.undefined';
import propertyIsEnumerable from '.Object.prototype.propertyIsEnumerable';
import { Descriptor, create as Object_create } from '.native';
import NULL from '.null.prototype';
export default (
	/*! j-globals: null.create (internal) */
	function () {
		var keys = Object.keys;
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		function __PURE__ (proto, descriptorMap) {
			var created = Object_create(NULL);
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
				? /*#__PURE__*/ Object_create(proto===undefined ? NULL : proto)
				: /*#__PURE__*/ __PURE__(proto, descriptorMap);
		};
	}()
	/*¡ j-globals: null.create (internal) */
);