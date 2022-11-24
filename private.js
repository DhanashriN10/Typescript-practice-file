var Student1 = /** @class */ (function () {
    function Student1(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Student1.prototype.disp = function () {
        return ("My unique code: ".concat(this.studCode, ", my name: ").concat(this.studName, "."));
    };
    return Student1;
}());
var student = new Student1(1, "JoeRoot");
console.log(student.disp());
