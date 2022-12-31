const express = require("express")
const notes = require("./data/notes")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

const noteRoutes = require('./routes/noteRoutes')
const userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler } = require("./middlwares/errors.Middlewares")
// const cors = require("cors")



const app = express()
dotenv.config()
connectDB()
app.use(express.json())
// app.use(express.urlencoded({
//    extended: true
// }));
// app.use(cors({
//    origin: "http://localhost:3000",
// }))


app.get("/", (req, res) => {
   res.send("Hello from server")
})


app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
   console.log(`server is started on port ${PORT}`)
})