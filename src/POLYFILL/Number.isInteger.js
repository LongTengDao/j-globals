import ceil from '.Math.ceil';
export default (
	/*! j-globals: Number.isInteger (polyfill) */
	Number.isInteger || function isInteger (number) {
		return typeof number==='number' && /*#__PURE__*/ceil(number)===number;
	}
	/*¡ j-globals: Number.isInteger (polyfill) */
);