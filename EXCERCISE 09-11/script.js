// EXCERCISE : 09 to 11 (USER INPUT & CONDITIONAL STATEMENT)
// Question 01
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// Answer 01
// var city = prompt("Enter you city")
// if(city ==="karachi"){
//     alert("Welcome to city of lights")
// }

// Question 02
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// Answer 02
// var gender = prompt("write your gender")
//   if (gender ==="male"){
//     alert("Good Morning Sir");
    
//   }
//   if (gender ==="female") {
//         alert("Good Morning Ma’am");
        
//     }

// Question 03
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Question 03
// var  trafficSignal = prompt(" Enter your favrt colour")
//   if ( trafficSignal ==="Red"){
//     alert("Must Stop");
//   }
//   if (trafficSignal ==="Yellow") {
//         alert("Ready to Move");
//     }
//        if (trafficSignal ==="Green") {
//          alert("Move Now");
//     }

// Question 04
// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
// // Answer 04
// var car = prompt("remaining fuel in car");
// if (car <= 0.25 ){
//     alert("Please refill the fuel in your car");
// }

// Question 05
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// User Input & Conditional Statement | JAVASCRIPT

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }
// Question 06
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Question 07
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// Answer 02
// var secretNumber = 7; 
// var guess = +prompt(" Enter number between 1 to");
// if (guess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (guess === secretNumber ) {
//   alert("Close enough to the correct answer");
// } else {
//   alert(" Try again");
// }

// Question 08
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// Answer 02
// var num = +prompt("");

// if (num % 3 === 0) {
//   alert("this number is divides by 3");
// } else {
//   alert("this number is'nt divided by 3");
// }
// Question 09
// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// Answer 02
// var num = +prompt(" 24");
// if (num % 2 === 0) {
//   alert("Its even"");
// } else {
//   alert("Its Odd"");
// }
// Question 10
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// Answer 10
// var temp = +prompt("temperatue");
// if (temp > 40) {
//   alert("It is too hot outside.");
// } else if (temp > 30) {
//   alert("The Weather today is Normal.");
// } else if (temp > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temp > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("It’s very cold outside!");
// }
// Question 11
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// Answer 11

