//Passing arrays to functions
var x = new Array("JavaTpoint", "2300", "Java", "Abhishek");
function display(arr_values) {
    for (var i = 0; i < arr_values.length; i++) {
        console.log(x[i]);
    }
}
display(x);
