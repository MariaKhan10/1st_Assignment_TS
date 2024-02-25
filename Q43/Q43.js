// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// function make_great(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for (let i = 0; i < magicians.length; i++) {
//       greatMagicians.push(magicians[i] + ' the Great');
//     }
//     return greatMagicians;
//   }
//   const magicians: string[] = ["Ricky jay", "Derren brown", "Teller", "Criss angel"];
//   const greatMagicians: string[] = make_great(magicians);
//   show_magicians(magicians);
//   show_magicians(greatMagicians);
// Alternate 
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magiciansArray = ["Ricky jay", "Derren brown", "Teller", "Criss angel"];
var greatMagiciansArray = make_great(__spreadArray([], magiciansArray, true));
show_magicians(magiciansArray);
console.log("\n");
show_magicians(greatMagiciansArray);
