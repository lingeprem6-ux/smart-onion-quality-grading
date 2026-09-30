/**
 * ONIONIQ - Express Node.js Backend Server
 * Ministry of Consumer Affairs, Food & Public Distribution (DoCA)
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// API Routes
app.use('/api', routes);

// Serve static frontend in production
app.use(express.static(path.join(__dirname, '../')));

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  ONIONIQ Backend Server running on port ${PORT}`);
  console.log(`  DoCA AI-Based Onion Quality Assessment System`);
  console.log(`====================================================`);
});

module.exports = app;
