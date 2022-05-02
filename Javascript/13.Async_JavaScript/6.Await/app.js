
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000); // Wait for this promise to be resolved
    //await console.log("Hi");
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    return "All done"; // I'm pointing here that the Promise is resolved
}
//rainbow();

// I could do the following, waiting for the Promise that I'll get from rainbow()

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!");
}

printRainbow()

// WHAT HAPPENS IF THE PROMISE IS REJECTED

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connetion Timeout :(');
            }
            else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1);
        console.log(data2);
    }
    catch (e) {
        console.log("ERROR");
        console.log("error is", e);
    }
}

makeTwoRequests()