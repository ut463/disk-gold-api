const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Discs extends Model {};

Discs.init(
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
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "category", 
                key: "id",
            },
        },
        plastic_id: {
            type: DataTypes.STRING,
            references: {
                model: "plastic",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "discs",
    },
);

module.exports = Discs;