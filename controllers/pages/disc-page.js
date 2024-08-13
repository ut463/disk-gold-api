const router = require('express').Router();
const { User, Category, Disc, UserDisc, Plastic } = require("../../models");

// /discs
router.get('/', async (req, res) => {
  try {

    const discs = await Disc.findAll({
      include: [
        Category,
        {
          model: User,
          through: UserDisc
        },
      ],
      raw: true,
      nest: true,
    });


    res.render('disc', {
      logged_in: true,
      discs
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

