import propertyIsEnumerable from '.Object.prototype.propertyIsEnumerable';
import keys from '.Object.keys';
import getOwnPropertySymbols from '.Object.getOwnPropertySymbols';
import Object_defineProperties from '.Object.defineProperties';
import { Descriptor, create } from '.native';
import NULL from '.null.prototype';
export default (
	/*! j-globals: null.defineProperties (internal) */
	function () {
		return function defineProperties (object, descriptorMap) {
			var created = create(NULL);
			var names = keys(descriptorMap);
			for ( var length = names.length, index = 0; index<length; ++index ) {
				var name = names[index];
				created[name] = Descriptor(descriptorMap[name]);
			}
			var symbols = getOwnPropertySymbols(descriptorMap);
			for ( length = symbols.length, index = 0; index<length; ++index ) {
				var symbol = symbols[index];
				if ( propertyIsEnumerable.call(descriptorMap, symbol) ) { created[symbol] = Descriptor(descriptorMap[symbol]); }
			}
			return Object_defineProperties(object, created);
		};
	}()
	/*¡ j-globals: null.defineProperties (internal) */
);