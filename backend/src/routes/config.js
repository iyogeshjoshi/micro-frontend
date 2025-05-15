const express = require('express');
const configController = require('../controllers/configController');

const router = express.Router();

// Get full configuration including user preferences
router.get('/', configController.getFullConfig);

// Get a specific section of the configuration
router.get('/:section', configController.getConfigSection);

// Update a specific section of the configuration (admin functionality)
router.put('/:section', configController.updateConfigSection);

module.exports = router; 