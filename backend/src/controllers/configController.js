const configModel = require('../models/config');
const preferencesModel = require('../models/preferences');

// Get the full configuration with user preferences
const getFullConfig = (req, res) => {
  try {
    const config = configModel.getConfig();
    const userPreferences = preferencesModel.getUserPreferences();
    
    res.json({
      ...config,
      userPreferences
    });
  } catch (error) {
    console.error('Error retrieving configuration:', error);
    res.status(500).json({
      error: 'Failed to retrieve configuration',
      message: error.message
    });
  }
};

// Get a specific section of the configuration
const getConfigSection = (req, res) => {
  try {
    const { section } = req.params;
    
    if (!section) {
      return res.status(400).json({
        error: 'Missing section parameter',
        message: 'Section parameter is required'
      });
    }
    
    const sectionData = configModel.getConfigSection(section);
    
    if (!sectionData) {
      return res.status(404).json({
        error: 'Section not found',
        message: `The section '${section}' does not exist`
      });
    }
    
    res.json(sectionData);
  } catch (error) {
    console.error(`Error retrieving config section '${req.params.section}':`, error);
    res.status(500).json({
      error: 'Failed to retrieve configuration section',
      message: error.message
    });
  }
};

// Update a specific section of the configuration (admin functionality)
const updateConfigSection = (req, res) => {
  try {
    const { section } = req.params;
    const data = req.body;
    
    if (!section) {
      return res.status(400).json({
        error: 'Missing section parameter',
        message: 'Section parameter is required'
      });
    }
    
    if (!data) {
      return res.status(400).json({
        error: 'Missing request body',
        message: 'Request body is required'
      });
    }
    
    const success = configModel.updateConfigSection(section, data);
    
    if (!success) {
      return res.status(404).json({
        error: 'Section not found',
        message: `The section '${section}' does not exist`
      });
    }
    
    res.json({
      success: true,
      message: `Successfully updated '${section}' configuration`,
      data: configModel.getConfigSection(section)
    });
  } catch (error) {
    console.error(`Error updating config section '${req.params.section}':`, error);
    res.status(500).json({
      error: 'Failed to update configuration section',
      message: error.message
    });
  }
};

module.exports = {
  getFullConfig,
  getConfigSection,
  updateConfigSection
}; 