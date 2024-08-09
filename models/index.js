const User = require('./User');
const Category = require("./category");
const Discs = require("./discs");
const Plastic = require("./plastic");
const UserDiscs = require('./UserDiscs');

User.belongsToMany(Discs, {
    through: UserDiscs,
    foreignKey: 'user_id'
});


Discs.belongsToMany(User, {
    through: UserDiscs,
    foreignKey: 'disc_id'
});

Discs.belongsTo(Category, {
    foreignKey: 'category_id'
})

Category.hasMany(Discs, {
    foreignKey: 'category_id'
});

Discs.belongsTo(Plastic, {
    foreignKey: 'plastic_id'
})

Plastic.hasMany(Discs, {
    foreignKey: 'plastic_id'
});



module.exports = {
    User,
    Category,
    Discs,
    Plastic,
    UserDiscs
};

