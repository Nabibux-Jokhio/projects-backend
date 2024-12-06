import express from "express";
import  posts  from "../Data/PostsData.js";

const postsRoutes = express.Router()

postsRoutes.get("/",(req,res)=>{
    res.status(200).send({stutes:"sucess",data:posts})
})

export default postsRoutes