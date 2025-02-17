var express = require("express");
const { add, get } = require("../controllers");
var router = express.Router();

/* GET home page. */
router.post("/add", add);

router.get("/get", get);

module.exports = router;
