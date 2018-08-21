/*
    Array.isArray() method determines whether the value passed is an array
    It returns a boolean [true, false]

    Other function implementation to check if a value is an array
      function isArray (value) {
        return value && typeof value === 'object' && value.constructor === Array;
      }

    Reference:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

 */

// all following calls return true
Array.isArray([])
Array.isArray([1])
Array.isArray(new Array())
Array.isArray(new Array('a', 'b', 'c', 'd'))
Array.isArray(new Array(3))
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype)
