const router = require("express").Router();
const { Category, Disc } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: [{ model: Disc, attributes: {
                exclude: ['category_id']
            }, }],
        });
        res.status(200).json(categories);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "no no no, not in my house" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, {
            include: [{ model: Disc, attributes: {
                exclude: ['category_id']
            }, }],
        });
        if (!category) {
            res.status(404).json({ message: "no no no, not in my house" });
            return;
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;