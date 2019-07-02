import floor from '.Math.floor';
import { ToNumber, UTF16Encoding } from '.native';
export default (
	String.fromCodePoint || /*#__PURE__*/ function () {
		function assertRange (codePoint) {
			if ( 0<=codePoint && codePoint<=0x10FFFF && floor(codePoint)===codePoint ) { return codePoint; }
			throw RangeError('Invalid code point '+codePoint);
		}
		return function fromCodePoint (codePoint) {
			var length = arguments.length;
			var elements = '';
			if ( length ) {
				for ( var nextIndex = 1; ; ++nextIndex ) {
					var nextCP = /*#__PURE__*/ ToNumber(codePoint);
					elements += /*#__PURE__*/ UTF16Encoding(/*#__PURE__*/ assertRange(nextCP));
					if ( nextIndex===length ) { break; }
					codePoint = arguments[nextIndex];
				}
			}
			return elements;
		};
	}()
);