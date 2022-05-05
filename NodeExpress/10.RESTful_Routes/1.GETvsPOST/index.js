const express = require('express');
const app = express();

// To parse encoded info from the request body --midleware function
app.use(express.urlencoded({extended:true}));
// To parse json info from the request body -- midleware function
app.use(express.json());



app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
    console.log(req.body);
    const {meat, qty} = req.body; // Getting the keys
    res.send(`POST- OK, here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
    console.log("ON PORT 3000");
});