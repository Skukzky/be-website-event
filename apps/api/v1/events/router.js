const express = require('express');
const router = express();
const { create, index, find, update, destroy, changeStatus } = require('./controller');

const { authenticateUser, authenticateRoles } = require('../../../middlewares/auth');

router.get('/events', authenticateUser, authenticateRoles('organizer'), index);
router.get('/events/:id', authenticateUser, authenticateRoles('organizer'), find);
router.put('/events/:id', authenticateUser, authenticateRoles('organizer'), update);
router.delete('/events/:id', authenticateUser, authenticateRoles('organizer'), destroy);
router.post('/events', authenticateUser, authenticateRoles('organizer'), create);

router.put('/events/:id/status', authenticateUser, authenticateRoles('organizer'), changeStatus);

module.exports = router;
