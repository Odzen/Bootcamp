
// EVT contains info about the object
// int this case is a PointerEvent or MouseEvent

document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
});

// KEYBOARD EVENTS
// With work with this event object when we work with keyboard events

const input = document.querySelector('input');

// keydown is when I press any key from the keyboard
// input.addEventListener('keydown', function () {
//     console.log("KEYDOWN");
// });

// keydown is when I pressed any key from the keyboard and lifted
// input.addEventListener('keyup', function () {
//     console.log("KEYUP");
// });

// To know which key was pressed?, we use the event object
// The e in this case is a KeyboardEvent
input.addEventListener('keydown', function (e) {
    // console.log(e); KeyEvent, which is an object event
    console.log(e.key); // What? The letter, it could change depending on the language
    console.log(e.code); // Where? Code, unique, does not change
});

// KEYS WITH CASES, it ignores all the keys except the ones in the cases
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})
