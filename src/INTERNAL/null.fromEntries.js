import assign from '.Object.assign';
import Object_fromEntries from '.Object.fromEntries';
import { create } from '.native';
import NULL from '.null.prototype';
export default (
	/*! j-globals: null.fromEntries (internal) */
	function fromEntries (entries) {
		return /*#__PURE__*/ assign(/*#__PURE__*/ create(NULL), /*#__PURE__*/ Object_fromEntries(entries));
	}
	/*¡ j-globals: null.fromEntries (internal) */
);