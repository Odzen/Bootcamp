
 // We get a Promise
 /* ONE REQUEST

fetch("https://swapi.dev/api/people/1/")
.then(res => {
    console.log("RESOLVED", res);
    // To parse the body to JSON, but also returns a Promise
    return res.json();
})
.then(data => {
    console.log("JSON DONE!", data);
})
.catch((e) => {
    console.log("ERROR!", e);
});

*/

// SEVERAL REQUESTS
/*
fetch("https://swapi.dev/api/people/1/")
.then(res => {
    console.log("RESOLVED", res);
    // To parse the body to JSON, but also returns a Promise
    return res.json();
})
.then(data => {
    console.log("JSON DONE!", data);
    return fetch("https://swapi.dev/api/people/2/")
})
.then(res => {
    console.log("SECOND REQUEST RESOLVED!!");
    return res.json();
})
.then(data => {
    console.log("JSON DONE!", data);
})
.catch((e) => {
    console.log("ERROR!", e);
});
*/

//ASYNC FUNCTIONS

const loadStarWarsPeople = async () => {
    try{
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    }catch(e){
        console.log("ERROR!",e);
    }
}

loadStarWarsPeople();