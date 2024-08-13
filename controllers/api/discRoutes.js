const router = require("express").Router();
const withAuth = require("../../middleware/auth");
const { User, Category, Disc, UserDisc, Plastic } = require("../../models");

//get all discs
router.get('/', (req, res) => {
    Disc.findAll({
        include: [
            Category,
            {
                model: User,
                through: UserDisc
            },
        ]
    })
    .then((discs) => res.json(discs))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

// /api/discs (POST)
router.post('/', withAuth, async (req, res) => {
    try {
        const obj = {
            disc_id: req.body.disc_id,
            user_id: req.session.user_id
        }

        const userDisc = await UserDisc.create(obj);

        res.status(200).json(userDisc);

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
