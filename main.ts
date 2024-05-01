// Question No.1

// console.log("Hello World");

// Question No.2

// let personName ="Faisal Ahmed"
// console.log("Hello", personName, "would you like to learn some python today?");

// Question No.3

// var personName = "Faisal Ahmed";
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));

// Question No.4

// console.log("Albert Einsten once said,\"A person who never made a mistake never tried anything new.\"");

// // Question No.5

// let famousPerson = "Albert Einsten";
// let message = "once said,\"A person who never made a mistake never tried anything new.";
// console.log(famousPerson, message);

// Question No.6

// let withoutspaceName = "\n\t\ Faisal Ahmed \t\n\ ";
// console.log(withoutspaceName);

// let withoutWhitespacenName = withoutspaceName.trim();

// console.log(withoutWhitespacenName);

// // Question No.07 & 08

// console.log(4 + 4);

// console.log(12 - 4);

// console.log(4 * 2);

// console.log(16 / 2);

// Question No.09

// let favouriteNumber = 35;
// let message = "My favourite numer is:";
// console.log(message, favouriteNumber);

// Question No.10

// Addition 
// console.log(4 + 4);

// substraction
// console.log(12 - 4);

// multipilication 
// console.log(4 * 2);

// Division
// console.log(16 / 2);

// Question No.11

// let friendsName = ["Zubair", "Haseeb", "Salman", "Azhar"];

// friendsName.forEach(friendName => console.log(friendName));

// Question No.12

// let friendsName = ["Zubair", "Haseeb", "Salman", "Azhar"];

// friendsName.forEach(friendName => console.log(`Asslam Alaikum ${friendName}, Kiya Hall he`));

// Question No.13

// let transportationModes = ["Motorcycle", "Heavy Bike", "Car", "LandCrouiser"];

// transportationModes.forEach(mode => console.log(`I would like to own a ${mode}`));

// Question No.14

//  let guestName = ["Shayan", "Faisal", "Khalid", "Sheraz"];

// guestName.forEach(oneGuest => console.log(`Salam ${oneGuest} would you like to dinner with me?`));

// Question No.15

// let guestName = ["Shayan", "Faisal", "Khalid", "Sheraz"];

// let dontCome = guestName[0]
// console.log(dontCome, "Sorry Me Nhi Aaskta");
// guestName.splice(0, 1, "Hammad");
// guestName.forEach (oneGuest => console.log(`Welcome ${oneGuest}`));

// // Question No.16

// Creating a Guest List Array
// let guestName = ["Shayan", "Faisal", "Khalid", "Sheraz"];

// // Creating a Guest List Array
// let dontCome = guestName[0]

// // Print the Name of guest who cant Come
// console.log(dontCome, "Sorry Me Nhi Aaskta");

// //  Add or Remove Values from Guest List Array
// guestName.splice(0, 1, "Hammad");

// // Message Print for bigger table
// console.log("Good News ! I we have found a bigger table for dinner.");

// // Adding a new value at ending index of array
// guestName.unshift("Faizan");

// // Adding a new value at ending index of array
// guestName.push("Jamal");

// // Get a middle index of our guest Names array
// let middleIndex: number = Math.floor(guestName.length / 2);

// // Adding a new guest name to middle index of array 
// guestName.splice(middleIndex, 0, "Kashan")

//  // Print Message of Updated List 
// console.log("Updated List of our Guest");

// // Sending Invitiation message to our guests one by one their names
// guestName.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

// Question No.17

// Creating a Guest List Array
// let guestName = ["Shayan", "Faisal", "Khalid", "Sheraz"];

// // Creating a Guest List Array
// let dontCome = guestName[0]

// // Print the Name of guest who cant Come
// console.log(dontCome, "Sorry Me Nhi Aaskta");

// //  Add or Remove Values from Guest List Array
// guestName.splice(0, 1, "Hammad");

// // Message Print for bigger table
// console.log("Good News ! I we have found a bigger table for dinner.");

// // Adding a new value at ending index of array
// guestName.unshift("Faizan");

// // Adding a new value at ending index of array
// guestName.push("Jamal");

// // Get a middle index of our guest Names array
// let middleIndex: number = Math.floor(guestName.length / 2);

// // Adding a new guest name to middle index of array 
// guestName.splice(middleIndex, 0, "Kashan")

//  // Print Message of Updated List 
// console.log("Updated List of our Guest");

// // Sending Invitiation message to our guests one by one their names
// guestName.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

// infrom that only two guests can be invited for dinner
// console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two Guests to dinner with me")

// // Using while -loop to remove guests from the array 
// while(guestName.length > 2) {
//     let removeGuest = guestName.pop();
//     console.log(`Sorry, ${removeGuest} I cant invite you to dinner`);
// } 

// // Printing a Invitations to the last two guest on the list 
//     console.log("Invitation to the last 2 Guests");
//     guestName.forEach(lasttwo => console.log(`Luckyly ${lasttwo}, you are still invited to dinner`));

// // Removing last two Guest from the list

// guestName.pop();
// guestName.pop();

// console.log("emptylist", guestName);


// Question No.18

// // // Making a Array of countries and Print its Original order
// let visitTocounstries: String[] = ["Canada", "Denmark", "Bangladesh", "Africa"];
// console.log("Orignal Order", visitTocounstries);

// // Print the array is Alphabatical order without  modyfing the Actual Array List
// console.log("Alphabatical Order:", [...visitTocounstries].sort());

// // Show that the array is still in its Original Order 
// console.log("Still in Original Order:", visitTocounstries);

// // Print the Array of Reserve Order without modyfing Array List
// console.log("Reserve Order:", [...visitTocounstries].reverse()); 

// // Show that the array is still in its Original Order 
// console.log("Still in Original Order:", visitTocounstries);

// // We have changed the Original Array Order Now
// console.log("Original Array Reserved:", visitTocounstries.reverse());

// // Print the array to show that it's back to its Original Order 
// console.log("Back to Original Order:", visitTocounstries.reverse());

// // We have changed again the Original Array Order Now is reversed Order again
// console.log("Original Array Reserved Again:", visitTocounstries.reverse());

// Question No.19

// let guestName = ["Shayan", "Faisal", "Khalid", "Sheraz"];

// guestName.forEach(oneGuest => console.log(`Salam ${oneGuest} would you like to dinner with me?`));

// let lengtGuests: number = guestName.length; 
// console.log(`We are Inviting total ${lengtGuests} guests.`);

// Question No.20

// Making a Pakistani Popular Languages in Array 
// let pakistanipopularLanguages: string[] = ["Urdu", "Sindhi", "Punjabi", "Pathani", "Balouchi"];

// //  Print the Message of List 
// console.log("List of Pakistani Popular Languages:");

// // // Print the Values of Array in the form list of 
// pakistanipopularLanguages.forEach(language => console.log(language));

// Question No.21

// interface itCourse {
//     CourseName: String
//     Location: String
//     Onsite: number 
// }

// let itCourse = {
//     CourseName : "Typescript and Javascript",
//     Location: "Governor House Saddar",
//     onSiteStudents: 50000 
// }
// console.log(itCourse)

// Question No.22

// Creating a Array
// let errorArray: string[] = ["X", "Y", "Z"];  

// // Producing Error by Accessing invalid index of array
// console.log(errorArray[4]);

// //Error Removed 
// console.log(errorArray[2]);

// Question No.23


let three = 3

let six = 6

// // Number:1
// console.log("number1: six is equal to 6?");
// console.log(six == 6);

// // Number:2
// console.log("number2: three is equal to 3?");
// console.log(three == 3);

// // Number:3
// console.log("number2: six is not equal to 3?");
// console.log(six != three);

// // Number:4
// console.log("number1: three is small than 6?");
// console.log(three < 6);

// // Number:5
// console.log("number2: 6 is greater than 3?");
// console.log(six > 3);

// // Number:6
// console.log("number1: six is equal to 8?");
// console.log(six == 8);

// // Number:7
// console.log("number2: three is equal to 5?");
// console.log(three == 5);

// // Number:8
// console.log("number2: three is not equal to 3?");
// console.log(three != 3);

// // Number:9
// console.log("number1: three is greater than 6?");
// console.log(three > 6);

// // Number:10
// console.log("number2: 6 is smaller than 3?");
// console.log(six < 3);

// Question No.24

// // Define the variables
// let glass = "glass"
// let uppercaseGlass = "GLASS"
// let Four = 4;
// let Eight = 8;
// let daysName = ["Monday", "Tuesday", "Wednesday", "Thursday"];


// // Test for equality and inequality with strings 

// console.log("Is glass is equal to glass");
// console.log(glass == "glass");

// console.log("Is glass is not equal to glass");
// console.log(glass != "glass");

//  // Tests using LowerCase function

//  console.log("Is GLASS is equal to glass after converting to LowerCase?")
//  console.log(uppercaseGlass.toLocaleLowerCase() == "glass")

//  console.log("Is GLASS is not equal to glass after converting to LowerCase?")
//  console.log(uppercaseGlass.toLocaleLowerCase() != "glass")

// // Numerical Tests

// console.log("Is Four is equal to Eight?")
// console.log(Four == Eight);

// console.log("Is Four is not equal to Eight?")
// console.log(Four != Eight);
 
// // Greater than and not greator than 
// console.log("Is Four is greator than One?")
// console.log(Four > 1);

// // less than
// console.log("Is Eight is less than Four?")
// console.log(Eight < 4);

// // Greater than or equal to
// console.log("Is Eight is greator than or equal to Four?")
// console.log(Eight >= 4);

// // less than or equal to
// console.log("Is Eight is less than or equal to Four?")
// console.log(Eight <= 4);

// // Test using "and" & "or" Operators

// // Using and (&&) Operators
// console.log("Eight is not equal to 4 and Eight is greater than 4")
// console.log(Eight != 4 && Eight > 4);

// // Using and (||) Operators
// console.log("Four is greater than 8 OR Four is equal to 4")
// console.log(Four > 8 || Four == 4);

// console.log("Four is greater than 8 OR Four is not equal to 4")
// console.log(Four > 8 || Four != 4);

// // The Wheter an names is includes in arrray

// console.log("Monday includes in my Days Name array");
// console.log(daysName.includes("Monday"));

// // include
// console.log("Monday not includes in my Days Name array");
// console.log(!daysName.includes("Monday"));

// Question No.25

// // Define Variable 
// let alienColor = "Yellow"

// if (alienColor === "Red"){
//     // Code
//     console.log("Alien Color is Black Player Just earned 5 Points.");
// }

// if (alienColor === "Yellow"){
//     console.log("Alien Color is Yellow.");
// }

// Question No.26

// Define Variable 

// let alienColor = "Red"

// // First  
// if (alienColor === "Red"){
//     console.log("Player Just earned 5 Points for shooting the alien.");
// }
// else {
//     console.log("Playe Just earned 10 Points.")
// }

// // Second 

// if (alienColor === "Green"){
//     console.log("My Color Name is Green.");
// }
// else {
//     console.log("I am come from Else Statement.")
// }

// Question No.27

// // Define Variable
// let alienColor = "Green"

// // Using if & else-if Statments
// if (alienColor === "Green"){
//     console.log("(First) You shot down green alien you have earned 5 Points");
// }
// else if (alienColor === "Yellow"){
//     console.log("You shot down yellow alien you have earned 10 Points");
// }
// else if (alienColor === "Red"){
//     console.log("You shot down red alien you have earned 15 Points");
// }

// // Second Version
// let alienColor1 = "Yellow"

// if (alienColor1 === "Green"){
//     console.log("You shot down green alien you have earned 5 Points");
// }
// else if (alienColor1 === "Yellow"){
//     console.log("(Second) You shot down yellow alien you have earned 10 Points");
// }
// else if (alienColor1 === "Red"){
//     console.log("You shot down red alien you have earned 15 Points");
// }

// // Third Version

// let alienColor2 = "Red"

// if (alienColor2 === "Green"){
//     console.log("You shot down green alien you have earned 5 Points");
// }
// else if (alienColor2 === "Yellow"){
//     console.log("(Second) You shot down yellow alien you have earned 10 Points");
// }
// else if (alienColor2 === "Red"){
//     console.log("(Third) You shot down red alien you have earned 15 Points");
// }

// Question No.28

// Create a Variable
// let age = 70

// // Creating a Program for Determining the step of life using if-else Chain
// if (age < 2){
//     console.log("You are a baby");
// }
// else if (age > 2 && age < 4){
//     console.log("You are a Toddler");
// }

// else if (age >= 4 && age < 13){
//     console.log("You are a Kid.");
// }

// else if (age >= 13 && age < 20){
//     console.log("You are a Teenagers.");
// }

// else if (age >= 20 && age < 65){
//     console.log("You are a Adult.");
// }

// else if (age >= 65){
//     console.log("You are a Elder.");
// }

// Question No.29

// Creating a Array

// let favourite_fruits = ["Banana", "Apple", "Mango"]

// if (favourite_fruits.includes("Banana")){
//     console.log("My Favourite Fruit is Banana")
// }
// if (favourite_fruits.includes("Apple")){
//     console.log("My Favourite Fruit is Apple")
// }

// if (favourite_fruits.includes("Orange")){
//     console.log("My Favourite Fruit is Orange")
// }

// if (favourite_fruits.includes("Strawbery")){
//     console.log("My Favourite Fruit is Strawbery")
// }
// if (favourite_fruits.includes("Mango")){
//     console.log("My Favourite Fruit is Mango")
// }

// // Question No.30

// // Creating a Array

// let userNames = ["Abid", "Haseeb", "Admin", "Azhar", "Salman"];

// // Using of Foreach Loop on Array 
// userNames.forEach(oneUser => {
//     if (oneUser === "Admin"){
//         console.log(`Hello ${oneUser}, would you like to see status report?`)
//     }else{
//         console.log(`Hello ${oneUser}, thank you for logging in again.`)        
//     }
// })

// Question No.31

// Creating a Array

// let userNames = ["Abid", "Haseeb", "Admin", "Azhar", "Salman"];

// userNames = [] 

// if (userNames.length === 0){
//     console.log("Your Array in Empty We needed to find some Users!")
// }else{ 
// userNames.forEach(oneUser => {
//     if (oneUser === "Admin"){
//         console.log(`Hello ${oneUser}, would you like to see status report?`)
//     }else{
//         console.log(`Hello ${oneUser}, thank you for logging in again.`)        
//     }
// })
// }

// Question No.32

// // Array of Current Users 
// let current_users = ["Shakir", "Kashan", "Maheen", "Daniyal", "Shani"];

// // Array of New Users
// let new_users = ["Bilal", "Arham", "Kashan", "Mujeeb", "Maheen"];

// // Loop throug new uses to check for usernames availability

// new_users.forEach(new_one_user => {
// // Making a Condition for username is already Exist and save in our_condition variable 
//     let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
// // Print Differnt messages using If & else statments    
//     if (our_condition){
//         console.log(`Sorry ${new_one_user} is already taken!`)
//     }else{
//         console.log(`This Username ${new_one_user} is avaiable`)
//     }
// })

// Question No.33

// Creating Array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Using for-loop

// for (let oneByone of numbers){
//     let ordinalEnding: String;

// if(oneByone === 1){
//     ordinalEnding ="st"
// }

// else if(oneByone === 2){
//     ordinalEnding ="nd"
// }    
// else if(oneByone === 3){
//     ordinalEnding ="rd"
// }    
// else{
//     ordinalEnding ="th"
// }    
//     console.log(`${oneByone}${ordinalEnding}`);
// }

// Question No.34

// Creating Array

// let pizza = ["Fajita", "Malai Cheese", "Chicken Tika"];

// // Using for-loop

// for (let oneByone of pizza){
//     console.log(`I Like ${oneByone} pizza`);
// }

// console.log("Pizza is Love")

// Question No.35

// let petAnimals = ["goat", "Rabitt", "Dog"]

// for (let oneByone of petAnimals){
//     console.log(`A ${oneByone} would make a great pet`);
// }

//     console.log("Any of these animals would make a great pet");

// Question No.36

// function orderof_Shirt(size: String, printMessage: String){
//     console.log(`You Selected ${size} size shirt with ${printMessage} prints on shirt`)
// }
// orderof_Shirt("Medium", "Junior Fighters" )

// Question No.37

// function make_shirt(size: String = "Large",  printMessage: string = "I Love Typescript"){
//     console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
// }

// // Calling a function
// make_shirt();

// // Calling a function now with medium size and default values

// make_shirt("Medium");

// // Calling a function now with small size and also differnt Print Messages

// make_shirt("Small", "I Love Javascript");

// Question No.38

// function describe_city(City: string, Country: string = "Pakistan"){
//     console.log(`${City} is in ${Country}`)
// }

// Calling the function
// describe_city("Karachi");
// describe_city("Peshawar");
// describe_city("Tehran", "Iran");

// Question No.39

// function city_country(City: string, Country: string) : string{
//     return `${City}, ${Country}`;
// }

// // Calling the function and printed returned value

// console.log(city_country("Lahore", "Pakistan"));

// console.log(city_country("Beijing", "China"));

// console.log(city_country("Ankara", "Tureky"));

// Question No.40

// function make_album(artist_name: string, album_title: string, tracks?: number){
//     let album: {artist: string, title: string,  tracks?: number} = { 
//         artist: artist_name,
//         title: album_title,
//     };

//     if (tracks !== undefined){
//         album.tracks = tracks;
//     }
//     return album;

// }

// // Calling three and creating 3 variables with differnt values

// let album6 = make_album("Faisal", "Album title 6");

// let album7 = make_album("Afzal", "Album title 7");

// let album8 = make_album("Azhar", "Album title 8", 5);

// // Print Values of our object created my function 

// console.log(album6);
// console.log(album7);
// console.log(album8);

// Question No.41

// Define a function to print each magician name from an array

// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }

// // Define an array Containing magicians name

// let magicians_names = ["Muzzamil", "Shezad", "Faisal"]

// // Call the function to print each magicians name

// show_magicians(magicians_names);

// Question No.42


// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }

// function make_great(magicians: string[]){
//     return magicians.map(name => `The Great ${name}`);
// }

// Define an array Containing magicians name

// let magicians_names = ["Muzzamil", "Shezad", "Faisal"]

// Call make_great function to modify magicians names

// let great_magicians = make_great(magicians_names);

// Call show_magicians that show modified list of magicians

// show_magicians(great_magicians);

// Question No.43

// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }

// function make_great(magicians: string[]){
//     return magicians.map(name => `The Great ${name}`);
// }

// // Define an array Containing magicians name

// let magicians_names = ["Muzzamil", "Shezad", "Faisal"]

// // Making a Copy of original array through .slice() function 

// let copy_magicians_names = magicians_names.slice()

// // Modified the copied array to include "The Great" with their names
// let copy_great_magicians = make_great(copy_magicians_names);

// // Show both arrays Original and copied 

// // Original
// console.log("Original Array\n") 
// show_magicians(magicians_names);

// // Copied 
// console.log("\nCopied Array\n")
// show_magicians(copy_great_magicians);

// Question No.44

// function makeSandwich(...items: String[]){
//     console.log("\Making a sandwich with the following items:\n")

//     items.forEach (singleItem => console.log(singleItem));

//     console.log("\nNow Enjoy Sandwich");
// }

// // Call the function 3 items with different numbers of arguments

// makeSandwich("Bread", "Butter", "Mayo", "Chicken", "Egg")

// makeSandwich("Butter", "Chicken", "Egg")

// makeSandwich("Cheese", "Chicken", "Butter")

// Question No.45

// Define a function to create a car object with optional options

function create_car(manufacturer, model, ...options){

// Initialize a car object with manufacturer and model

let car = {
    manufacturer: manufacturer,
    model: model,
};
// Add Additional options to the car object 

options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
});

return car;
}

// Call the function to create a car object 

let my_car = create_car("Toyota", "Corrolla", "Collor: White", "Sunroof: True", "Year: 2020");

// Print the Variable

console.log(my_car);