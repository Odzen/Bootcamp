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

const age = 10;
if ((age >= 0 && age < 5) || age >= 65) {
  console.log('free');
} else if (age >= 5 && age < 10) {
  console.log('$10');
} else if (age >= 10 && age < 65) {
  console.log('$20');
}
