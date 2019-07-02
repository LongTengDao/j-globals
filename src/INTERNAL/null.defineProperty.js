import Object_defineProperty from '.Object.defineProperty';
import create from '.Object.create';
import hasOwnProperty from '.Object.prototype.hasOwnProperty';
export default (
	/*! j-globals: null.defineProperty (internal) */
	create && /*#__PURE__*/ function () {
		
		var Reflect_defineProperty = typeof Reflect==='object' ? Reflect.defineProperty : function (object, key, descriptor) {
			try { Object_defineProperty(object, key, descriptor); }
			catch (error) { return false; }
			return true;
		};
		
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
		
		return function defineProperty (object, key, descriptor, useReflect) {
			return ( useReflect ? Reflect_defineProperty : Object_defineProperty )(object, key, Descriptor(descriptor));
		};
		
	}()
	/*¡ j-globals: null.defineProperty (internal) */
);