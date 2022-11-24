//Passing Tuple to Functions

let t6 = ["JavaTpoint", 101, "Abhishek"];     
    
function displaytuple(tuple_values:any[]) 
{    
   for(let i = 0 ; i< t6.length ; i++)
    {     
      console.log(t6[i]);    
   }      
}    
    
displaytuple(t6);  