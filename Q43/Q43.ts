// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}


function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
  }
  
  let magicians: string[] = ["Ricky jay", "Derren brown", "Teller", "Criss angel"];
  let greatMagicians: string[] = make_great(magicians);
  show_magicians(magicians);
  show_magicians(greatMagicians);










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

// let greatMagiciansArray: string[] = make_great([...magiciansArray]);

// show_magicians(magiciansArray);
// console.log("\n");
// show_magicians(greatMagiciansArray);