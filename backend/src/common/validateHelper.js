const { validationResult } = require("express-validator");

const validationHelper = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (ex) {
        res.status(403);
        res.send({ errors: ex.array() });
    }
}

module.exports = validationHelper;