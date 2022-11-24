//for_of vs for_in

let myArray = [10, 20, 30, 40, 50,];  

console.log("Output of for..in loop "); 

for (let index in myArray)
 {  
   console.log(index);  
}  

console.log("Output of for..of loop "); 
 
for (let val of myArray) 
{  
   console.log(val);  
}  