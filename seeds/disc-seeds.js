const { Disc } = require('../models/');

const discData = [
    {
        discs_name: 'Nuke',
        category_id: 1,
    },
    {
        discs_name: 'Nuke OS',
        category_id: 1,
    },
    {
        discs_name: 'Nuke SS',
        category_id: 1,
    },
    {
        discs_name: 'Venom',
        category_id: 1,
    },
    {
        discs_name: 'Force',
        category_id: 1,
    },
    {
        discs_name: 'Zeus',
        category_id: 1,
    },
    {
        discs_name: 'Crank',
        category_id: 1,
    },
    {
        discs_name: 'Crank SS',
        category_id: 1,
    },
    {
        discs_name: 'Hades',
        category_id: 1,
    },
    {
        discs_name: 'Thrasher',
        category_id: 1,
    },
    {
        discs_name: 'Captains Thrasher',
        category_id: 1,
    },
    {
        discs_name: 'Surge',
        category_id: 1,
    },
    {
        discs_name: 'Surge SS',
        category_id: 1,
    },
    {
        discs_name: 'Scorch',
        category_id: 1,
    },
    {
        discs_name: 'Avenger SS',
        category_id: 1,
    },
    {
        discs_name: 'Machete',
        category_id: 1,
    },
    {
        discs_name: 'Anax',
        category_id: 1,
    },
    {
        discs_name: 'Flick',
        category_id: 1,
    },
    {
        discs_name: 'Predator',
        category_id: 2,
    },
    {
        discs_name: 'Vulture',
        category_id: 2,
    },
    {
        discs_name: 'Captains Raptor',
        category_id: 2,
    },
    {
        discs_name: 'Raptor',
        category_id: 2,
    },
    {
        discs_name: 'Undertaker',
        category_id: 2,
    },
    {
        discs_name: 'Heat',
        category_id: 2,
    },
    {
        discs_name: 'Passion',
        category_id: 2,
    },
    {
        discs_name: 'Mantis',
        category_id: 2,
    },
    {
        discs_name: 'Athena',
        category_id: 2,
    },
    {
        discs_name: 'Stalker',
        category_id: 2,
    },
    {
        discs_name: 'Cicada',
        category_id: 2,
    },
    {
        discs_name: 'Sting',
        category_id: 2,
    },
    {
        discs_name: 'Malta',
        category_id: 3,
    },
    {
        discs_name: 'Buzzz',
        category_id: 3,
    },
    {
        discs_name: 'Buzzz SS',
        category_id: 3,
    },
    
    {
        discs_name: 'Buzzz OS',
        category_id: 3,
    },
    
    {
        discs_name: 'Wasp',
        category_id: 3,
    },
    
    {
        discs_name: 'Zombee',
        category_id: 3,
    },
    {
        discs_name: 'Archer',
        category_id: 3,
    },
    {
        discs_name: 'Stratus',
        category_id: 3,
    },
    {
        discs_name: 'Meteor',
        category_id: 3,
    },
    {
        discs_name: 'Sol',
        category_id: 3,
    },
    {
        discs_name: 'Comet',
        category_id: 1,
    },
    {
        discs_name: 'Zone',
        category_id: 4,
    },
    {
        discs_name: 'None OS',
        category_id: 4,
    },
    {
        discs_name: 'Ringer',
        category_id: 4,
    },
    {
        discs_name: 'Ringer GT',
        category_id: 4,
    },
    {
        discs_name: 'Fierce',
        category_id: 4,
    },
    {
        discs_name: 'Luna',
        category_id: 5,
    },
    {
        discs_name: 'Banger GT',
        category_id: 5,
    },
    {
        discs_name: 'Challenger',
        category_id: 5,
    },
    {
        discs_name: 'Challenger OS',
        category_id: 5,
    },
    {
        discs_name: 'Challenger SS',
        category_id: 1,
    },
    {
        discs_name: 'Focus',
        category_id: 5,
    },
    {
        discs_name: 'Roach',
        category_id: 5,
    },
    {
        discs_name: 'Magnet',
        category_id: 5,
    },    
];

const seedDiscs = () => Disc.bulkCreate(discData);

module.exports= seedDiscs;