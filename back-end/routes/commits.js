import express from "express";
import commits from "../Data/CommitsData.js";


const commitRoutes = express.Router()

//  dfgdlgjdflk;gdf;
commitRoutes.get("/",(req,res)=>{
    res.status(200).send({stutes:"sucess",data:commits})
})

export default commitRoutes