import express from "express";
import album  from "../Data/AlbumData.js";



const albumRoutes = express.Router()

albumRoutes.get("/",(req,res)=>{
    res.status(200).send({stutes:"sucess",data:album})
})

export default albumRoutes