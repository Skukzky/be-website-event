const express = require('express');
const router = express();
const { create, index, find, update, destroy } = require('./controller');
const { authenticateRoles, authenticateUser } = require('../../../middlewares/auth');

router.get('/talents', authenticateUser, authenticateRoles('organizer'), index);
router.get('/talents/:id', authenticateUser, authenticateRoles('organizer'), find);
router.put('/talents/:id', authenticateUser, authenticateRoles('organizer'), update);
router.delete('/talents/:id', authenticateUser, authenticateRoles('organizer'), destroy);
router.post('/talents', authenticateUser, authenticateRoles('organizer'), create);

module.exports = router;
