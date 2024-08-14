const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Disc extends Model {};

Disc.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        }, 
        discs_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        discs_flight: {
            type: DataTypes.STRING,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "category", 
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "disc",
    },
);

module.exports = Disc;