//default parameter
function displayName(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
console.log(displayName('JavaTpoint'));
console.log(displayName('JavaTpoint', 'Hi'));
console.log(displayName('Sachin'));
