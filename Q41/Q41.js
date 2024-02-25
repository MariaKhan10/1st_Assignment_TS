// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function show_magicians(magicians: string[]) : void {
//     magicians.forEach(magician => {
//         console.log(magician);
// });
// }
// let magicians : string[] = ["Ricky jay", "Derren brown", "Teller", "Criss angel"];
// show_magicians(magicians);
// function show_magicians(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//       console.log(magicians[i]);
//     }
//   }
//   const magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
//   show_magicians(magicians);
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magicians);
    }
}
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
show_magicians(magicians);
