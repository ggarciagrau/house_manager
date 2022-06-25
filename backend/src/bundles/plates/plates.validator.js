const { check, param } = require("express-validator");
const validationHelper = require("../../common/validateHelper");

const validateCreate = [
    check("Name")
        .exists()
        .isLength({ min: 1 }),
    (req, res, next) => validationHelper(req, res, next)
];

const validateDelete = [
    param("id")
        .exists()
        .toInt()
        .isNumeric(),
    (req, res, next) => validationHelper(req, res, next)
];

// const validateCreate = [
//     check("Name")
//         .exists()
//         .not()
//         .isEmpty(),
//     check("ClientCode")
//         .exists()
//         .isNumeric(),
//     check("Phone")
//         .exists()
//         .isNumeric(),
//     check("Email")
//         .exists()
//         .isEmail(),
//     check("ResponsibleEmail")
//         .exists()
//         .isEmail(),
//     check("Password")
//         .exists()
//         .not()
//         .isEmpty()
//         .isLength({ min: 8 })
//         .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).withMessage("The password does not meet the requirements"),
//     check("PasswordConfirmation")
//         .exists()
//         .custom((value, { req }) => {
//             if (value !== req.body?.Password) {
//                 throw new Error('Password confirmation does not match with password')
//             }
//             return true;
//         }),
//     (req, res, next) => validationHelper(req, res, next)
// ];

module.exports = {
    validateCreate,
    validateDelete
}