const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send("Hello from node API, kjo");
});

mongoose.connect("mongodb+srv://imgabing:imgabing@backenddb.hjiczan.mongodb.net/Node-API-Beginner?retryWrites=true&w=majority&appName=BackendDB")
.then (() => {
    console.log("Connected to DB, HY!!");
    app.listen(3000, () => {
        console.log("Server running on port 3000!!!!")
    });
})
.catch((ERROR) => {
    console.log("connection to DB doodoo failed")
}); 