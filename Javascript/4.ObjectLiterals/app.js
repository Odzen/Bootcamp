// Object Literal

const person = {
  firstName: 'Juan',
  lastName: 'Sebastian',
};
console.log(typeof person);
//console.log(person);

// you can use all the types

let comment = {
  username: 'odzen',
  downVotes: 19,
  upVotes: 214,
  netScore: 195,
  commentText: 'Tastes like chicken lol',
  tags: ['#hilarius', '#funny'],
  isGilded: false,
};
//console.log(comment);

//Access
//Option 1 with quotes
console.log(comment['username']);
//Option 2 with dot
console.log(comment.username);

//Difference between accessing data with quotes and with dot

const years = { 1999: 'GOOD', 2020: 'BAD' };

let birthyear = 2020;

console.log(years.birthyear); // error, it does not works
console.log(years[birthyear]); //BAD, it works

// Exercise
const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
};

let fullAddress = restaurant.address + ", "
                 + restaurant.city + ", "
                 + restaurant.state + ", "
                 + restaurant.zipcode;
console.log(fullAddress);

// UPDATE AND ADD
const midterms={
	danielle:96,
	sebas:78
};

//update
midterms.sebas=79;
midterms['danielle']='A';

// Add
midterms.ezra= 'B+';
midterms['Antonio']= 'C+';