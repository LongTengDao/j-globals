import slice from '.Array.prototype.slice';////?=
export default (
	/*! j-globals: Array.of (polyfill) */
	Array.of || function of () {
		return /*#__PURE__*/ slice.call(arguments);
	}
	/*¡ j-globals: Array.of (polyfill) */
);