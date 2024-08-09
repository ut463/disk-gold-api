const router = require("express").Router();
const { Discs, Plastic, Category, User } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const plastics = await Plastic.findAll({ 
            include: [{
                model: Category
            }, 
                { model: Discs }
            ],
        });
        res.status(200).json(plastics);
    } catch (err) {
        res.status(500).json({ message: "no no no! not in my house"});
    }
});

module.exports = router;