
// async function hello() {
// }
// hello(); // Promise {<fulfilled>: undefined}

// With arrow also works
const sing = async () => {
    throw new Error("Oh shit! Here we go again...");
    return "Lalala";
}

console.log(sing()); // Promise {<fulfilled>: 'Lalala'}

// I could use then and catch, same as promises, because async returns a Promise
sing()
    .then(data => {
        console.log('PROMISE RESOLVED WITH:', data);
    })
    .catch(err => {
        console.log("Oh no, Promise rejected :(", err);
    });

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('todd', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

