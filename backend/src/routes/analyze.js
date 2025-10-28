// Routes cho analyze endpoint
const express = require('express');
const router = express.Router();
const { analyzeUrl } = require('../controllers/analyzeController');

// POST /api/analyze - Phân tích URL
router.post('/', analyzeUrl);

module.exports = router;
