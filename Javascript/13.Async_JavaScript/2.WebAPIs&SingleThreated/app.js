// Set Time Out

// 1. JS runs this line
console.log('Sending request to server...');

// 3. Then runs this, but has to wait 3 seconds, so in order to not staying without doing anything
// It search another line to execute meanwhile
setTimeout(() => {
    console.log('Here is your data from the server');
}, 3000);

// 2. Runs this, while is waiting for the 3 seconds 
console.log('End of the script');