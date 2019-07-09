import valueOf from '.BigInt.prototype.valueOf?';
export default (
	/*! j-globals: class.isBigInt (internal) */
	valueOf
		? function isBigInt (value) {
		try { valueOf.call(value); }
			catch (error) { return false; }
			return true;
		}
		: function isBigInt () { return false; }
	/*¡ j-globals: class.isBigInt (internal) */
);