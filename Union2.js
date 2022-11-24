//
function show(value) {
    if (typeof (value) === "number") {
        console.log('The given value is of type number.');
    }
    else if (typeof (value) === "string") {
        console.log("The given value is of type string.");
    }
}
show(123);
show("ABC");
