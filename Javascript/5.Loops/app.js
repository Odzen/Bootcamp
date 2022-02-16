//For lopp
console.log("Practice 1");
for(let i=1;i<=10;i++){
    console.log(i)
}
console.log("Even");
for(let i=0;i<=20;i+=2){
    console.log(i);
}
console.log("Down");
for(let i=100;i>=0;i-=10){
    console.log(i);
}

//Looping Over Arrays
const a=["Elemento 1","Elemento 2","Elemento 3","Elemento 4","Elemento 5"];
for(let i=0;i<a.length;i++){
    console.log(i,a[i].toLowerCase());
}

//While Loop

console.log("While");
let num=0;
while (num<10){
    console.log(num);
    num++;
}

/* const SECRET="BabyHippo";
let guess=prompt("enter the secret code...");
while(guess!==SECRET){
    guess=prompt("enter the secret code...");
}
console.log("Congrats, you got the secret");
 */

//for..of loop

console.log("For Of");
//Iterating over arrays
const subreddits=['odzen','odzen1','odzen2','odzen3'];

for(let sub of subreddits){
    console.log(`Visit reddit,com/r/${sub}`);
}

//for ...in loop

console.log("For in");
//Iterating over objects

const testScores={
    juan:70,
    juan1:80,
    juan2:90,
    juan3:760,
    juan4:7560
}

for(let person in testScores){
    console.log(`${person} scored ${testScores[person]}`);
}

//Another way
Object.entries(testScores); //Array de arrays with entries, par key,value
Object.values(testScores); //Array with the values
Object.keys(testScores); //Array with the keys

let total=0;
let scores= Object.values(testScores);
for(let score of scores){
    total+=score;
}
//average
console.log(total/scores.length);