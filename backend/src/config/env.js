/**
 * Environment configuration
 *
 * This file manages the environment variables for the application.
 * In a production environment, these would be set using a proper .env file
 * or through the hosting platform's environment configuration.
 */

require("dotenv").config();

// Define default configuration values
const config = {
  // Server configuration
  PORT: process.env.PORT || 3100,
  NODE_ENV: process.env.NODE_ENV || "development",

  // CORS configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",

  // API configuration
  API_PREFIX: process.env.API_PREFIX || "/v1",

  // Logging configuration
  LOG_LEVEL: process.env.LOG_LEVEL || "dev",

  // Session configuration (for future authentication)
  SESSION_SECRET: process.env.SESSION_SECRET || "whatfix-dynamic-ui-secret",

  // Database configuration (for future implementation)
  DB_URI: process.env.DB_URI || "mongodb://localhost:27017/whatfix-dynamic-ui",
};

// Log environment
console.log(`Environment: ${config.NODE_ENV}`);

module.exports = config;
