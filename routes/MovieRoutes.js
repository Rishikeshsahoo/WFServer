const express= require('express')
const MovieServices= require("../database/services/MovieService")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send({success:true,message:"we are in movies routes"})
})

router.post("/addmovie",async (req,res)=>{
    const data= req.body;
    try{
    await MovieServices.addMovie(data)
    res.send(data)
    }
    catch(err)
    {
        res.send({success:false,message:err.message})
    }
})


module.exports=router