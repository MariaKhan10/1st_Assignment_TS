// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var favoriteCities = ["Dubai", "Italy", "Skardu", "Swat", "NewYork"];
favoriteCities.forEach(function (city, index) {
    console.log("City ".concat(index + 1, ": ").concat(city));
});
