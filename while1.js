// Indefinite Loop
// In Indefinite loops, the number of iterations is not known before beginning the execution of the block of statements. There are two indefinite loops:
// while loop
// do-while loop
var no = 4;
var factorial = 1;
while (no >= 1) {
    factorial = factorial * no;
    no--;
}
console.log("The factorial of the given number is: " + factorial);
