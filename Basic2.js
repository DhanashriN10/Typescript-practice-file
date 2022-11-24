//Number Data Type
var first = 12.0; // number   
var second = 0x37CF; // hexadecimal  
var third = 255; // octal  
var fourth = 57; // binary   
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
//String Data Type
var empName = "Rohan";
var empDept = "IT";
// Before-ES6  
var output1 = empName + " works in the " + empDept + " department.";
// After-ES6  
var output2 = "".concat(empName, " works in the ").concat(empDept, " department.");
console.log(output1); //Rohan works in the IT department.   
console.log(output2); //Rohan works in the IT department.  
