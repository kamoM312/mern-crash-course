import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true //createdAt, updatedAt field for each document
});

// 'Product' - tells mongoose to create a collection called Product
// productSchema - use this schema
const Product = mongoose.model("Product", productSchema);

export default Product;