// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("The Size Of Your Shirt is ".concat(size, ", with a message ").concat(message, " printed on it"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Nice Shirt");
