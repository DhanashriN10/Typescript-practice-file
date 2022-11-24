// This loop iterates through a list or collection and returns an index on each iteration. 
var str = "JavaTpoint";
for (var index in str) {
    console.log("Index of ".concat(str[index], ": ").concat(index));
}
