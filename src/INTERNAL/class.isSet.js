import has from '.Set.prototype.has?';
export default (
	/*! j-globals: class.isSet (internal) */
	has
		? function isSet (value) {
			try { has.call(value); }
			catch (error) { return false; }
			return true;
		}
		: function isSet () { return false; }
	/*¡ j-globals: class.isSet (internal) */
);