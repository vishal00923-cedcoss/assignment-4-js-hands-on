// let hello = "test";

/* let hello = "test"; */

var myName;

// Setup
var a;

// Only change code below this line

a = 7;

// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;

var a = 9;

var myFirstName = "Vishal";
var myLastName = "Chaurasia";

// Only change code below this line
var a;
var b;
var c;
// Only change code above this line
a = 5;
b = 10;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

const sum = 10 + 10;

const difference = 45 - 33;

const product = 8 * 10;

const quotient = 66 / 33;

let myVar = 87;

// Only change code below this line
myVar++;

let myVar = 11;

// Only change code below this line
myVar--;

const ourDecimal = 5.7;

// Only change code below this line

const myDecimal = 6.7;

const product = 5.0 * 1;

const quotient = 4.4 / 2.0; // Change this line

const remainder = 5 % 3;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

const myStr = 'I am a "double quoted" string inside "double quotes".';

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

const myStr = "This is the start." + " This is the end."; // Change this line

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Only change code below this line
const myName = "Vishal";
const myStr = "Hello, My name is " + myName + "how";

// Change code below this line
const someAdjective = "hello";
let myStr = "Learning to code is ";

myStr += someAdjective;

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
var myStr = "Jello World";
// Only change code below this line
myStr = "Hello World";

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;

// Only change code below this line
const myArray = ["str", 2];

// Only change code below this line
const myArray = [
  ["Bulls", 23],
  ["White Sox", 45],
];

const myArray = [50, 60, 70];

const myData = myArray[0];

// Setup
const myArray = [18, 64, 99];

// Only change code below this line

myArray[0] = 45;

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line

myArray.push(["dog", 3]);

/// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
const removedFromMyArray = myArray.pop();

// Only change code below this line
const removedFromMyArray = myArray.shift();

// Only change code below this line
const removedFromMyArray = myArray.unshift(["Paul", 35]);

const myList = [
  ["Canned Beans", 3],
  ["Milk Galon", 1],
  ["Cereal", 2],
  ["Toilet Paper", 12],
  ["Sack of Rice", 1],
];

// Define the function
function reusableFunction() {
  console.log("Hi World");
}

// Call the function
reusableFunction();

function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

function timesFive(num) {
  return num * 5;
}

// Declare your variable here
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
