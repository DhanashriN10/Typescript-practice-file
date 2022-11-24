//multi type variable

function displayDataType<T, U>(id:T, name:U): void 
{   
    console.log("DataType of Id: "+typeof(id) + "\nDataType of Name: "+ typeof(name));    
  }  

  displayDataType<number, string>(101, "Abhishek");  
  
//   let file=<number, string>(101, "Abhishek");  
//   console.log(displayDataType)