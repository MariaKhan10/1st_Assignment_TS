// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



let personName : string = "mArIa kHaN"

console.log("Name in Lower Case:",personName.toLowerCase());
console.log("Name in Upper Case:",personName.toUpperCase());



function toTitleCase(str: string): string {
    return (personName.split(' ')).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');}

let titleCaseString = toTitleCase(personName);

console.log("Name in Title Case:",titleCaseString);