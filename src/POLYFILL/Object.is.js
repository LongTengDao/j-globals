export default (
	/*! j-globals: Object.is (polyfill) */
	Object.is || function is (x, y) {
		return x===y ? x!==0 || 1/x===1/y : x!==x && y!==y;
	}
	/*¡ j-globals: Object.is (polyfill) */
);