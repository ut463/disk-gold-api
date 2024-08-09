const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class UserDiscs extends Model { }

UserDiscs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        disc_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "discs",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user_discs",
    },
);

module.exports = UserDiscs;
