# Dynamic Configurable UI - Backend Service

This is the backend service for the Dynamic Configurable UI application. It provides APIs for configuration data and user preferences.

## Features

- Configuration API endpoints
- User preferences management
- RESTful architecture
- CORS support for frontend integration
- Environment-based configuration

## Installation

```bash
# Install dependencies
npm install

# Create a .env file (see Environment Configuration below)

# Start the server
npm start

# Start development server with auto-reload
npm run dev
```

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

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
```

The application uses sensible defaults if the .env file is not present, but it's recommended to create one for proper configuration.

## API Endpoints

### Configuration

- `GET /api/config` - Get the full application configuration with user preferences
- `GET /api/config/:section` - Get a specific section of the configuration
- `PUT /api/config/:section` - Update a specific section of the configuration (admin functionality)

### User Preferences

- `GET /api/preferences` - Get all user preferences
- `GET /api/preferences/:key` - Get a specific user preference
- `PUT /api/preferences` - Update all user preferences
- `PUT /api/preferences/:key` - Update a specific user preference

## Examples

### Get Full Configuration

```bash
curl -X GET http://localhost:3100/api/config
```

Response:
```json
{
  "headerConfig": [...],
  "leftNavConfig": [...],
  "secondaryConfig": [...],
  "userPreferences": {
    "frequentlyVisited": ["mobiles"],
    "theme": "light",
    "layout": "default"
  }
}
```

### Update User Preferences

```bash
curl -X PUT http://localhost:3100/api/preferences -H "Content-Type: application/json" -d '{"frequentlyVisited": ["clothing", "mobiles"]}'
```

Response:
```json
{
  "success": true,
  "message": "Successfully updated user preferences",
  "data": {
    "frequentlyVisited": ["clothing", "mobiles"],
    "theme": "light",
    "layout": "default"
  }
}
```

## Integration with Frontend

The frontend application should be configured to make API calls to this backend service. Update the API base URL in the frontend configuration to point to this service:

```typescript
// In container/src/utils/api.ts
const API_BASE_URL = 'http://localhost:3100/api';
```

Then update the frontend API functions to use the actual API endpoints instead of mock data.

## Development

This backend service uses an in-memory data store for simplicity. In a production environment, you would want to:

1. Add a database (MongoDB, PostgreSQL, etc.)
2. Implement user authentication
3. Add more robust error handling
4. Include tests for all endpoints 