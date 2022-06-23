const DayConceptsDao = require("./day_concepts.dao");

const dayConceptsController = {};

dayConceptsController.get = async (req, res) => {
    res.send(await DayConceptsDao.get());
}

module.exports = dayConceptsController;