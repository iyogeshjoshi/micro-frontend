const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const config = require('./config/env');

// Import routes
const configRoutes = require('./routes/config');
const preferencesRoutes = require('./routes/preferences');

// Initialize Express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: config.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
})); // CORS configuration
app.use(morgan(config.LOG_LEVEL)); // Logging
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
const apiPrefix = config.API_PREFIX;
app.use(`${apiPrefix}/config`, configRoutes);
app.use(`${apiPrefix}/preferences`, preferencesRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Dynamic Configurable UI Backend API',
    status: 'Running',
    environment: config.NODE_ENV,
    apiPrefix: config.API_PREFIX
  });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The requested resource at ${req.originalUrl} was not found`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
    stack: config.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Start the server
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
  console.log(`http://localhost:${config.PORT}`);
  console.log(`API endpoints available at http://localhost:${config.PORT}${config.API_PREFIX}`);
}); 