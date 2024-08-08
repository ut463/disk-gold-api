const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
