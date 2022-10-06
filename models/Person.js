const database= require ("../config/sequelize")
const Sequelize = require('sequelize')
const Person = database.define("Person",
    {id: {
    type:Sequelize.DataTypes.INTERGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
 },
    email: {
        type: Sequelize.DataTypes.STRING(30),
        AllowNull: false,
    },
senha: {
    type:Sequelize.DataTypes.INTERGER.UNSIGNED,
    type: Sequelize.DataTypes.STRING(30),
    AllowNull: false,

}, })

module.exports = Person