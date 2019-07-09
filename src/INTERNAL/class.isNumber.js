import valueOf from '.Number.prototype.valueOf';
export default (
	/*! j-globals: class.isNumber (internal) */
	function isNumber (value) {
		try { valueOf.call(value); }
		catch (error) { return false; }
		return true;
	}
	/*¡ j-globals: class.isNumber (internal) */
);