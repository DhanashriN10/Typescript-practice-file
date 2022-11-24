class Student4 {   
    
    id: number;  
    name:string;  
  
      
    display():void 
    {   
        console.log("Student ID is: "+this.id)   
        console.log("Student ID is: "+this.name)   
    }   
}   
  
  
let ob = new Student4();  
ob.id = 101;  
ob.name = "Virat Kohli";  
ob.display();  