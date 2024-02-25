// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "mArIa kHaN";
console.log("Name in Lower Case:", personName.toLowerCase());
console.log("Name in Upper Case:", personName.toUpperCase());
// function toTitleCase(str: string): string {
//     return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
// let titleCaseString = toTitleCase(personName);
// console.log("Name in Title Case:",titleCaseString);
function toTitleCase(str) {
    return (personName.split(' ')).map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
}
var titleCaseString = toTitleCase(personName);
console.log("Name in Title Case:", titleCaseString);
