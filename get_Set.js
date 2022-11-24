var passcode = "secret passcode";
var Student3 = /** @class */ (function () {
    function Student3() {
    }
    Object.defineProperty(Student3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Unauthorized update of student detail!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Student3;
}());
var stude = new Student3();
stude.fullName = "Virat Kohli";
if (stude.fullName) {
    console.log(stude.fullName);
}
