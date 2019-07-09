import then from '.Promise.prototype.then?';
export default (
	/*! j-globals: class.isPromise (internal) */
	then
		? function isPromise (value) {
			try { then.call(value); }
			catch (error) { return false; }
			return true;
		}
		: function isPromise () { return false; }
	/*¡ j-globals: class.isPromise (internal) */
);