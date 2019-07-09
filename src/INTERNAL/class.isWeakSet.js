import has from '.WeakSet.prototype.has?';
export default (
	/*! j-globals: class.isWeakSet (internal) */
	has
		? function isWeakSet (value) {
			try { has.call(value, has); }
			catch (error) { return false; }
			return true;
		}
		: function isWeakSet () { return false; }
	/*¡ j-globals: class.isWeakSet (internal) */
);