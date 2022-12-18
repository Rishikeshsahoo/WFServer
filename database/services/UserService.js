const User= require("../models/UserModel")


const addUser=async (params)=>{
    const user= new User(params);
    await user.save();
}


const deductFunds=async (username,count,newBookedShow,th_name,date)=>{
    const user=await User.findOne({username:username});
    if(user.funds<(count*150))return false;
    const bookedShows=user.bookedShows;

    var found=false;
    user.funds=user.funds-(150*count);
    user.bookedShows.forEach((it,idx)=>{
        if(it.th_name===th_name && it.date===date)
        {
            found=true;
            user.bookedShows[idx].nine=[...it.nine,...newBookedShow.nine];
            user.bookedShows[idx].ten=[...it.ten,...newBookedShow.ten];
            user.bookedShows[idx].twelve=[...it.twelve,...newBookedShow.twelve];
        }
    })

    if(!found)
    {
        user.bookedShows.push({
            th_name:th_name,
            date:date,
            nine:[...newBookedShow.nine],
            ten:[...newBookedShow.ten],
            twelve:[...newBookedShow.twelve]
        })
    }

    await user.save();

    return true;

}

module.exports={
    addUser,
    deductFunds
}