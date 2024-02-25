// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function make_sandwich(...items: string[]): void {
//     console.log("Sandwich order:");
//     for (let i = 0; i < items.length; i++) {
//       console.log(`- ${items[i]}`);
//     }
//     console.log("\n");
//   }
//   make_sandwich('Cabbage', 'carrot', 'tomato');
//   make_sandwich('cheese', 'mayo' , 'lettuce');
//   make_sandwich('turkey', 'cucumber');
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order summary:");
    items.forEach(function (item) {
        console.log(item);
    });
    console.log("\n");
}
make_sandwich('Cabbage', 'carrot', 'tomato');
make_sandwich('cheese', 'mayo', 'lettuce');
make_sandwich('turkey', 'cucumber');
