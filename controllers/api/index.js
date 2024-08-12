const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const plasticRoutes = require('./plasticRoutes');
const discRoutes = require('./discRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/plastics', plasticRoutes);
router.use('/discs', discRoutes)

module.exports = router;
