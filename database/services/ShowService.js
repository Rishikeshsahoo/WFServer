const Show= require("../models/ShowModel")
const UserModal = require("../models/UserModel")

const getByIdAndData=async (params)=>{
    console.log(params)
    const show=await Show.find(params)
    return (show)
}

const addShow=async (params)=>{
    const th_name=params.th_name;
    const date=params.date
    const show=await Show.find({th_name:th_name,date:date})
    if(show && !show.length)
    {
        const newshow= new Show(params);
        await newshow.save()
        return;
    }
    
    show[0].shows.nine.forEach((it,idx)=>{
        if(it==='-1' && params.shows[idx]!=='-1')
        {
            show[0].shows.nine[idx]=params.shows.nine[idx];
        }
    })
    show[0].shows.ten.forEach((it,idx)=>{
        if(it==='-1' && params.shows[idx]!=='-1')
        {
            show[0].shows.ten[idx]=params.shows.ten[idx];
        }
    })
    show[0].shows.twelve.forEach((it,idx)=>{
        if(it==='-1' && params.shows[idx]!=='-1')
        {
            show[0].shows.twelve[idx]=params.shows.twelve[idx];
        }
    })
    console.log(show[0].shows.nine)
    await show[0].save();

}

module.exports={getByIdAndData,addShow}