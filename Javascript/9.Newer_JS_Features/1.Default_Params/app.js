//DEFAULT PARAMS

function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(6)) //Random number between 1 and 6
console.log(rollDie()) //NaN

//If I don`t pass numSides I want a default 6 in its place
function rollDie2(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie2()) // Random number between 1 and 6

//Shorter way
function rollDie3(numSides) {
    numSides = typeof numSides !== 'undefined' ? numSides : 6;
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie3()) // Random number between 1 and 6


//Sintax improvement
function rollDie4(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie4()) // Random number between 1 and 6
