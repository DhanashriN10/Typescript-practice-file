// enum Direction {  
//     Up = 1,  
//     Down,  
//     Left,  
//     Right,  
// }  
// console.log(Direction);  
// enum Direction {  
//     Up,  
//     Down,  
//     Left,  
//     Right,  
// }  
// console.log(Direction);  
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Left"] = 6] = "Left";
    Direction[Direction["Right"] = 10] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
