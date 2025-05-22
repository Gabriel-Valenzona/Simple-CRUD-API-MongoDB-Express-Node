const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('/models/product.model.js');

app.get('/', (req, res) => {
    res.send("Hello from node API, kjo");
});

app.use(express.json());

app.post('/api/products', async (req, res) => {
try{
    const prouct = await Product.create(req.body);
    res.status(200).json(product);
}
catch (error) {
res.status(500).json({message: error.message});
}

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