const express = require("express");
const { add, get } = require("../controllers");
const router = express.Router();

// /api/add
router.post("/add", add);

// /api/get
router.get("/get", get);

module.exports = router;