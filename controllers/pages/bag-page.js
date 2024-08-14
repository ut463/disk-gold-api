const router = require('express').Router();
const { User, Disc, UserDisc, Category } = require('../../models');

// Use withAuth middleware to prevent access to route
router.get('/', async (req, res) => {
  console.log('hit')
  try {
    // Find the logged in user based on the session ID
    const data = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: {
        model: Disc,
        include: Category
      },
    });

    const userData = data.get({ plain: true });

    console.log(userData.discs);

    res.render('bag', {
      ...userData,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
