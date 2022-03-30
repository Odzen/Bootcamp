//REST

/*
Looks like spread (...) but is different
Collects all remaining arguments into an actual array
*/

//With arguments object, that automatically collects all arguments

function sumAll(...nums) {
    let total = 0;
    for (let n of nums) total += n;
    return total;
}

console.log(sumAll(1, 2)); //3
console.log(sumAll(1, 2, 3, 4, 5)); //15