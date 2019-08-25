export default (
	/*! j-globals: globalThis (polyfill) */
	/*#__PURE__*/ function GlobalThis () {
		
		try {
			return this// IE9- (IE8-: self!==window)
				||
				Function('return this')();// (0, eval) (IE8- not global) (also writable) // function(){}.constructor
		}
		
		catch (error) {// !CSP (e.g. Google Chrome Apps)
			
			if ( typeof window==='object' && typeof document==='object' ) { return window; }// Browser (window document IE9+ readonly) // frames !Worker & !readonly too
			
			if ( typeof self==='object' ) { return self; }// Worker !readonly
			
			//if ( typeof global==='object' && typeof process==='object' && typeof require==='function' ) { return global; }// Node.js
			
			//if ( typeof globalThis==='object' ) { return globalThis; }
			
			/*
			var __global_this_access_key__ = '__\u5168\u5C40_\u5BF9\u8C61_\u8BBF\u95EE_\u952E\u540D__';
			if ( !( __global_this_access_key__ in {} ) ) {
				try { __\u5168\u5C40_\u5BF9\u8C61_\u8BBF\u95EE_\u952E\u540D__; }
				catch (error) {
					var d = Object.create(import NULL from '.null.prototype');
					d.get = function () { return this; };
					d.configurable = true;
					try {
						Object.defineProperty(Object.prototype, __global_this_access_key__, d);// catch !extensible Object.prototype || !configurable globalObject get throw
						try { return __\u5168\u5C40_\u5BF9\u8C61_\u8BBF\u95EE_\u952E\u540D__; }// IE11+ (IE10-: window !instanceof Object)
						finally { delete Object.prototype[__global_this_access_key__]; }
					}
					catch (error) { }
				}
			}
			*/
			
			//throw error;
			
		}
		
	}()
	/*¡ j-globals: globalThis (polyfill) */
);