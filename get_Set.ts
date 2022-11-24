let passcode = "secret passcode";  
  
class Student3
 {  
    private _fullName: string;  
  
    get fullName(): string
     {  
        return this._fullName;  
    }  
  
    set fullName(newName: string) 
    {  
        if (passcode && passcode == "secret passcode")
         {  
            this._fullName = newName;  
        }  
        else 
        {  
            console.log("Unauthorized update of student detail!");  
        }  
    }  
}  
  
let stude = new Student3();  
stude.fullName = "Virat Kohli";  
if (stude.fullName) 
{  
    console.log(stude.fullName);  
}  