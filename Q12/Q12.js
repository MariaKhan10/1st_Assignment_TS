// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Aqsa", "Namra", "Maria", "Naheed", "jannat"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ",would you like to learn some Typescript Today?"));
}
// Alternate Way
// let names : string [] = ["Aqsa", "Namra", "Maria", "Naheed", "jannat"];
// let message : string = "Have a nice day";
// console.log("Hello" ,names[0] + " " + message);
// console.log("Hello" ,names[1] + " " + message);
// console.log("Hello" ,names[2] + " " + message);
// console.log("Hello" ,names[3] + " " + message);
// console.log("Hello" ,names[4] + " " + message);
