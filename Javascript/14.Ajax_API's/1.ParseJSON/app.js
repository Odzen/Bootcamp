// TURN JSON TO JS OBJECT
const data = `{"ticker":{"base":"BTC","target":"USD","price":"38712.17832576","volume":"20526.07891360","change":"25.48210710"},"timestamp":1651463883,"success":true,"error":""}`

// Parse the JSON into a JavaScript object
const parsedData = JSON.parse(data);

console.log(parsedData);
/*
It will print 

{ticker: {…}, timestamp: 1651463883, success: true, error: ''}
error: ""
success: true
ticker:
base: "BTC"
change: "25.48210710"
price: "38712.17832576"
target: "USD"
volume: "20526.07891360"
[[Prototype]]: Object
timestamp: 1651463883
[[Prototype]]: Object

*/

// Access to an item from the data
const price = parsedData.ticker.price
console.log(price); // Prints 38712.17832576


// TURN JS OBJECT INTO JSON
const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

const jsonDog = JSON.stringify(dog);
console.log(jsonDog);
/*
{"breed":"lab","color":"black","isAlive":true}
*/
