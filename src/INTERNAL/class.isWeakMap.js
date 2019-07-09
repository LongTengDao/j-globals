import has from '.WeakMap.prototype.has?';
export default (
	/*! j-globals: class.isWeakMap (internal) */
	has
		? function isWeakMap (value) {
			try { has.call(value, has); }
			catch (error) { return false; }
			return true;
		}
		: function isWeakMap () { return false; }
	/*¡ j-globals: class.isWeakMap (internal) */
);