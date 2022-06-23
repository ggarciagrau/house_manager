const { DayConcepts } = require("../../common/orm");

const DayConceptsDao = {};

DayConceptsDao.get = () => DayConcepts.findAll();

module.exports = DayConceptsDao;