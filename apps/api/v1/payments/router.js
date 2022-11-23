const express = require('express');
const router = express();
const { create, index, find, update, destroy } = require('./controller');
const { authenticateUser, authenticateRoles } = require('../../../middlewares/auth');

router.get('/payments', authenticateUser, authenticateRoles('organizer'), index);
router.get('/payments/:id', authenticateUser, authenticateRoles('organizer'), find);
router.put('/payments/:id', authenticateUser, authenticateRoles('organizer'), update);
router.delete('/payments/:id', authenticateUser, authenticateRoles('organizer'), destroy);
router.post('/payments', authenticateUser, authenticateRoles('organizer'), create);

module.exports = router;
