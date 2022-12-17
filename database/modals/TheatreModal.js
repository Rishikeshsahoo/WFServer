const mongoose= require("mongoose")

const theatreSchema= new mongoose.Schema({
    name:String,
    address:String,
    description:String
})