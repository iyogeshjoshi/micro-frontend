# Environment Configuration

This directory contains configuration files for the backend application.

## Environment Variables

The application uses the following environment variables:

```
# Server Configuration
PORT=3100
NODE_ENV=development

# API Configuration
API_PREFIX=/api

# CORS Configuration
CORS_ORIGIN=*

# Logging Configuration
LOG_LEVEL=dev

# Security Configuration (change this in production)
SESSION_SECRET=whatfix-dynamic-ui-secret

# Database Configuration (for future implementation)
DB_URI=mongodb://localhost:27017/whatfix-dynamic-ui
```

## Setup Instructions

1. Create a `.env` file in the root of the backend directory
2. Copy the environment variables above into the file
3. Modify the values as needed for your environment
4. Never commit the `.env` file to version control

## Usage

The environment variables are loaded in the `env.js` file and made available throughout the application:

```javascript
const config = require('./config/env');

// Use configuration values
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
``` 