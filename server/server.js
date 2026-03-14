const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.get("/",(req,res)=>{
res.send("Katkar Events API Running")
})

app.get("/events",(req,res)=>{
res.json([
{ name:"Wedding Planning", location:"Pune"},
{ name:"Corporate Event", location:"Mumbai"},
{ name:"Birthday Party", location:"Nagpur"}
])
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log("Server running on port "+PORT)
})
