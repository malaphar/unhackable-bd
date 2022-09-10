const sequelize = require('../config/connection');
const { User, Trades, Settings, Messages } = require('../models');

const userData = require('./userData.json');
const msgData = require('./msgData.json');
const tradeData = require('./tradeData.json');
const settingsData = require('./settingsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Trades.bulkCreate(tradeData, {
    individualHooks: true,
    returning: true,
  });

  await Settings.bulkCreate(settingsData, {
    individualHooks: true,
    returning: true,
  });

  await Messages.bulkCreate(msgData, {
    individualHooks: true,
    returning: true,
  });
  
  process.exit(0);
};

seedDatabase();
