//default parameter

function displayName(name: string, greeting: string = "Hello") : string
 {  
    return greeting + ' ' + name + '!';  
}  

console.log(displayName('JavaTpoint'));   

console.log(displayName('JavaTpoint', 'Hi'));  

console.log(displayName('Sachin'));    