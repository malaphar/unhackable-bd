const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Settings extends Model {} Settings.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    auth_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin_username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin_pass: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'settings'
});

module.exports = Settings;
