
const Testimonial=require("../models/Testimonial");

exports.getTestimonials=async(req,res)=>{
 const data=await Testimonial.find();
 res.json(data);
};
