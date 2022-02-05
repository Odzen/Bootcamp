const password = prompt('please enter a password');

//Logical and
if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log('Valid password');
} else {
  console.log('Invalid format');
}

//Logical or

// 0-5 - $10 - free
// 5-10 - $10
// 10-65 - $20
// 65+ - free

let age = 10;
if ((age >= 0 && age < 5) || age >= 65) {
  console.log('free');
} else if (age >= 5 && age < 10) {
  console.log('$10');
} else if (age >= 10 && age < 65) {
  console.log('$20');
}

//Logical not
age = 45;
// Another example, using the previous one
if (!((age >= 0 && age < 5) || age >= 65)) {
  console.log("You're not a baby or senior");
}

// If I leave empty the field, it will prompt try again
let firstName = prompt('Enter your first name');
if (!firstName) {
  firstName = prompt('Try again!');
}
