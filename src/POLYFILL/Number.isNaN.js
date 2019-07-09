export default (
	/*! j-globals: Number.isNaN (polyfill) */
	Number.isNaN || function isNaN (number) {
		return number!==number;
	}
	/*¡ j-globals: Number.isNaN (polyfill) */
);