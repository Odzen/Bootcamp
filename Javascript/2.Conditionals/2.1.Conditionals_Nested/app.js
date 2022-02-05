let random = Math.random();

if (random < 0.5) {
  console.log('Less than 0.5');
  console.log(random);
}

function isEven(num) {
  if (num % 2 === 0) console.log('even');
  else console.log('odd');
}

isEven(11);

// Another example
const password = prompt('please enter a password');

//Password must be 6+ characters
if (password.length >= 6) {
  // Password cannot include space
  if (password.indexOf(' ') === -1) {
    console.log('Valid Password');
  } else {
    console.log('Password cannot contain spaces!');
  }
} else console.log('Too short! Must be 6+ characters');
