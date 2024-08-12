const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // get the discs here
    // const discs = await 

    // console.log(disc);
    // pass them in here
    res.render('disk', {
      logged_in: true,
      discs
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
