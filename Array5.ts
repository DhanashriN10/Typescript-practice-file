//Passing arrays to functions


let x:string[] = new Array("JavaTpoint", "2300", "Java", "Abhishek");   

function display(arr_values : string[]) 
{  
   for(let i = 0 ; i < arr_values.length ; i++) 
   {   
      console.log(x[i]);  
   }    
}  
  
display(x);  