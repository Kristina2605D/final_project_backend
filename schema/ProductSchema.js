import mongoose from "mongoose";
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },

    imgUrl: {
        type: String,
        required: true,
    },

    categories: {
        type: Array,
        default: [],
        required: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model('Furniture', ProductSchema);