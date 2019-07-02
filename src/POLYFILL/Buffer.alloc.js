import undefined from '.undefined';
export default (
	/*! j-globals: Buffer.alloc (polyfill) */
	typeof Buffer==='function' && Buffer.alloc || function alloc (size, fill, encoding) {
		return fill===undefined
			? /*#__PURE__*/ new Buffer(size).fill(0)
			: /*#__PURE__*/ new Buffer(size).fill(fill, encoding);
	}
	/*¡ j-globals: Buffer.alloc (polyfill) */
);