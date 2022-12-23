import mongoose from "mongoose";
const Schema = mongoose.Schema;


const ContactSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: true,
    },


}, {
    timestamps: true,
})

export default mongoose.model('Contact', ContactSchema);