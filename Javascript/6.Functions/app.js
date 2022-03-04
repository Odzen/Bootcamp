console.log("PART 1");
//First Function
function grumpus(){
    console.log('Hi');
    console.log('1');
    console.log('2');
}
grumpus();

//Arguments
function greet(person){
    console.log(`first name is: ${person}`);
}

greet('Juan');
greet(); //undefined


//Multiple arguments

function printName(firstName,lastName){
    console.log(firstName,lastName);    
}
printName('Juan','Velasquez');

//Return
function add(x,y){
    sum=x+y;
    return sum;
}
suma=add(5,3);
console.log(suma);

console.log("Exercises".toUpperCase());

//Exercise, last element
function lastElement(array){
    if(array.length === 0)
        return null;
    else
        return array[array.length-1];
    
} 

console.log(lastElement([3,5,7]))

//Exercise capitalize first letter string

function capitalize(string){

    let newString='';

    let firstLetterCapi= string[0].toUpperCase();

    let sliceString = string.slice(1, string.length);
    
    newString=firstLetterCapi+sliceString;
    return newString;
}

console.log(capitalize('pamplemousse'));

//Exercise sum of all the numbers in the array
function sumArray(array){

    let sum=0;

    for(let element of array){
        sum+=element;
    } 

    return sum;
}

console.log(sumArray([1,2,3]));

//Exercise returnDay, takes in one parameter a number from (1-7)
// returns the day of the week 1=Monday, 2= Tuesday, etc.
// if number is less than 1 or greater than 7 should return null
// Monday is the first day

function returnDay(numberDay)
{
    if(numberDay<1 || numberDay>7)
        return null;
    else
    {
        const days={
            1:'Monday',
            2:'Tuesday',
            3:'Wednesday',
            4:'Thursday',
            5:'Friday',
            6:'Saturday',
            7:'Sunday'
        }
        return days[numberDay];
    }
}

console.log(returnDay(2));


// FUNCTIONS PART 2
console.log("PART 2");
const addFunction = function (x,y)
{
    return x + y;
}

console.log(add(3,4));

//Exercise 1
console.log("Exercise 1");
const square= function(number)
{
    return number*number;
}
console.log(square(5));

//Function as arguments
console.log("FUNCTION AS ARGUMENTS");
function callTwice(func)
{
	func();
	func();
}

function rollDie(){
	const roll= Math.floor(Math.random()*6)+1;
	console.log(roll)
}

callTwice(rollDie)

//Return a function
console.log("RETURN A FUNCTION");

function makeMysteryFunc()
{
    const rand= Math.random();
    if(rand > 0.5)
    {
        return function()
        {
            console.log("WIN");
        }
    }
    else
    {
        console.log("You've infected by a virus");
    }
}
const mystery=makeMysteryFunc
console.log(mystery())


//methods
console.log("METHODS");

const myMath = 
{
    PI: 3.1416,
    square: function(num)
    {
        return num**2;
    },
    cube: function(num)
    {
        return num ** 3;
    }
}

console.log(myMath);
console.log(myMath.PI);
console.log(myMath.square(2));
console.log(myMath.cube(2));

//Another way, modern way, shorthand
const myMath2= 
{
    PI: 3.1416,
    square(num)
    {
        return num**2;
    },
    cube(num)
    {
        return num ** 3;
    }
}

console.log(myMath2);
console.log(myMath2.PI);
console.log(myMath2.square(2));
console.log(myMath2.cube(2));

//Exercise 2
console.log("Exercise 2");

const squareObj = 
{
    area(side)
    {
        return side*side;
    },

    perimeter(side)
    {
        return side*4;
    }
}

console.log(squareObj.area(10));
console.log(squareObj.perimeter(10));


//Keyword THIS
console.log("THIS");

const cat = 
{
    name : 'Igor',
    color: 'blue',
    meow()
    {
        console.log(`${this.name} says Meow`);
    }
}
console.log(cat.meow())

//EXERCISE 3 THIS
console.log("EXERCISE 3");

const hen = 
{
    name: 'Helen',
    eggCount:0,

    layAnEgg()
    {
        this.eggCount++;
        return 'EGG';
    }
}

console.log(hen.name)
console.log(hen.eggCount)
console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.eggCount)

//Try Catch
console.log("TRY CATCH");

function yell(msg)
{
    try
    {
        console.log(msg.toUpperCase());
    }
    catch(e)
    {
        console.log(e);
        console.log("Please pass a string next time!");
    }
}

console.log(yell("Hi"));
console.log(yell(12345));