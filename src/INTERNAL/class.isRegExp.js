import exec from '.RegExp.prototype.exec';
export default (
	/*! j-globals: class.isRegExp (internal) */
	function isRegExp (value) {
		try { exec.call(value, ''); }
		catch (error) { return false; }
		return true;
	}
	/*¡ j-globals: class.isRegExp (internal) */
);