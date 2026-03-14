
const router=require("express").Router();
const controller=require("../controllers/testimonialController");

router.get("/",controller.getTestimonials);

module.exports=router;
