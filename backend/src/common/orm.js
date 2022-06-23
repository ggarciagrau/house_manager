
const { Sequelize, Model, DataTypes } = require('sequelize');
const { db } = require("../env");

const sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    port: 3306,
    dialect: 'mysql',
    logging: false,
})

class DayConcepts extends Model { }
DayConcepts.init({
    Id: {
        field: "id",
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        field: "name",
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'DayConcepts',
    tableName: 'day_concepts',
    timestamps: false
});

class Plates extends Model { }
Plates.init({
    Id: {
        field: "id",
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        field: "name",
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Plates',
    tableName: 'plates',
    timestamps: false
});

module.exports = {
    DayConcepts,
    Plates
}