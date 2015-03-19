#Bitmask.js
A small package to convert integers to bit arrays and back, with some utilities

##Installation
Install with `bower install bitmask`, then add the `bitmask.min.js` script to your page. You can also `require` it if you're using [requirejs](http://www.requirejs.org).

If you're using NodeJS, you can install it using `npm install bitmaskjs` (note that the package name is `bitmaskjs`, not `bitmask`). You can then `require` it as usual.

##Usage
Create a Bitmask object by passing either an integer value or a bit array to the constructor:

```javascript
// Either
var myBitmask = new Bitmask(15);

// Or
var myBitmask = new Bitmask([1,1,1,1])
```

The constructor also accepts a second parameter that allows you to specifiy the padding (the length of the bit array). This value defaults to 8.

At any point you can retrieve the current value in its integer or array form, regardless of how you called the constructor, by using:

```javascript
myBitmask.getInteger() 	// 15
myBitmask.getBits()		// [1,1,1,1,0,0,0,0]
```

##Instance Methods
- `getInteger()` - returns the integer value of the current instance
- `getBits()` - returns the bit array representation of the current instance
- `hasBit(index)` - returns true if the bit at the specified index is set
- `setBit(index, value)` - sets the bit at the specified index to `value` (`true` or `false`)
- `toggleBit(index)` - toggles the bit at the specified index
- `lShift(n)` - shifts the bit array to the left by `n` positions (default is 1)
- `rShift(n)` - shifts the bit array to the right by `n` positions (default is 1)

The following methods are chainable: `setBit`, `toggleBit`, `lShift`, `rShift`. The constructor is chainable as well.

```javascript
new Bitmask(4).lShift(2).rShift(1).setBit(0, true).getInteger() // => 9
```

##Contributing
You can edit the source in `src/bitmask.js` and build it using `grunt`. Remember to do an `npm install` beforehand to install all the dev dependencies!

