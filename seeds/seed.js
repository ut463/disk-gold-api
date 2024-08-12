const sequelize = require('../config/connection');
const { User } = require('../models');
const userData = require('./userData.json');
const seedCategories = require('./category-seeds');
const seedDiscs = require('./disc-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedCategories();
  await seedDiscs();

  process.exit(0);
};

seedDatabase();
