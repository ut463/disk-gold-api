const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Plastic extends Model {}

Plastic.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        }, 
        plastic_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "plastic",
    },
);

module.exports = Plastic;