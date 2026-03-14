
const mongoose=require("mongoose");

const GallerySchema=new mongoose.Schema({
 imageUrl:String,
 eventType:String
});

module.exports=mongoose.model("Gallery",GallerySchema);
