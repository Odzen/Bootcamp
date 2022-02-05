const userInput = prompt('Enter something');

//Shows that an empty string is considered false
if (userInput) {
  console.log('True, something typed!');
} else {
  console.log('The use did not put anything');
}

//0 is false
if (0) {
  console.log('0 is never true');
} else {
  console.log('0 is false');
}

//0 is false, another number, even negatives are true
if (-1) {
  console.log('Another number is true');
} else {
  console.log('0 is false');
}

//null is false
if (null) {
  console.log('null is never true');
} else {
  console.log('null is false');
}

//NaN: Not a Number is false
if (NaN) {
  console.log('NaN is never true');
} else {
  console.log('NaN is false');
}

//undefined is false
if (undefined) {
  console.log('undefined is never true');
} else {
  console.log('undefined is false');
}
