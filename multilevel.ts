class Animal 
{   
    eat():void
     {   
        console.log("Eating")   
     }   
}   
class Dog extends Animal
 {   
   bark():void 
   {   
      console.log("Barking")   
   }   
}  
class BabyDog extends Dog
{   
    weep():void 
    {   
        console.log("Weeping")   
     }  
}  

let ani = new BabyDog();   

ani.eat();  
ani.bark();  
ani.weep()  