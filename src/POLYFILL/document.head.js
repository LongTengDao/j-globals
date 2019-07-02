export default (
	/*! j-globals: document.head (polyfill) */
	document.head || /*#__PURE__*/ function () {
		var head = document.documentElement.firstChild;
		while ( head.tagName!=='HEAD' ) { head = head.nextSibling; }
		return head;
	}()
	/*¡ j-globals: document.head (polyfill) */
);