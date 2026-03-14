const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.get("/",(req,res)=>{
res.send("Katkar Events API Running")
})

/* CONTACT FORM API */
app.post("/contact",(req,res)=>{

const {name,email,phone,eventType,message}=req.body

console.log("New Contact Request:")
console.log(name,email,phone,eventType,message)

res.json({
success:true,
message:"Contact form submitted successfully"
})

})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
console.log("Server running on port "+PORT)
})
