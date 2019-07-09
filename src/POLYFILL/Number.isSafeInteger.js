import isInteger from '.Number.isInteger?=';
export default (
	/*! j-globals: Number.isSafeInteger (polyfill) */
	Number.isSafeInteger || function isSafeInteger (number) {
		return /*#__PURE__*/isInteger(number) && -9007199254740991<=number && number<=9007199254740991;
	}
	/*¡ j-globals: Number.isSafeInteger (polyfill) */
);