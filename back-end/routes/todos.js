import express from "express";
import { todos } from "../Data/todosData.js";



const todosRoutes = express.Router()
todosRoutes.get("/",(req,res)=>{
    res.status(200).send({stutes:"sucess",data:todos})
})

export default todosRoutes