import Symbol_iterator from '.Symbol.iterator?';
import undefined from '.undefined';
import TypeError from '.TypeError';
import defineProperty from '.null.defineProperty';
import Object_defineProperty from '.Object.defineProperty';
import of from '.for.of';
import PropertyDescriptor from '.null.PropertyDescriptor';
import { defineIndexValue, createBound } from '.native';
export default (
	/*! j-globals: Set (polyfill) */
	typeof Set==='function' && Set.prototype && /*#__PURE__*/ function () {
		var set = new Set([ -0 ]);
		return set.keys && 1/set.keys().next().value>0 && set.add(0)===set && set.size===1;
	}() ? Set : /*#__PURE__*/ function () { 'use strict';
		
		var DELETED = {};
		
		function Set (values) {
			this.size = 0;
			this._values = [];
			if ( values==null ) { return; }
			var set = this;
			return /*#__PURE__*/ of(values, function (value) { set.add(value); });
		}
		
		function has (value) {
			var _values = this._values;
			var index = _values.length;
			if ( value===value ) { while ( index-- ) { if ( value===_values[index] ) { return true; } } }
			else { while ( index-- ) { if ( _values[index]!==_values[index] ) { return true; } } }
			return false;
		}
		
		function add (value) {
			var _values = this._values;
			var length = _values.length;
			var index = length;
			if ( value===value ) {
				while ( index-- ) {
					if ( value===_values[index] ) {
						_values[index] = value;
						return this;
					}
				}
			}
			else {
				while ( index-- ) {
					if ( _values[index]!==_values[index] ) {
						_values[index] = value;
						return this;
					}
				}
			}
			defineIndexValue(_values, length, value===0 ? 0 : value);
			++this.size;
			return this;
		}
		
		function delete$ (key) {
			var _values = this._values;
			var index = this.length;
			if ( key===key ) {
				while ( index-- ) {
					if ( key===_values[index] ) {
						_values[index] = DELETED;
						--this.size;
						return true;
					}
				}
			}
			else {
				while ( index-- ) {
					if ( _values[index]!==_values[index] ) {
						_values[index] = DELETED;
						--this.size;
						return true;
					}
				}
			}
			return false;
		}
		
		function clear () {
			this.size = 0;
			var _values = this._values;
			var index = _values.length;
			while ( index-- ) { _values[index] = DELETED; }
		}
		
		function entries () { return new SetIterator(this, 'entries'); }
		
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
			for ( var _values = this._values, index = 0; index<_values.length; ++index ) {
				var value = _values[index];
				value===DELETED || callback(value, value, this);
			}
		}
		
		function size () { throw TypeError('Method get Set.prototype.size called on incompatible receiver #<Set>'); }
		
		function values () { return new SetIterator(this, 'values'); }
		
		function keys () { return new SetIterator(this, 'keys'); }
		
		if ( defineProperty ) {
			defineProperty(Set, 'prototype', { configurable: false, enumerable: false, writable: false, value: Set.prototype });
			defineProperty(Set.prototype, 'constructor', { configurable: true, enumerable: false, writable: true, value: Set });
			defineProperty(Set.prototype, 'has', { configurable: true, enumerable: false, writable: true, value: has });
			defineProperty(Set.prototype, 'add', { configurable: true, enumerable: false, writable: true, value: add });
			defineProperty(Set.prototype, 'delete', { configurable: true, enumerable: false, writable: true, value: delete$ });
			defineProperty(Set.prototype, 'clear', { configurable: true, enumerable: false, writable: true, value: clear });
			defineProperty(Set.prototype, 'entries', { configurable: true, enumerable: false, writable: true, value: entries });
			defineProperty(Set.prototype, 'forEach', { configurable: true, enumerable: false, writable: true, value: forEach });
			var SIZE = PropertyDescriptor(0, true, false, false);
			defineProperty(Set.prototype, 'size', { configurable: true, enumerable: false, get: size, set: function size (value) { Object_defineProperty(this, 'size', SIZE); } });
			defineProperty(Set.prototype, 'values', { configurable: true, enumerable: false, writable: true, value: values });
			defineProperty(Set.prototype, 'keys', { configurable: true, enumerable: false, writable: true, value: keys });
			defineProperty(Set.prototype, 'toString', { configurable: true, enumerable: false, writable: true, value: function toString () { return '[object Set]'; } });
			defineProperty(Set.prototype, '_values', {
				configurable: false, enumerable: false, get: undefined,
				set: function _values (value) { Object_defineProperty(this, '_values', PropertyDescriptor(value, false, false, false)); }
			});
			if ( Symbol_iterator!==undefined ) {
				defineProperty(Set.prototype, Symbol_iterator, { configurable: true, enumerable: false, writable: true, value: values });
			}
		}
		
		else {
			var Size = Object(0/0);
			Size.valueOf = Size.toString = size;
			Set.prototype = {
				constructor: Set,
				has: has,
				add: add,
				'delete': delete$,
				clear: clear,
				entries: entries,
				forEach: forEach,
				size: Size,
				values: values,
				keys: keys,
				toString: function toString () { return '[object Set]'; },
				_values: []
			};
			if ( Symbol_iterator!==undefined ) { Set.prototype[Symbol_iterator] = values; }
		}
		
		function SetIterator (set, kind) {
			this._index = 0;
			this._kind = kind;
			this._values = set._values;
		}
		
		SetIterator.prototype = {
			
			constructor: SetIterator,
			
			next: function next () {
				var _index = this._index;
				var _values = this._values;
				var length = _values.length;
				if ( _index<length ) {
					do {
						var value = _values[_index++];
						if ( value===DELETED ) { continue; }
						this._index = _index;
						return {
							value:
								this._kind==='entries'
									? [value, value]
									: value,
							done: false
						};
					}
					while ( _index<length );
					this._index = _index;
				}
				return { value: undefined, done: true };
			},
			
			toString: function toString () { return '[object Set Iterator]'; }
			
		};
		
		if ( Symbol_iterator!==undefined ) {
			SetIterator.prototype[Symbol_iterator] = function iterator () { return this; };
		}
		
		return Set;
		
	}()
	/*¡ j-globals: Set (polyfill) */
);