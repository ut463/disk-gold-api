const { Discs } = require('../models/discs');

const discData = [
    {
        discs_name: 'Nuke',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Nuke OS',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Nuke SS',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Venom',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Force',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Zeus',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Crank',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Crank SS',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Hades',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Thrasher',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Captains Thrasher',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Surge',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Surge SS',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Scorch',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Avenger SS',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Machete',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Anax',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Flick',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Predator',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Vulture',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Captains Raptor',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Raptor',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Undertaker',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Heat',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Passion',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Mantis',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Athena',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Stalker',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Cicada',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Sting',
        plastic: 'Z',
        category_id: 2,
    },
    {
        discs_name: 'Malta',
        plastic: 'Z',
        category_id: 3,
    },
    {
        discs_name: 'Buzzz',
        plastic: 'Z',
        category_id: 3,
    },
    {
        discs_name: 'Buzzz SS',
        plastic: 'Z',
        category_id: 3,
    },
    
    {
        discs_name: 'Buzzz OS',
        plastic: 'Z',
        category_id: 3,
    },
    
    {
        discs_name: 'Wasp',
        plastic: 'Z',
        category_id: 3,
    },
    
    {
        discs_name: 'Zombee',
        plastic: 'Z',
        category_id: 3,
    },
    {
        discs_name: 'Archer',
        plastic: 'Z',
        category_id: 3,
    },
    {
        discs_name: 'Stratus',
        plastic: 'Z',
        category_id: 3,
    },
    {
        discs_name: 'Meteor',
        plastic: 'Z',
        category_id: 3,
    },
    {
        discs_name: 'Sol',
        plastic: 'Z',
        category_id: 3,
    },
    {
        discs_name: 'Comet',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Zone',
        plastic: 'Z',
        category_id: 4,
    },
    {
        discs_name: 'None OS',
        plastic: 'Z',
        category_id: 4,
    },
    {
        discs_name: 'Ringer',
        plastic: 'Z',
        category_id: 4,
    },
    {
        discs_name: 'Ringer GT',
        plastic: 'Z',
        category_id: 4,
    },
    {
        discs_name: 'Fierce',
        plastic: 'Z',
        category_id: 4,
    },
    {
        discs_name: 'Luna',
        plastic: 'Z',
        category_id: 5,
    },
    {
        discs_name: 'Banger GT',
        plastic: 'Z',
        category_id: 5,
    },
    {
        discs_name: 'Challenger',
        plastic: 'Z',
        category_id: 5,
    },
    {
        discs_name: 'Challenger OS',
        plastic: 'Z',
        category_id: 5,
    },
    {
        discs_name: 'Challenger SS',
        plastic: 'Z',
        category_id: 1,
    },
    {
        discs_name: 'Focus',
        plastic: 'Z',
        category_id: 5,
    },
    {
        discs_name: 'Roach',
        plastic: 'Z',
        category_id: 5,
    },
    {
        discs_name: 'Magnet',
        plastic: 'Z',
        category_id: 5,
    },    
];

const seedDiscs = () => Discs.bulkCreate(discData);

module.exports= seedDiscs;