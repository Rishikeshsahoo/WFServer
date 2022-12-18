const mongoose= require("mongoose")
const castSchema=new mongoose.Schema({
    name:String,
    imageURL:String,
    role:String
})

const commentSchema= new mongoose.Schema({
    title:String,
    by:String,
    content:String,
    rating:String
})

const movieSchema=new mongoose.Schema({

    title:String,
    description:String,
    rating:String,
    cast:[castSchema],
    crew:[castSchema],
    comments:[commentSchema],
    cardURL:String,
    bannerURL:String

})



module.exports=mongoose.model("Movies",movieSchema)