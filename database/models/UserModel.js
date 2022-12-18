const mongoose= require("mongoose")

const userShow=new mongoose.Schema({
    th_name:String,
    date:String,
    nine:[Number],
    ten:[Number],
    twelve:[Number]
})
const userSchema= new mongoose.Schema({
    username:String,
    password:String,
    bookedShows:[userShow],
    funds:Number
})


module.exports= mongoose.model("User",userSchema)