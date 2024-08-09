const router = require("express").Router();
const { User, Category, Discs, UserDiscs, Plastic } = require("/../models");



//get all discs
router.get('/', (req, res) => {
    Discs.findAll({
        include: [
            Category,
            {
                model: Discs,
                through: UserDiscs
            },
        ]
    }),
})
    .then((discs) => res.json(discs))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

module.exports = router;

