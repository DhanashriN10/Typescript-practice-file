var Student4 = /** @class */ (function () {
    function Student4() {
    }
    Student4.prototype.display = function () {
        console.log("Student ID is: " + this.id);
        console.log("Student ID is: " + this.name);
    };
    return Student4;
}());
var ob = new Student4();
ob.id = 101;
ob.name = "Virat Kohli";
ob.display();
