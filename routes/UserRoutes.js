const express= require('express')
const UserService = require("../database/services/UserService")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send({success:true,message:"we are in user routes"})
})

router.post("/createUser",async (req,res)=>{
    const data=req.body;
    try{
    await UserService.addUser(data)
    res.send({success:true,data:data})
    }
    catch(err)
    {
        res.send({success:false,message:err.message})
    }
    
})

module.exports=router