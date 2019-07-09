import valueOf from '.Boolean.prototype.valueOf';
export default (
	/*! j-globals: class.isBoolean (internal) */
	function isBoolean (value) {
		try { valueOf.call(value); }
		catch (error) { return false; }
		return true;
	}
	/*¡ j-globals: class.isBoolean (internal) */
);