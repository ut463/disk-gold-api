const sequelize = require('../config/connection');
const { User } = require('../models');
const seedCategories = require('./category-seeds');
const seedDistanceDrivers = require('./distance-drivers');
const seedFairwayDrivers = require('./fairway-drivers');
const seedMidRange = require('./mid-range');
const seedPuttAndApproach = require('./putt-and-approach');
const seedPutters = require ('./putters');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedDistanceDrivers();
  console.log('\n----- DISTANCE DRIVERS SEEDED-----\n');

  await seedFairwayDrivers();
  console.log('\n----- FAIRWAY DRIVERS SEEDED -----\n');

  await seedMidRange();
  console.log('\n----- MID RANGE SEEDED -----\n');

  await seedPuttAndApproach();
  console.log('\n----- PUTT AND APPROACH SEEDED -----\n');

  await seedPutters();
  console.log('\n----- PUTTERS SEEDED -----\n');

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
