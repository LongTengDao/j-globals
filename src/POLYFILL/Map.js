import Symbol_iterator from '.Symbol.iterator?';
import undefined from '.undefined';
import TypeError from '.TypeError';
import of from '.for.of';
import PropertyDescriptor from '.null.PropertyDescriptor';
import { defineIndexValue, createBound } from '.native';
import NaN from '.NaN';
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
		
		function MapIterator (set, kind) {
			this._index = 0;
			this._kind = kind;
			this._keys = set._keys;
			this._values = set._values;
		}
		
		function next () {
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
		}
		
		if ( Object.create ) {
			var Object_defineProperty = Object.defineProperty;
			
			var prototype = Map.prototype;
			Object_defineProperty(Map, 'prototype', PropertyDescriptor(prototype, false, false, false));
			//Object_defineProperty(prototype, 'constructor', PropertyDescriptor(Map, true, false, true));
			Object_defineProperty(prototype, 'get', PropertyDescriptor(get, true, false, true));
			Object_defineProperty(prototype, 'set', PropertyDescriptor(set, true, false, true));
			Object_defineProperty(prototype, 'has', PropertyDescriptor(has, true, false, true));
			Object_defineProperty(prototype, 'delete', PropertyDescriptor(delete$, true, false, true));
			Object_defineProperty(prototype, 'clear', PropertyDescriptor(clear, true, false, true));
			Object_defineProperty(prototype, 'entries', PropertyDescriptor(entries, true, false, true));
			Object_defineProperty(prototype, 'forEach', PropertyDescriptor(forEach, true, false, true));
			Object_defineProperty(prototype, 'keys', PropertyDescriptor(keys, true, false, true));
			var SIZE = PropertyDescriptor(0, true, false, false);
			Object_defineProperty(prototype, 'size', PropertyDescriptor(size, function size (value) { Object_defineProperty(this, 'size', SIZE); }, false, true));
			Object_defineProperty(prototype, 'values', PropertyDescriptor(values, true, false, true));
			Object_defineProperty(prototype, 'toString', PropertyDescriptor(function () { return '[object Map]'; }, true, false, true));
			Object_defineProperty(prototype, '_keys', PropertyDescriptor(undefined, function _keys (value) { Object_defineProperty(this, '_keys', PropertyDescriptor(value, false, false, false)); }, false, false));
			Object_defineProperty(prototype, '_values', PropertyDescriptor(undefined, function _values (value) { Object_defineProperty(this, '_values', PropertyDescriptor(value, false, false, false)); }, false, false));
			
			prototype = MapIterator.prototype;
			Object_defineProperty(MapIterator, 'prototype', PropertyDescriptor(prototype, false, false, false));
			//Object_defineProperty(prototype, 'constructor', PropertyDescriptor(MapIterator, true, false, true));
			Object_defineProperty(prototype, 'next', PropertyDescriptor(next, true, false, true));
			Object_defineProperty(prototype, 'toString', PropertyDescriptor(function () { return '[object Map]'; }, true, false, true));
			
			if ( Symbol_iterator!==undefined ) {
				Object_defineProperty(Map.prototype, Symbol_iterator, PropertyDescriptor(entries, true, false, true));
				Object_defineProperty(prototype, Symbol_iterator, PropertyDescriptor(function () { return this; }, true, false, true));
			}
		}
		else {
			var Size = Object(NaN);
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
				toString: function () { return '[object Map]'; },
				_keys: [],
				_values: []
			};
			
			MapIterator.prototype = {
				constructor: MapIterator,
				next: next,
				toString: function () { return '[object Map Iterator]'; }
			};
			
			if ( Symbol_iterator!==undefined ) {
				Map.prototype[Symbol_iterator] = entries;
				MapIterator.prototype[Symbol_iterator] = function () { return this; };
			}
		}
		
		return Map;
		
	}()
	/*¡ j-globals: Map (polyfill) */
);