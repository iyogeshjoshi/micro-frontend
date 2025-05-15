/**
 * In a real application, this would be stored in a database with user authentication
 * For this demo, we're using an in-memory data store
 */

// Mock user preferences data
let userPreferences = {
  frequentlyVisited: ['mobiles'],
  theme: 'light',
  layout: 'default'
};

// Method to get all user preferences
const getUserPreferences = () => {
  return { ...userPreferences };
};

// Method to get a specific user preference
const getUserPreference = (key) => {
  if (userPreferences[key] !== undefined) {
    return userPreferences[key];
  }
  return null;
};

// Method to update user preferences
const updateUserPreferences = (preferences) => {
  userPreferences = {
    ...userPreferences,
    ...preferences
  };
  return { ...userPreferences };
};

// Method to update a specific user preference
const updateUserPreference = (key, value) => {
  if (key) {
    userPreferences[key] = value;
    return true;
  }
  return false;
};

module.exports = {
  getUserPreferences,
  getUserPreference,
  updateUserPreferences,
  updateUserPreference
}; 