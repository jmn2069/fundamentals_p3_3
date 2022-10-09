// Write a function called add7 that takes one number and returns that number + 7.

let number = prompt("Enter a number: ");
// check for number
if (isNaN(number)) {
    prompt("You did not enter a number.");
} else {
    console.log(add7(number));
}

function add7(number) {
    return(+number + 7);
}

// Write a function called multiply that takes 2 numbers and returns their product.

let num1 = prompt ("Enter a number to multiply: ");
let num2 = prompt ("Enter another number to multiply ");
// check for number
if (isNaN(num1) || isNaN(num2)) {
    prompt("You did not enter a number.")
} else {
    console.log(multiply(num1, num2));
}

function multiply(num1, num2) {
    return(num1 * num2);
}

// Write a function called capitalize that takes a string and returns that string with only 
// the first letter capitalized. Make sure that it can take strings that are lowercase, 
// UPPERCASE or BoTh.

let string = prompt("Enter a word to capitalize: ");
// check for string
if (/^[a-zA-Z]+$/.test(string)) {
    capitalize(string);
} else {
    prompt("You did not enter a word.");
}

function capitalize (string) {
    string = string[0].toUpperCase() + string.slice(1).toLowerCase();
    console.log(string);
}

// Write a function called lastLetter that takes a string and returns the very last letter 
// of that string:
//     lastLetter("abcd") should return "d"

let string2 = prompt("Enter a word for function lastLetter: ");
// check for string
if (/^[a-zA-Z]+$/.test(string2)) {
    console.log(lastLetter(string2));
} else {
    prompt("You did not enter a word.");
}

function lastLetter (string2) {
    if ( string2.length > 0) {
        return(string2[string2.length - 1]);
    } else {
        return(string2);
    }
}