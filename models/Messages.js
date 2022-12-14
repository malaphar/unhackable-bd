const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Messages extends Model {} Messages.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'messages'
});

module.exports = Messages;
