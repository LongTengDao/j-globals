import valueOf from '.String.prototype.valueOf';
export default (
	/*! j-globals: class.isString (internal) */
	function isString (value) {
		try { valueOf.call(value); }
		catch (error) { return false; }
		return true;
	}
	/*¡ j-globals: class.isString (internal) */
);