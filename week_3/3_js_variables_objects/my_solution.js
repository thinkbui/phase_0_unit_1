// I paired [by myself, with:] on this challenge. By Myself




// Pseudocode
// declare secretNumber and set to 7
// declare password and set to "just open the door"
// declare allowedIn and set to false
// declare member and set first value as "John" and fourth value as "Mary"


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = 'just open the door';
var allowedIn = false;
var members = ['John','Alice','Bob','Mary'];


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
//I thought my code was concise enough not to be refactored in any way since it is only necessary to declare them once and set the initial values since they aren't altered in any way by the tests.  The array 'members' could be altered to make it longer or populate the unchecked values something else or even null, but other than that, this is as concise as it can be.




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// The trouble I ran into with this challenge was that I haven't diagnosed from error messages returned to the command line for some time, so I initially thought that there was a problem with the throw command inside the assert function and kept thinking that until I saw the comment that the assert function and all the tests should not be altered in any way and made me realize it was a problem with lack of variable declaration.  I also need to review how to read the error annotations as it took me a long time to figure out that I missed the assignment operator '=' when declaring the 'members' array.
// 
// 
// 
// 
// 


// __________________________________________
// Driver Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

