import { ToObject, ToLength, ToString } from '.native';
export default (
	/*! j-globals: String.raw (polyfill) */
	String.raw || function raw (template) {
		var raw = /*#__PURE__*/ ToObject(/*#__PURE__*/ ToObject(template).raw);
		var literalSegments = /*#__PURE__*/ ToLength(raw.length);
		if ( literalSegments===1 ) { return /*#__PURE__*/ ToString(raw[0]); }
		if ( !literalSegments ) { return ''; }
		var stringElements = /*#__PURE__*/ ToString(raw[0]);
		for ( var nextIndex = 1, arguments_length = arguments.length; nextIndex<literalSegments; ++nextIndex ) {
			if ( nextIndex<arguments_length ) { stringElements += /*#__PURE__*/ ToString(arguments[nextIndex]); }
			stringElements += /*#__PURE__*/ ToString(raw[nextIndex]);
		}
		return stringElements;
	}
	/*¡ j-globals: String.raw (polyfill) */
);