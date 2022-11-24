class Student1 
{  
    public studCode: number;  
    private studName: string;  
    constructor(code: number, name: string){  
    this.studCode = code;  
    this.studName = name;  
    }  
    public disp() {  
    return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);  
    }  
    }  
      
    let student: Student1 = new Student1(1, "JoeRoot");  
    console.log(student.disp());  
    