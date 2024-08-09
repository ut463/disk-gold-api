const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const bag = require('./bag-page');
const disk = require('./disk-page');
const login = require('./login-page');

router.use('/bag', withAuth, bag);

router.use('/disk', withAuth, disk);

router.use('/login', login);

router.get('/', (req, res) => {
  return res.render('welcome', {
    logged_in: req.session.logged_in
  });
});

router.get('*', (req, res) => {
  return res.render('404', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;