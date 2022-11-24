let dice = new Set();  
  
dice.add(1).add(2).add(3).add(4).add(5).add(6);  
   
console.log("Dice Entries are:");

for (let diceNumber of dice)
{  
    console.log(diceNumber);   
}  
   

console.log("Dice Entries with forEach are:");  

dice.forEach(function(value)
{  
  console.log(value);     
});  