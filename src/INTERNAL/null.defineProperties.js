import propertyIsEnumerable from '.Object.prototype.propertyIsEnumerable';
import hasOwnProperty from '.Object.prototype.hasOwnProperty';
import create from '.Object.create';
import keys from '.Object.keys';
import getOwnPropertySymbols from '.Object.getOwnPropertySymbols';
import Object_defineProperties from '.Object.defineProperties';
export default (
	/*! j-globals: null.defineProperties (internal) */
	function () {
		function Descriptor (source) {
			var target = create(null);
			if ( hasOwnProperty.call(source, 'value') ) { target.value = source.value; }
			if ( hasOwnProperty.call(source, 'writable') ) { target.writable = source.writable; }
			if ( hasOwnProperty.call(source, 'get') ) { target.get = source.get; }
			if ( hasOwnProperty.call(source, 'set') ) { target.set = source.set; }
			if ( hasOwnProperty.call(source, 'enumerable') ) { target.enumerable = source.enumerable; }
			if ( hasOwnProperty.call(source, 'configurable') ) { target.configurable = source.configurable; }
			return target;
		}
		return function defineProperties (object, descriptorMap) {
			var created = create(null);
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