import Object_assign from '.Object.assign';
import Object_create from '.Object.create';
import Object_freeze from '.Object.freeze';
import getOwnPropertyDescriptors from '.null.getOwnPropertyDescriptors';
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