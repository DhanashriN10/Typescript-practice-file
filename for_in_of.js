//for_of vs for_in
var myArray = [10, 20, 30, 40, 50,];
console.log("Output of for..in loop ");
for (var index in myArray) {
    console.log(index);
}
console.log("Output of for..of loop ");
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var val = myArray_1[_i];
    console.log(val);
}
