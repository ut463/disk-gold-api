const { Plastic } = require('../models');

const plasticData = [
    {
        plastic_name: 'Z',
    },
    {
        plastic_name: 'Z LITE',
    },
    {
        plastic_name: 'Big Z',
    },
    {
        plastic_name: 'ESP',
    },
    {
        plastic_name: 'Jawbreaker',
    },
    {
        plastic_name: 'Z/Jawbreaker Blend',
    },
    {
        plastic_name: 'ESP/Jawbreaker Blend',
    },
    {
        plastic_name: 'Rubber Blend',
    },
    {
        plastic_name: 'Crystal',
    },
    {
        plastic_name: 'Titanium',
    },
    {
        plastic_name: 'ESP Flex',
    },
    {
        plastic_name: 'Flex',
    },
    {
        plastic_name: 'PRO D',
    },
    {
        plastic_name: 'X',
    },
];

const seedPlastic = () => Plastic.bulkCreate(plasticData);

module.exports = seedPlastic;