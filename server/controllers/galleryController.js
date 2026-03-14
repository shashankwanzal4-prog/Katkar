
const Gallery=require("../models/Gallery");

exports.getGallery=async(req,res)=>{
 const data=await Gallery.find();
 res.json(data);
};
