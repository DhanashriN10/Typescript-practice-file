var dice = new Set();
dice.add(1).add(2).add(3).add(4).add(5).add(6);
console.log("Dice Entries are:");
for (var _i = 0, dice_1 = dice; _i < dice_1.length; _i++) {
    var diceNumber = dice_1[_i];
    console.log(diceNumber);
}
console.log("Dice Entries with forEach are:");
dice.forEach(function (value) {
    console.log(value);
});
