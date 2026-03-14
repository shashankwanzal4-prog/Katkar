
const mongoose=require("mongoose");

const TestimonialSchema=new mongoose.Schema({
 name:String,
 review:String
});

module.exports=mongoose.model("Testimonial",TestimonialSchema);
