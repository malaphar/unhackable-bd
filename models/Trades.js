const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Trades extends Model {} Trades.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    trade_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: true
    },    
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        }
      }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trades'
});

module.exports = Trades;
