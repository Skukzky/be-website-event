const express = require('express');
const router = express();
const { index, create, find, update, destroy } = require('./controller');
const { authenticateUser, authenticateRoles } = require('../../../middlewares/auth');

// GET ALL
router.get('/categories', authenticateUser, authenticateRoles('organizer'), index);
// GET BY ID
router.get('/categories/:id', authenticateUser, authenticateRoles('organizer'), find);

// POST
router.post('/categories', authenticateUser, authenticateRoles('organizer'), create);

// UPDATE
router.put('/categories/:id', authenticateUser, authenticateRoles('organizer'), update);

// DELETE
router.delete('/categories/:id', authenticateUser, authenticateRoles('organizer'), destroy);

module.exports = router;
