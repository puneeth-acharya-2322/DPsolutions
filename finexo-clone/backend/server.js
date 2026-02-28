require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');
const config = require('./config/index');

const app = express();

// CORS
app.use(cors({
  origin: config.frontendUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Finexo API is running.' });
});

// Error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  console.log(`✅ Finexo backend running on http://localhost:${config.port}`);
  console.log(`   NODE_ENV: ${config.nodeEnv}`);
});

module.exports = app;
