// Seeing the World: Think of at least five places in the world you’d like to visit.
// 1• Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 2• Print your array in its original order.
// 3• Print your array in alphabetical order without modifying the actual list.
// 4• Show that your array is still in its original order by printing it.
// 5• Print your array in reverse alphabetical order without changing the order of the original list.
// 6• Show that your array is still in its original order by printing it again.
// 7• Reverse the order of your list. Print the array to show that its order has changed.
// 8• Reverse the order of your list again. Print the list to show it’s back to its original order.
// 9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
// 1• Store the locations in a array. Make sure the array is not in alphabetical order.
var placestoVisit = ["Dubai", "China", "Qatar", "Skardu", "NewYork"];
//2• Print array in its original order
console.log("Original Order:", __spreadArray([], placestoVisit, true));
//3• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", __spreadArray([], placestoVisit, true).sort());
//4 - Show that your array is still in its original order by printing it.
console.log("Still in original order:", placestoVisit);
// 5• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", __spreadArray([], placestoVisit, true).sort().reverse());
// 6• Show that your array is still in its original order by printing it again.
console.log("Still in original order:", placestoVisit);
//7• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse:", placestoVisit.reverse());
//8• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse Again:", placestoVisit.reverse());
// 9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort in alphabetical order:", placestoVisit.sort());
// 10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("Sort in reverse alphabetical order:", placestoVisit.reverse());
