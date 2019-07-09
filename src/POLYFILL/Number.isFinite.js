import Infinity from '.Infinity';
export default (
	/*! j-globals: Number.isFinite (polyfill) */
	Number.isFinite || function isFinite (number) {
		return typeof number==='number' && number===number && number!==Infinity && number!==-Infinity;
	}
	/*¡ j-globals: Number.isFinite (polyfill) */
);