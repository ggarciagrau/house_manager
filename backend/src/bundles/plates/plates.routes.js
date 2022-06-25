const { Router } = require("express");
const router = Router();
const controller = require("./plates.controller");
const { validateCreate, validateDelete } = require("./plates.validator");

router.route("/")
    .get(controller.readAll)
    .post([validateCreate], controller.create);

router.route("/:id").delete([validateDelete], controller.delete);

module.exports = router;