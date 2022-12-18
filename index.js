const express =require('express')
const db=require("./database/db")
const User=require('./database/models/ShowModel')
const cors = require('cors')
const app=express()
const port=7000;
app.use(express.json())
app.use(express.urlencoded({extended:true,limit:"50mb"}))
app.use(cors({
    origin:'http://localhost:4200'
}))

// ___________________all routers here______________________________
const userRouter = require("./routes/UserRoutes")
const moviesRouter = require("./routes/MovieRoutes")
const theatreRouter = require("./routes/TheatreRoutes")
const showRouter = require("./routes/ShowRoutes")

app.use("/user",userRouter)
app.use("/movies",moviesRouter)
app.use("/theatre",theatreRouter)
app.use("/show",showRouter)
//__________________________________________________________________

// base routes here
app.get("/", (req,res)=>{
    
    res.send({success:true,message:"Server is working"})
})

app.listen(port,()=>{console.log(`server started at port ${port}`)})