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
