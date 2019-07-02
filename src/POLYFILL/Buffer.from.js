import hasOwnProperty from '.Object.prototype.hasOwnProperty';
import Uint8Array from '.Uint8Array?';
import toPrimitive from '.Symbol.toPrimitive?';
import undefined from '.undefined';
export default (
	/*! j-globals: Buffer.from (polyfill) */
	typeof Buffer==='function' && /*#__PURE__*/ hasOwnProperty.call(Buffer, 'from') ? Buffer.from : function from (value, encodingOrOffset, length) {
		if ( typeof value==='string' ) { return /*#__PURE__*/ new Buffer(value, encodingOrOffset); }
		if ( Uint8Array ? value instanceof Uint8Array : value instanceof Buffer ) { return /*#__PURE__*/ new Buffer(value); }
		if ( /*#__PURE__*/ toString.call(value)==='[object Array]' || value instanceof Array ) { return /*#__PURE__*/ new Buffer(value); }
		if ( typeof value.valueOf==='function' ) {
			var valued = /*#__PURE__*/ value.valueOf();
			if ( valued!=null && valued!==value ) { return /*#__PURE__*/ from(valued, encodingOrOffset, length); }
		}
		if ( typeof toPrimitive!==undefined && typeof value[toPrimitive]==='function' ) { return /*#__PURE__*/ from(/*#__PURE__*/ value[toPrimitive]('string'), encodingOrOffset, length); }
		return /*#__PURE__*/ new Buffer(value, encodingOrOffset, length);
	}
	/*¡ j-globals: Buffer.from (polyfill) */
);