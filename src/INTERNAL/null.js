import Object_assign from '.Object.assign';
import Object_create from '.Object.create';
import Object_freeze from '.Object.freeze';
export default (
	/*! j-globals: null (internal) */
	/*#__PURE__*/ function () {
		'use strict';
		var NULL = function (object, define) {
			if ( object ) {
				return define
					? /*#__PURE__*/ Object_create(null, /*#__PURE__*/getOwnPropertyDescriptors(object))
					: /*#__PURE__*/ Object_assign(/*#__PURE__*/ Object_create(null), object);
			}
		};
		delete NULL.name;
		//try { delete NULL.length; } catch (error) {}
		NULL.prototype = null;
		Object_freeze && Object_freeze(NULL);
		return NULL;
	}()
	/*¡ j-globals: null (internal) */
);

export { assign }; import assign from '.null.assign';
export { create }; import create from '.null.create';
export { defineProperties }; import defineProperties from '.null.defineProperties';
export { defineProperty }; import defineProperty from '.null.defineProperty';
export { fromEntries }; import fromEntries from '.null.fromEntries';
export { getOwnPropertyDescriptor }; import getOwnPropertyDescriptor from '.null.getOwnPropertyDescriptor';
export { getOwnPropertyDescriptors }; import getOwnPropertyDescriptors from '.null.getOwnPropertyDescriptors';
export { PropertyDescriptor }; import PropertyDescriptor from '.null.PropertyDescriptor';

[ assign, create, defineProperties, defineProperty, fromEntries, getOwnPropertyDescriptor, getOwnPropertyDescriptors, PropertyDescriptor ];