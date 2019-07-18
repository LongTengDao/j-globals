import Symbol_iterator from '.Symbol.iterator?';
import undefined from '.undefined';
import TypeError from '.TypeError';
import defineProperty from '.null.defineProperty';
import Object_defineProperty from '.Object.defineProperty';
import of from '.for.of';
import PropertyDescriptor from '.null.PropertyDescriptor';
import { defineIndexValue, createBound } from '.native';
export default (
	/*! j-globals: Map (polyfill) */
	typeof Map==='function' && Map.prototype && /*#__PURE__*/ function () {
		var map = new Map;
		return map.keys && map.set(-0, 0)===map && 1/map.keys().next().value>0;
	}() ? Map : /*#__PURE__*/ function () { 'use strict';
		
		var DELETED = {};
		
		function Map (entries) {
			this.size = 0;
			this._keys = [];
			this._values = [];
			if ( entries==null ) { return; }
			var map = this;
			return /*#__PURE__*/ of(entries, function (entry) {
				if ( typeof entry!=='object' && typeof entry!=='function' || entry===null ) { throw TypeError('Iterator value '+( entry && entry.toString() )+' is not an entry object'); }
				map.set(entry[0], entry[1]);
			});
		}
		
		function get (key) {
			var _keys = this._keys;
			var index = _keys.length;
			if ( key===key ) { while ( index-- ) { if ( key===_keys[index] ) { return this._values[index]; } } }
			else { while ( index-- ) { if ( _keys[index]!==_keys[index] ) { return this._values[index]; } } }
		}
		
		function set (key, value) {
			var _keys = this._keys;
			var length = _keys.length;
			var index = length;
			if ( key===key ) {
				while ( index-- ) {
					if ( key===_keys[index] ) {
						this._values[index] = value;
						return this;
					}
				}
			}
			else {
				while ( index-- ) {
					if ( _keys[index]!==_keys[index] ) {
						this._values[index] = value;
						return this;
					}
				}
			}
			defineIndexValue(_keys, length, key===0 ? 0 : key);
			defineIndexValue(this._values, length, value);
			++this.size;
			return this;
		}
		
		function has (key) {
			var _keys = this._keys;
			var index = _keys.length;
			if ( key===key ) { while ( index-- ) { if ( key===_keys[index] ) { return true; } } }
			else { while ( index-- ) { if ( _keys[index]!==_keys[index] ) { return true; } } }
			return false;
		}
		
		function delete$ (key) {
			var _keys = this._keys;
			var index = _keys.length;
			if ( key===key ) {
				while ( index-- ) {
					if ( key===_keys[index] ) {
						_keys[index] = DELETED;
						this._values[index] = DELETED;
						--this.size;
						return true;
					}
				}
			}
			else {
				while ( index-- ) {
					if ( _keys[index]!==_keys[index] ) {
						_keys[index] = DELETED;
						this._values[index] = DELETED;
						--this.size;
						return true;
					}
				}
			}
			return false;
		}
		
		function clear () {
			this.size = 0;
			var _keys = this._keys;
			var _values = this._values;
			var index = _keys.length;
			while ( index-- ) {
				_keys[index] = DELETED;
				_values[index] = DELETED;
			}
		}
		
		function entries () { return new MapIterator(this, 'entries'); }
		
		function forEach (callback/*, thisArg*/) {
			switch ( typeof callback ) {
				case 'function':
					break;
				case 'undefined':
					throw TypeError('undefined is not a function');
				case 'string':
					throw TypeError('string "'+callback+'" is not a function');
				case 'number':
					throw TypeError('number '+callback+' is not a function');
				case 'boolean':
					throw TypeError('boolean '+callback+' is not a function');
				case 'object':
					throw TypeError('object '+( callback ? '' : 'null ' )+'is not a function');
				default:
					throw TypeError(typeof callback+' is not a function');
			}
			if ( arguments.length>1 ) { callback = createBound(callback, arguments[1]); }
			for ( var _keys = this._keys, _values = this._values, index = 0; index<_keys.length; ++index ) {
				var key = _keys[index];
				key===DELETED || callback(_values[index], key, this);
			}
		}
		
		function keys () { return new MapIterator(this, 'keys'); }
		
		function size () { throw TypeError('Method get Map.prototype.size called on incompatible receiver #<Map>'); }
		
		function values () { return new MapIterator(this, 'values'); }
		
		if ( Object_defineProperty ) {
			defineProperty(Map, 'prototype', { configurable: false, enumerable: false, writable: false, value: Map.prototype });
			defineProperty(Map.prototype, 'constructor', { configurable: true, enumerable: false, writable: true, value: Map });
			defineProperty(Map.prototype, 'get', { configurable: true, enumerable: false, writable: true, value: get });
			defineProperty(Map.prototype, 'set', { configurable: true, enumerable: false, writable: true, value: set });
			defineProperty(Map.prototype, 'has', { configurable: true, enumerable: false, writable: true, value: has });
			defineProperty(Map.prototype, 'delete', { configurable: true, enumerable: false, writable: true, value: delete$ });
			defineProperty(Map.prototype, 'clear', { configurable: true, enumerable: false, writable: true, value: clear });
			defineProperty(Map.prototype, 'entries', { configurable: true, enumerable: false, writable: true, value: entries });
			defineProperty(Map.prototype, 'forEach', { configurable: true, enumerable: false, writable: true, value: forEach });
			defineProperty(Map.prototype, 'keys', { configurable: true, enumerable: false, writable: true, value: keys });
			var SIZE = PropertyDescriptor(0, true, false, false);
			defineProperty(Map.prototype, 'size', { configurable: true, enumerable: false, get: size, set: function size (value) { Object_defineProperty(this, 'size', SIZE); } });
			defineProperty(Map.prototype, 'values', { configurable: true, enumerable: false, writable: true, value: values });
			defineProperty(Map.prototype, 'toString', { configurable: true, enumerable: false, writable: true, value: function toString () { return '[object Map]'; } });
			defineProperty(Map.prototype, '_keys', {
				configurable: false, enumerable: false, get: undefined,
				set: function _keys (value) { Object_defineProperty(this, '_keys', PropertyDescriptor(value, false, false, false)); }
			});
			defineProperty(Map.prototype, '_values', {
				configurable: false, enumerable: false, get: undefined,
				set: function _values (value) { Object_defineProperty(this, '_values', PropertyDescriptor(value, false, false, false)); }
			});
			if ( Symbol_iterator!==undefined ) {
				defineProperty(Map.prototype, Symbol_iterator, { configurable: true, enumerable: false, writable: true, value: entries });
			}
		}
		else {
			var Size = Object(0/0);
			Size.valueOf = Size.toString = size;
			Map.prototype = {
				constructor: Map,
				get: get,
				set: set,
				has: has,
				'delete': delete$,
				clear: clear,
				entries: entries,
				forEach: forEach,
				keys: keys,
				size: Size,
				values: values,
				toString: function toString () { return '[object Map]'; },
				_keys: [],
				_values: []
			};
			if ( Symbol_iterator!==undefined ) { Map.prototype[Symbol_iterator] = entries; }
		}
		
		function MapIterator (set, kind) {
			this._index = 0;
			this._kind = kind;
			this._keys = set._keys;
			this._values = set._values;
		}
		
		MapIterator.prototype = {
			
			constructor: MapIterator,
			
			next: function next () {
				var _index = this._index;
				var _keys = this._keys;
				var length = _keys.length;
				if ( _index<length ) {
					do {
						var key = _keys[_index];
						if ( key===DELETED ) { continue; }
						this._index = _index+1;
						return {
							value:
								this._kind==='entries' ? [key, this._values[_index]] :
									this._kind==='values' ? this._values[_index] :
										key,
							done: false
						};
					}
					while ( ++_index<length );
					this._index = _index;
				}
				return { value: undefined, done: true };
			},
			
			toString: function toString () { return '[object Map Iterator]'; }
			
		};
		
		if ( Symbol_iterator!==undefined ) {
			MapIterator.prototype[Symbol_iterator] = function iterator () { return this; };
		}
		
		return Map;
		
	}()
	/*¡ j-globals: Map (polyfill) */
);