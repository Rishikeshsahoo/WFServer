const express= require('express')
const ShowService= require("../database/services/ShowService")
const UserService= require("../database/services/UserService")

const router = express.Router()

router.get("/",(req,res)=>{
    res.send({success:true,message:"we are in show routes"})
})


router.post("/createShow",async (req,res)=>{
    const data=req.body;
    data.shows={
        nine:new Array(250).fill("-1"),
        ten:new Array(250).fill("-1"),
        twelve:new Array(250).fill("-1")
    }
    const count=data.bookedShow.nine.length+data.bookedShow.ten.length+data.bookedShow.twelve.length;

    const bookedShow=data.bookedShow;
    bookedShow.nine.forEach((it) => {
        data.shows.nine[it]=data.username
    });
    bookedShow.ten.forEach((it) => {
        data.shows.ten[it]=data.username
    });
    bookedShow.twelve.forEach((it) => {
        data.shows.twelve[it]=data.username
    });
    const newData={
        th_name:data.th_name,
        date:data.date,
        movieName:data.movieName,
        shows:data.shows
    }
    try{
    const funds=await UserService.deductFunds(data.username,count,data.bookedShow,data.th_name,data.date)
    if(funds)
        await ShowService.addShow(newData)
    res.send({success:true})
    }
    catch(err){
    res.send({success:false,message:err.message})

    }
})

router.post("/getShow",async (req,res)=>{
    const data=req.body;
    try
    {
    const filteredData= await ShowService.getByIdAndData(data);
    if(filteredData.length===0)
    {
        res.send({empty:true,data:filteredData})
    }
    else res.send({empty:false,data:filteredData})
    }
    catch(err){
        res.send({success:false,message:err.message})
    }
})





module.exports=router