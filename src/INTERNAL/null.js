import hasOwnProperty from '.Object.prototype.hasOwnProperty';
import Object_create from '.Object.create';
import Object_freeze from '.Object.freeze';
import _NULL from '.null.prototype';
export default (
	/*! j-globals: null.constructor (internal) */
	/*#__PURE__*/ function () {
		'use strict';
		var assign = Object.assign || function assign (target, source) {
			for ( var key in source ) {
				if ( hasOwnProperty.call(source, key) ) { target[key] = source[key]; }
			}
			return target;
		};
		var NULL = function (object) {
			if ( object ) {
				return /*#__PURE__*/ assign(/*#__PURE__*/ Object_create(_NULL), object);
			}
		};
		delete NULL.name;
		//try { delete NULL.length; } catch (error) {}
		NULL.prototype = null;
		Object_freeze(NULL);
		return NULL;
	}()
	/*¡ j-globals: null.constructor (internal) */
);