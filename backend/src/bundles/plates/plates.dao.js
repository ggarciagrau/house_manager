const { Plates } = require("../../common/orm");
const platesDao = {}

platesDao.create = (plate) => Plates.create(plate);

platesDao.readAll = () => Plates.findAll();

platesDao.delete = (id) => Plates.destroy({
    where: {
        id
    }
});

module.exports = platesDao;