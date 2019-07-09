import has from '.Map.prototype.has?';
export default (
	/*! j-globals: class.isMap (internal) */
	has
		? function isMap (value) {
			try { has.call(value); }
			catch (error) { return false; }
			return true;
		}
		: function isMap () { return false; }
	/*¡ j-globals: class.isMap (internal) */
);