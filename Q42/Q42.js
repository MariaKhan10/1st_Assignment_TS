// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}
var magicians2 = ["Ricky jay", "Derren brown", "Teller", "Criss angel"];
make_great(magicians2);
show_magicians(magicians2);
// Alternate
//   function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// function make_great(magicians: string[]): string[] {
//     return magicians.map(magician => `the Great ${magician}`);
// }
// let magiciansArray: string[] = ["Ricky jay", "Derren brown", "Teller", "Criss angel"];
// let greatMagiciansArray: string[] = make_great(magiciansArray);
// show_magicians(greatMagiciansArray);
