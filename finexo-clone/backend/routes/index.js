const express = require('express');
const router = express.Router();
const contactRoutes = require('./contact.routes');

router.use('/contact', contactRoutes);

router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

module.exports = router;
