const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { bloodGroupDeatailsController } = require("../controllers/analyticsController");


const router = express.Router();

//routes


// GET BLOOD DATA
router.get("/bloodGroups-data", authMiddleware, bloodGroupDeatailsController);




module.exports = router;
