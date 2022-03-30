//In python would be something like
// import time
// print("Printed immediately.")
// time.sleep(2.4)
// print("Printed after 2.4 seconds.")

//JS

//SetTimeOut
//Print Hello imediantly and
//After 3 seconds it will ..are you still there
console.log("Hello");
setTimeout(() => {
    console.log("... are you still there?");
}, 3000);

//SetInterval
//It will call the arrow function every 2 seconds over and over again

const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

//To stop the iteration --> clearInterval(id)

