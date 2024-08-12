const User = require('./User');
const Category = require("./category");
const Disc = require("./disc");
const Plastic = require("./plastic");
const UserDisc = require('./UserDisc');

User.belongsToMany(Disc, {
    through: UserDisc,
    foreignKey: 'user_id'
});


Disc.belongsToMany(User, {
    through: UserDisc,
    foreignKey: 'disc_id'
});

Disc.belongsTo(Category, {
    foreignKey: 'category_id'
})

Category.hasMany(Disc, {
    foreignKey: 'category_id'
});

Disc.belongsToMany(Plastic, {
    foreignKey: 'disc_id',
    through: 'DiscPlastic',
})

Plastic.belongsToMany(Disc, {
    foreignKey: 'plastic_id',
    through: 'DiscPlastic',
});



module.exports = {
    User,
    Category,
    Disc,
    Plastic,
    UserDisc,
};
