;(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('bitmask', [], function() {
			root.Bitmask = factory();
		});
	} else if (typeof exports !== 'undefined') {
		module.exports = factory();
	} else {
		root.Bitmask = factory();
	}
})(this, function() {
	var _integer, _bits, _padding;

	var integerToArray = function( integer, padding ) {
		var bits = [];

		while( integer !== 0 ) {
			bits.push( integer & 1 );
			integer = integer >> 1;

			padding--;
		}

		while( padding-- > 0 ) {
			bits.push(0);
		}

		return bits;
	}

	var arrayToInteger = function ( array ) {
		return array.reduce(function(p, c, i) { return p + Math.pow(2, i) * c; });
	}

	var Bitmask = function( value, padding ) {
		_padding = padding || 8;
		if (value.constructor === Number || value.constructor === String) {
			_integer = parseInt(value);
			_bits = integerToArray(_integer, _padding);
		} else if (value.constructor === Array) {
			_bits = value.map(function(el) { return parseInt(el) & 1 });
			_integer = arrayToInteger(_bits);
		} else {
			throw "Constructor needs either a number or an array o bits";
		}

		return this;
	}
	
	Bitmask.prototype.getInteger = function() {
		return _integer;
	}

	Bitmask.prototype.getBits = function() {
		return _bits;
	}

	Bitmask.prototype.hasBit = function ( bit ) {
		return _bits[bit] & 1;
	}

	Bitmask.prototype.setBit = function ( bit, status ) {
		status = status === true ? 1 : 0;
		_bits[bit] = status;
		_integer = arrayToInteger(_bits);

		return this;
	}

	Bitmask.prototype.toggleBit = function ( bit ) {
		status = !(this.hasBit(bit));
		this.setBit(bit, status);

		return this;
	}

	Bitmask.prototype.rShift = function(positions) {
		positions = positions || 1;

		_integer = _integer >> positions;
		_bits = integerToArray(_integer, _padding);

		return this;
	}

	Bitmask.prototype.lShift = function(positions) {
		positions = positions || 1;

		_integer = _integer << positions;
		_bits = integerToArray(_integer, _padding);

		return this;
	}

	return Bitmask;
});