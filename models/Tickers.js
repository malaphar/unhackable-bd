const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Tickers extends Model {} Tickers.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ticker: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tickers'
});

module.exports = Tickers;
