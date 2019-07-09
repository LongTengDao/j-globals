import valueOf from '.Date.prototype.valueOf';
export default (
	/*! j-globals: class.isDate (internal) */
	function isDate (value) {
		try { valueOf.call(value); }
		catch (error) { return false; }
		return true;
	}
	/*¡ j-globals: class.isDate (internal) */
);