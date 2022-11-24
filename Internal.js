// Internal Module Syntax in Earlier Version:
var Sum;
(function (Sum) {
    function add(a, b) {
        console.log("Sum: " + (a + b));
    }
    Sum.add = add;
})(Sum || (Sum = {}));
// Internal Module Syntax from ECMAScript 2015:
var Summation;
(function (Summation) {
    function additiion(m, n) {
        console.log("Sum No.: " + (m + n));
    }
    Summation.additiion = additiion;
})(Summation || (Summation = {}));
