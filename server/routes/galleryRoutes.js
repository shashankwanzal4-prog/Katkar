
const router=require("express").Router();
const controller=require("../controllers/galleryController");

router.get("/",controller.getGallery);

module.exports=router;
