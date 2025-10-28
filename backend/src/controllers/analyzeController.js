// Controller xử lý analyze requests
const { performAnalysis } = require('../services/analyzerService');
const { validateUrl } = require('../utils/validators');

// Phân tích URL
exports.analyzeUrl = async (req, res) => {
  try {
    const { url } = req.body;

    // Validate URL
    if (!url) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'MISSING_URL',
          message: 'URL is required'
        }
      });
    }

    if (!validateUrl(url)) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'INVALID_URL',
          message: 'Invalid URL format'
        }
      });
    }

    // Thực hiện phân tích
    console.log(`📊 Analyzing URL: ${url}`);
    const result = await performAnalysis(url);

    // Trả về kết quả
    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('Analysis error:', error);
    
    res.status(500).json({
      success: false,
      error: {
        code: 'ANALYSIS_FAILED',
        message: error.message || 'Failed to analyze URL'
      }
    });
  }
};
