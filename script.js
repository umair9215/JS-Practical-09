
// Assignment 1:
// Task: Write a JavaScript function that takes two numbers as arguments and returns their sum.

// function addNumbers() {
//     num1 = +prompt("Enter a Number");
//     num2 = +prompt("Enter another Number");
//     num3 =  num1 + num2; 
//     alert(num3);
// }
// addNumbers();



// Assignment 2:
// Task: Write a JavaScript function that takes a string as an argument and returns the string in uppercase.


// function toUpperCase(str) {
//     return str.toUpperCase();
// }
// const inputString = prompt('Enter a string to convert to uppercase');
// const uppercaseString = toUpperCase(inputString);
// alert(uppercaseString);



// Assignment 3:
// Task: Write a JavaScript function that takes an array of numbers as an argument and returns the average of the numbers.

// function  averageArray(numbers) {
//     if (numbers.length === 0) {
//         return 0;
//     }
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     const average = sum / numbers.length;
//     return average;
// }
// const numberArray = [10, 20, 30, 40, 50];
// const average =  averageArray(numberArray);
// console.log(average); 



// Assignment 4:
// Task: Write a JavaScript function that takes a string as an argument and returns the string with all vowels removed.



// function removeVowels(str) {
//     const vowelsRegex = /[aeiouAEIOU]/g;
//     const result = str.replace(vowelsRegex, '');
//     return result;
// }
// const inputString = prompt("Enter a string to remove vowels");
// const noVowelsString = removeVowels(inputString);
// alert(noVowelsString); 



// Assignment 5:
// Task: Write a JavaScript function that takes a number as an argument and returns the factorial of that number.


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// const number = prompt("Enter a number");
// const factorialOfNumber = factorial(number);
// alert(factorialOfNumber); 


// Assignment 6:
// Task: Write a JavaScript function that takes a string as an argument and returns the string with all letters reversed.


// function reverseString(str) {
//     const charArray = str.split('');
//     const reversedArray = charArray.reverse();
//     const reversedString = reversedArray.join('');    
//     return reversedString;
// }
// const inputString = prompt("Enter a string");
// const reversed = reverseString(inputString);
// alert(reversed);
