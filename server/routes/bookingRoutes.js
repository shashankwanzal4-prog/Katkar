
const router=require("express").Router();
const controller=require("../controllers/bookingController");

router.post("/",controller.createBooking);

module.exports=router;
