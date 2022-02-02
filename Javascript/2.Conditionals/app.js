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
