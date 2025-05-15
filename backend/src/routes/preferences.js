const express = require('express');
const preferencesController = require('../controllers/preferencesController');

const router = express.Router();

// Get all user preferences
router.get('/', preferencesController.getUserPreferences);

// Get a specific user preference
router.get('/:key', preferencesController.getUserPreference);

// Update all user preferences
router.put('/', preferencesController.updateUserPreferences);

// Update a specific user preference
router.put('/:key', preferencesController.updateUserPreference);

module.exports = router; 