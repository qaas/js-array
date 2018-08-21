/*



  Reference
  https://gist.github.com/rwaldron/1074126
 */


/*
  Array.of vs the existing behaviour of new Array()
 */
Array.of( 10 );
// [ 10 ]

new Array( 10 );
// [ , , , , , , , , , , ]