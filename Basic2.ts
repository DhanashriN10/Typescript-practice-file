
//Number Data Type

let first: number = 12.0;             // number   
let second: number = 0x37CF;          // hexadecimal  
let third: number = 0o377 ;           // octal  
let fourth: number = 0b111001;        // binary   
  
console.log(first);            
console.log(second);           
console.log(third);             
console.log(fourth);            

//String Data Type

let empName: string = "Rohan";   
let empDept: string = "IT";   
  
// Before-ES6  
let output1: string = empName + " works in the " + empDept + " department.";   
  
// After-ES6  
let output2: string = `${empName} works in the ${empDept} department.`;   
  
console.log(output1);   
console.log(output2);
