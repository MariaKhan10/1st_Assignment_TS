// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestArr = ["Namra", "Aqsa", "Naheed"];
var canNotAttend = "Aqsa";
console.log(canNotAttend + " " + "can not make it for Dinner");
var newGuest = "Maryam";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
guestArr.map(function (guest) { return (console.log("Dear ".concat(guest, " , It is hereby to inform you that i have found a bigger dinner table!"))); });
// Add one new guest at beggining
var guestBeginning = "Jannat";
guestArr.unshift(guestBeginning);
console.log(guestArr);
// Add one new guest at middle of array
var middleGuest = "Maha";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// Add one new guest at the end of list
guestArr.push("Iqra");
console.log(guestArr);
// Print a new set of invitation messages, one for each person in your list.
guestArr.map(function (guest) {
    return console.log("Dear ".concat(guest, ", You are cordially invited to a dinner party at my place."));
});
