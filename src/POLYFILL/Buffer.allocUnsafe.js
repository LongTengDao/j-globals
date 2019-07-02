export default (
	/*! j-globals: Buffer.allocUnsafe (polyfill) */
	typeof Buffer==='function' && Buffer.allocUnsafe || function allocUnsafe (size) {
		return /*#__PURE__*/ new Buffer(size);
	}
	/*¡ j-globals: Buffer.allocUnsafe (polyfill) */
);