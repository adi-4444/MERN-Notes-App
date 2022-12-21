const express = require("express")
const notes = require("./data/notes")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")



const app = express()
dotenv.config()
connectDB()

app.use(cors({
   origin: "http://localhost:3000",
}))

app.get("/", (req, res) => {
   res.send("API is Runnging")
})

app.get("/api/notes", (req, res) => {
   res.send(notes)
})

app.get("/api/users", userRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
   console.log(`server is started on port ${PORT}`)
})