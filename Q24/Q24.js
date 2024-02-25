// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
var string1 = "Sunday";
var string2 = "Monday";
console.log(string1 === string2);
console.log(string1 !== string2);
// • Tests using the lower case function
var str1 = "SUNDAY";
var str2 = "sunday";
// Testing equality after converting to lowercase
console.log(str1.toLowerCase() === str2.toLowerCase());
// Testing inequality after converting to lowercase
console.log(str1.toLowerCase() !== str2.toLowerCase());
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 20;
var num2 = 30;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
var a = 10;
var result1 = (a < 10 && a > 5);
console.log(result1);
var b = 6;
var result2 = (b < 10 && b > 5);
console.log(result2);
var c = 10;
var result = (c > 5 || c < 10);
console.log(result);
var d = 20;
var result = (d > 30 || d < 10);
console.log(result);
// • Test whether an item is in a array
var Items = ["Laptop", "Mouse", "Charger", "USB", "Cable"];
console.log(Items.includes("Mouse"));
// • Test whether an item is not in a array
var Fruits = ["Grapes", "Banana", "Apple", "Mango"];
console.log(Items.includes("Orange"));
