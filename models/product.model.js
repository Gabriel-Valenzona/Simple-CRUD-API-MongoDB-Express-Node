const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter a name, its required"]
        },

        quantity: {
            type: Number,
            required: true
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },

        image: {
            type: String,
            required: false, 
        },
    },

    {
        timestamps: true, // creates & records updatedAt and createdAt timestamps
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; 