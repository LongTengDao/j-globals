import Symbol_iterator from '.Symbol.iterator?';
import undefined from '.undefined';
import TypeError from '.TypeError';
import of from '.for.of';
import PropertyDescriptor from '.null.PropertyDescriptor';
import { defineIndexValue, createBound } from '.native';
import NaN from '.NaN';
export default (
	/*! j-globals: Set (polyfill) */
	typeof Set==='function' && Set.prototype && /*#__PURE__*/ function () {
		var set = new Set;
		return set.keys && set.add(-0)===set && 1/set.keys().next().value>0;
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
		
		function SetIterator (set, kind) {
			this._index = 0;
			this._kind = kind;
			this._values = set._values;
		}
		
		function next () {
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
		}
		
		if ( Object.create ) {
			var Object_defineProperty = Object.defineProperty;
			
			var prototype = Set.prototype;
			Object_defineProperty(Set, 'prototype', PropertyDescriptor(prototype, false, false, false));
			//Object_defineProperty(prototype, 'constructor', PropertyDescriptor(Set, true, false, true));
			Object_defineProperty(prototype, 'has', PropertyDescriptor(has, true, false, true));
			Object_defineProperty(prototype, 'add', PropertyDescriptor(add, true, false, true));
			Object_defineProperty(prototype, 'delete', PropertyDescriptor(delete$, true, false, true));
			Object_defineProperty(prototype, 'clear', PropertyDescriptor(clear, true, false, true));
			Object_defineProperty(prototype, 'entries', PropertyDescriptor(entries, true, false, true));
			Object_defineProperty(prototype, 'forEach', PropertyDescriptor(forEach, true, false, true));
			var SIZE = PropertyDescriptor(0, true, false, false);
			Object_defineProperty(prototype, 'size', PropertyDescriptor(size, function size (value) { Object_defineProperty(this, 'size', SIZE); }, false, true));
			Object_defineProperty(prototype, 'values', PropertyDescriptor(values, true, false, true));
			Object_defineProperty(prototype, 'keys', PropertyDescriptor(keys, true, false, true));
			Object_defineProperty(prototype, 'toString', PropertyDescriptor(function () { return '[object Set]'; }, true, false, true));
			Object_defineProperty(prototype, '_values', PropertyDescriptor(undefined, function _values (value) { Object_defineProperty(this, '_values', PropertyDescriptor(value, false, false, false)); }, false, false));
			
			prototype = SetIterator.prototype;
			Object_defineProperty(SetIterator, 'prototype', PropertyDescriptor(prototype, false, false, false));
			//Object_defineProperty(prototype, 'constructor', PropertyDescriptor(SetIterator, true, false, true));
			Object_defineProperty(prototype, 'next', PropertyDescriptor(next, true, false, true));
			Object_defineProperty(prototype, 'toString', PropertyDescriptor(function () { return '[object Set Iterator]'; }, true, false, true));
			
			if ( Symbol_iterator!==undefined ) {
				Object_defineProperty(Set.prototype, Symbol_iterator, PropertyDescriptor(values, true, false, true));
				Object_defineProperty(prototype, Symbol_iterator, PropertyDescriptor(function () { return this; }, true, false, true));
			}
		}
		else {
			var Size = Object(NaN);
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
				toString: function () { return '[object Set]'; },
				_values: []
			};
			
			SetIterator.prototype = {
				constructor: SetIterator,
				next: next,
				toString: function () { return '[object Set Iterator]'; }
			};
			
			if ( Symbol_iterator!==undefined ) {
				Set.prototype[Symbol_iterator] = values;
				SetIterator.prototype[Symbol_iterator] = function () { return this; };
			}
		}
		
		return Set;
		
	}()
	/*¡ j-globals: Set (polyfill) */
);