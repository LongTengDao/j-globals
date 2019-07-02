export default (
	/*! j-globals: Buffer.isBuffer (polyfill) */
	typeof Buffer==='function' ? Buffer.isBuffer : function isBuffer (b) {
		return b instanceof Buffer;
	}
	/*¡ j-globals: Buffer.isBuffer (polyfill) */
);