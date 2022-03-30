//ARROW FUNCTIONS AND KEYWORD THIS

//With normal function
const person = {
    firstName: 'Viggo',
    lastName: 'Mortesen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.fullName()); // Viggo Mortesen

//With arrow function

const person2 = {
    firstName: 'Viggo',
    lastName: 'Mortesen',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person2.fullName()); // undefined undefined, because the scope is not the object, is the window