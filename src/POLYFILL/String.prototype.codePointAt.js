import { RequireObjectCoercible, ToString, ToInteger, UTF16Decode } from '.native';
export default (
	/*! j-globals: String.prototype.codePointAt (polyfill) */
	String.prototype.codePointAt || function codePointAt (pos) {
		var O = /*#__PURE__*/ RequireObjectCoercible(this, 'String.prototype.codePointAt called on null or undefined');
		var S = /*#__PURE__*/ ToString(O);
		var position = /*#__PURE__*/ ToInteger(pos);
		var size = S.length;
		if ( position<0 || size<=position ) { return; }
		var first = /*#__PURE__*/ S.charCodeAt(pos);
		if ( 0xD800<=first && first<=0xDBFF && position+1!==size ) {
			var second = /*#__PURE__*/ S.charCodeAt(position+1);
			if ( 0xDC00<=second && second<=0xDFFF ) {
				return /*#__PURE__*/ UTF16Decode(first, second);
			}
		}
		return first;
	}
	/*¡ j-globals: String.prototype.codePointAt (polyfill) */
);