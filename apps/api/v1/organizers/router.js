const express = require('express');
const router = express();
const { createCMSOrganizer, createCMSUser, getCMSUsers } = require('./controller');

// Middleware
const { authenticateUser, authenticateRoles } = require('../../../middlewares/auth');

router.post('/organizers', authenticateUser, authenticateRoles('owner'), createCMSOrganizer);
router.post('/users', authenticateUser, authenticateRoles('organizer'), createCMSUser);
router.get('/users', authenticateUser, authenticateRoles('owner'), getCMSUsers);
module.exports = router;
