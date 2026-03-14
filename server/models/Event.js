
const mongoose=require("mongoose");

const EventSchema=new mongoose.Schema({
 title:String,
 category:String,
 description:String,
 price:Number
});

module.exports=mongoose.model("Event",EventSchema);
