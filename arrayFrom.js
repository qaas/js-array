/*
  The Array.from() method creates a new, shallow-copied Array instance
  from an array-like [objects with a length property and indexed elements] or an
  iterable object [map and set].

  Syntax :: Array.from(arrayLike[, mapFn[, thisArg]])

    - mapFN   : optional : execute a map function on each element of the array
    - thisArg : optional : value to use as *this* when executing mapFn

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 */

let arrayFromString = Array.from('King George')
console.log(arrayFromString) // [ 'K', 'i', 'n', 'g', ' ', 'G', 'e', 'o', 'r', 'g', 'e' ]

let arrayFromSet = Array.from(new Set(['Tarzan', 'Jane']))
console.log(arrayFromSet) // [ 'Tarzan', 'Jane' ]

let arrayFromMap = Array.from(new Map([[1, 2], [2, 3], [3, 4]]))
console.log(arrayFromMap) // [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ]

let mapper = new Map([[1, 'a'], [2, 'b']])
console.log(Array.from(mapper.keys()))    // [ 1, 2 ] -- note that the key can be a number or a string
console.log(Array.from(mapper.values()))  // [ 'a', 'b' ]

/*
  Something that I found quite strange when I first saw this.
  Looking into lib.es5.d.ts the way how is implemented is :

    interface ArrayLike<T> {
      readonly length: number;
      readonly [n: number]: T;
    }

  accepting a length parameter which will generate an array of the given length having each element as
  undefined

 */

let arraySequence = Array.from({length: 5})
console.log(arraySequence)  // [ undefined, undefined, undefined, undefined, undefined ]

/*
  Using the optional mapping function, we iterate over the generated array,
  replacing undefined with the current index i
 */

let arraySequenceMap = Array.from({length: 5}, function (v, i) {
  console.log('value of v', v, 'value of i', i)
  /*
    value of v undefined value of i 0
    value of v undefined value of i 1
    value of v undefined value of i 2
    value of v undefined value of i 3
    value of v undefined value of i 4
   */

  return i
})
console.log(arraySequenceMap) // [ 0, 1, 2, 3, 4 ]
