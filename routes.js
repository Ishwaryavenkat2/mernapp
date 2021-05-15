const express = require("express");
const router = express.Router();
const userControllr = require("./controller");

router.post("/", userControllr.create);
router.get("/employee", userControllr.findAll);
router.get("/:id", userControllr.findOne);
router.put("/:id", userControllr.UpdateUser);
router.delete("/:id", userControllr.delete);
module.exports = router;