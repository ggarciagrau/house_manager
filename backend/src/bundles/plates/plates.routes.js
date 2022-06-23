const { Router } = require("express");
const router = Router();
const platesController = require("./plates.controller");
const { validateCreate } = require("./plates.validator");

router.route("/")
    .post([validateCreate], platesController.create);

module.exports = router;