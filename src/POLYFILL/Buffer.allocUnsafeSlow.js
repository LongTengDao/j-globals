export default (
	/*! j-globals: Buffer.allocUnsafeSlow (polyfill) */
	typeof Buffer==='function' && Buffer.allocUnsafeSlow || function allocUnsafeSlow (size) {
		return /*#__PURE__*/ new Buffer(size);
	}
	/*¡ j-globals: Buffer.allocUnsafeSlow (polyfill) */
);