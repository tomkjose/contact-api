const express = require("express");
const router = express.Router();
const contactApi = require("../../../controllers/contact_api");

router.post("/create", contactApi.create);
router.get("/", contactApi.display);
router.delete("/:id", contactApi.destroy);

module.exports = router;
