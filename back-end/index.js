import express from "express"
import dotenv from "dotenv"
import postsRoutes from "./routes/posts.js"
import photoRoutes from "./routes/photos.js"
import commitRoutes from "./routes/Commits.js"
import albumRoutes from "./routes/album.js"
import todosRoutes from "./routes/todos.js"
import usersRoutes from "./routes/users.js"

const app = express()
dotenv.config()
const Port = process.env.Port || 8000   

app.get("/", (req, res) => {
    res.status(200).send("welcome to back end")
})


app.use("/posts",postsRoutes)
app.use("/commits",commitRoutes)
app.use("/photos",photoRoutes)
app.use("/albums",albumRoutes)
app.use("/todos",todosRoutes)
app.use("/users",usersRoutes)



app.get("*", (req, res) => {
    res.status(404).send("page not  found")
})

app.listen(Port, () => {
    console.log("sever star", Port);
})