const { Router } = require("express");
const router = Router();

const {
    get
} = require("./day_concepts.controller")

router.route('/')
    .get(get);

module.exports = router;