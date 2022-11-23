const express = require('express');
const router = express();
const { index } = require('./controller');
const { authenticateUser, authenticateRoles } = require('../../../middlewares/auth');

router.get('/orders', authenticateUser, authenticateRoles('organizer', 'admin', 'owner'), index);

module.exports = router;
