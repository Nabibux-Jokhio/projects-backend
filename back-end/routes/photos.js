import express from "express";
import  photo  from "../Data/photoData.js";



const photoRoutes = express.Router()

photoRoutes.get("/",(req,res)=>{
    res.status(200).send({stutes:"sucess",data:photo})
})

export default photoRoutes