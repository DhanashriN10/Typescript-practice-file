// TypeScript Definite Loop
// In this loop, we know about the number of iterations before the execution of the block of statements. A "for loop" is the best example of this loop. Here, we are going to discuss three types of the loop:
// for loop
// for..of loop
// for..in loop
// 1) for..of loop
// The for..of loop is used to iterate and access the elements of an array, string, set, map, list, or tuple collection.
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
