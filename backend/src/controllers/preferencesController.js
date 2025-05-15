const preferencesModel = require('../models/preferences');

// Get all user preferences
const getUserPreferences = (req, res) => {
  try {
    const preferences = preferencesModel.getUserPreferences();
    res.json(preferences);
  } catch (error) {
    console.error('Error retrieving user preferences:', error);
    res.status(500).json({
      error: 'Failed to retrieve user preferences',
      message: error.message
    });
  }
};

// Get a specific user preference
const getUserPreference = (req, res) => {
  try {
    const { key } = req.params;
    
    if (!key) {
      return res.status(400).json({
        error: 'Missing key parameter',
        message: 'Key parameter is required'
      });
    }
    
    const value = preferencesModel.getUserPreference(key);
    
    if (value === null) {
      return res.status(404).json({
        error: 'Preference not found',
        message: `The preference '${key}' does not exist`
      });
    }
    
    res.json({ [key]: value });
  } catch (error) {
    console.error(`Error retrieving user preference '${req.params.key}':`, error);
    res.status(500).json({
      error: 'Failed to retrieve user preference',
      message: error.message
    });
  }
};

// Update user preferences
const updateUserPreferences = (req, res) => {
  try {
    const preferences = req.body;
    
    if (!preferences || Object.keys(preferences).length === 0) {
      return res.status(400).json({
        error: 'Missing request body',
        message: 'Request body with preferences is required'
      });
    }
    
    const updatedPreferences = preferencesModel.updateUserPreferences(preferences);
    
    res.json({
      success: true,
      message: 'Successfully updated user preferences',
      data: updatedPreferences
    });
  } catch (error) {
    console.error('Error updating user preferences:', error);
    res.status(500).json({
      error: 'Failed to update user preferences',
      message: error.message
    });
  }
};

// Update a specific user preference
const updateUserPreference = (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;
    
    if (!key) {
      return res.status(400).json({
        error: 'Missing key parameter',
        message: 'Key parameter is required'
      });
    }
    
    if (value === undefined) {
      return res.status(400).json({
        error: 'Missing value in request body',
        message: 'Value is required in the request body'
      });
    }
    
    const success = preferencesModel.updateUserPreference(key, value);
    
    if (!success) {
      return res.status(400).json({
        error: 'Failed to update',
        message: `Could not update preference '${key}'`
      });
    }
    
    res.json({
      success: true,
      message: `Successfully updated '${key}' preference`,
      data: { [key]: value }
    });
  } catch (error) {
    console.error(`Error updating user preference '${req.params.key}':`, error);
    res.status(500).json({
      error: 'Failed to update user preference',
      message: error.message
    });
  }
};

module.exports = {
  getUserPreferences,
  getUserPreference,
  updateUserPreferences,
  updateUserPreference
}; 