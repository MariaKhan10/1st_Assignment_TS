// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ['Maria', 'Aqsa', 'Namra', 'Naheed', 'Maryam'];
var new_users = ['Ali', 'Sara', 'Maria', 'Maryam', 'Kainat'];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(new_user, "' is available."));
    }
}
// Alternate way
// let current_users: string[] = ['Maria', 'Aqsa', 'Namra', 'Naheed', 'Maryam'];
// let new_users: string[] = ['Ali', 'Sara', 'Maria', 'Maryam', 'Kainat'];
// for (let newUsername of new_users) {
//     let isUsernameTaken: boolean = current_users.some((username) => username.toLowerCase() === newUsername.toLowerCase());
//     if (isUsernameTaken) {
//         console.log(`Username '${newUsername}' is not available. Please enter a new username.`);
//     } else {
//         console.log(`Username '${newUsername}' is available.`);
//     }
// }
