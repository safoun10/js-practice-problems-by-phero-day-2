// Practice Problem 1

// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', ' Banana', ' Orange'];
console.log("Initial look of the array = " + fruits);

var indexOfBanana = fruits.indexOf(' Banana');
fruits[indexOfBanana] = " Mango";
console.log("After replacing banana with mango = " + fruits);

fruits.pop();
fruits.push(" Watermelon");
console.log("After removing orange and adding watermelon = " + fruits);