const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class UserDisc extends Model { }

UserDisc.init(
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
                model: "disc",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user_disc",
    },
);

module.exports = UserDisc;
