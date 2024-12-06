import express from "express";
import  users  from "../Data/usersData.js";



const usersRoutes = express.Router()

usersRoutes.get("/",(req,res)=>{
    res.status(200).send({stutes:"sucess",data:users})
})

export default usersRoutes