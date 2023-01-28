// Practice Problem 3

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
//     largest number using if-else.

// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
//     triangle is Isosceles or not using if-else.

//     Isosceles => two sides are equal


// First Problem
var num_1 = 13;
var num_2 = 79;
var num_3 = 45;

if (num_1 > num_2 && num_1 > num_3){
    console.log(num_1 + " is the largest number");
}
else if (num_2 > num_1 && num_2 > num_3){
    console.log(num_2 + " is the largest number");
}
else if (num_3 > num_1 && num_3 > num_2){
    console.log(num_3 + " is the largest number")
}
else{
    console.log("something went wrong!")
}


// Second Problem
var firstSide = 9;
var secondSide = 8;
var thirdSide = 9;

if(firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide){
    console.log("This triangle is Isosceles");
}
else{
    console.log("This triangle isn't Isosceles");
}