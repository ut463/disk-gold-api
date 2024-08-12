const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const plasticRoutes = require('./plasticRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/plastics', plasticRoutes);

module.exports = router;
