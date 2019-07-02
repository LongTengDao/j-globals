import undefined from '.undefined';
export default (
	/*! j-globals: Buffer.isBuffer (fallback) */
	typeof Buffer==='function' ? Buffer.isBuffer : undefined
	/*¡ j-globals: Buffer.isBuffer (fallback) */
);