// Callback

// I could do this
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000);

// But is better to do NESTING
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000);
//             }, 1000);
//         }, 1000);

//     }, 1000);
// }, 1000);

// All in one function to reuse it, and passing a callback doNext
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        // The first doNext is to check is I pass something
        doNext && doNext();
    }, delay);
}

// That chows that the method acepts a function as an argument
// and the function is called after the function that called it has finished its execution
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {

                })
            })
        })
    })
});

// This function accepts a callback
// The function executes that callback
// whenever it finishes searchMoviesAPI

// searchMoviesAPI('amadeus', () => {
//     saveToMYDB(movies, () => {
//         //if saveToMYDB it works run this
//     }, () => {
//         // if saveToMYDB doesn't work, run this
//     })
// }, () => {
//     // if API is down or request failed
// });

/*
saveToMYDB has two callback functions,
one if everthing went well, and one if
everuthing went wrong
*/
