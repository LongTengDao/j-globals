import Object_defineProperty from '.Object.defineProperty';
import { Descriptor } from '.native';
export default (
	/*! j-globals: null.defineProperty (internal) */
	function () {
		var Reflect_defineProperty = typeof Reflect==='object' ? Reflect.defineProperty : function (object, key, descriptor) {
			try { Object_defineProperty(object, key, descriptor); }
			catch (error) { return false; }
			return true;
		};
		return function defineProperty (object, key, descriptor, useReflect) {
			return ( useReflect ? Reflect_defineProperty : Object_defineProperty )(object, key, Descriptor(descriptor));
		};
	}()
	/*¡ j-globals: null.defineProperty (internal) */
);