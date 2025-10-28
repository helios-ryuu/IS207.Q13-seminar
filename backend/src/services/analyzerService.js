// Service thực hiện phân tích URL
const { fetchPageContent } = require('./crawlerService');
const { 
  extractJsonLd, 
  extractMetaDescription, 
  countHeadings, 
  extractOgTags,
  extractCanonical 
} = require('../utils/parsers');
const { calculateScore } = require('../utils/scoring');

// Phân tích URL
exports.performAnalysis = async (url) => {
  try {
    // Fetch HTML content
    const html = await fetchPageContent(url);

    // Parse và extract thông tin
    const jsonLd = extractJsonLd(html);
    const metaDesc = extractMetaDescription(html);
    const headings = countHeadings(html);
    const ogTags = extractOgTags(html);
    const canonical = extractCanonical(html);

    // Tạo checks object
    const checks = {
      hasJsonLd: !!jsonLd,
      hasAuthor: jsonLd?.author ? true : false,
      hasMetaDescription: !!metaDesc,
      metaDescriptionLength: metaDesc?.length || 0,
      h2Count: headings.h2,
      hasOgTags: !!(ogTags.title && ogTags.description),
      hasCanonical: !!canonical
    };

    // Tính điểm
    const score = calculateScore(checks);

    // Trả về kết quả
    return {
      url,
      timestamp: new Date().toISOString(),
      score,
      checks,
      details: {
        jsonLd,
        metaDescription: metaDesc,
        headings,
        ogTags,
        canonical
      }
    };

  } catch (error) {
    console.error('Analysis service error:', error);
    throw new Error(`Failed to analyze URL: ${error.message}`);
  }
};
