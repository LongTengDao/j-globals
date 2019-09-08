export default (
	/*! j-globals: return.KEEP (internal) */
	/*#__PURE__*/ function () {
		"use strict";
		try { return Function('"use strict";return function(v){return v}')(); }
		catch (error) {}
		return function KEEP (value) { return value; };
	}()
	/*¡ j-globals: return.KEEP (internal) */
);