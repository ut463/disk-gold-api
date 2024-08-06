const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Distance Drivers',
    },
    {
        category_name: 'Fairway Drivers',
    },
    {
        category_name: 'Mid Range',
    },
    {
        category_name: 'Putt and Approach',
    },
    {
        category_name: 'Putters',
    },
    {
        category_name: 'Misc Gear'
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;