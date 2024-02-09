const express = require("express");
const router = express.Router();
const {
  createData1,
  createData2,
  createData3,
} = require("../controllers/formController");

router.post("/form1", createData1);
router.post("/form2", createData2);
router.post("/form3", createData3);

module.exports = router;
