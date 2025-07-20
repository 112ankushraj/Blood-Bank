const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const {
  getDonarListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const { getHospitalController } = require("../controllers/inventoryController");
//Router object
const router = express.Router();

//Routes

//GET || Donar LIst
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarListController
);

//GET || Hospital LIst
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

//GET || ORG LIst
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

// *********************************************************************************************** //

//Delet Donar || GET
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);


//Export

module.exports = router;
