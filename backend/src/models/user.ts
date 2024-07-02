import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    authOid: {
        type: String,
        required: true
    },
    emal: {
        type: String,
        required: true,
    },
    name:{
        type: String,
    },
    addressLine1: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
})

const User = mongoose.model("User", userSchema);
export default User;