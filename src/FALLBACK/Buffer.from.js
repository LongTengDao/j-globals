import hasOwnProperty from '.Object.prototype.hasOwnProperty';
import undefined from '.undefined';
export default (
	/*! j-globals: Buffer.from (fallback) */
	typeof Buffer==='function' && /*#__PURE__*/ hasOwnProperty.call(Buffer, 'from') ? Buffer.from : undefined
	/*¡ j-globals: Buffer.from (fallback) */
);