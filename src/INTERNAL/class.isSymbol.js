import valueOf from '.Symbol.prototype.valueOf?';
export default (
	/*! j-globals: class.isSymbol (internal) */
	valueOf
		? function isSymbol (value) {
			try { valueOf.call(value); }
			catch (error) { return false; }
			return true;
		}
		: function isSymbol () { return false; }
	/*¡ j-globals: class.isSymbol (internal) */
);