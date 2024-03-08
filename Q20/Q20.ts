// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.





let favoriteCities : string[] = ["Dubai", "Italy", "Skardu", "Swat", "NewYork"];

console.log('Cities I would like to visit: ')

favoriteCities.forEach((city, index) => {
    console.log(`City ${index + 1}: ${city}`);
});




