const { Plates } = require("../../common/orm");
const platesDao = {}

platesDao.create = (plate) => Plates.create(plate);

module.exports = platesDao;