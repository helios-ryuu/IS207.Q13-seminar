// Utils để parse HTML và extract thông tin
const cheerio = require('cheerio');

// Extract JSON-LD structured data
exports.extractJsonLd = (html) => {
  try {
    const $ = cheerio.load(html);
    const jsonLdScript = $('script[type="application/ld+json"]').first();
    
    if (jsonLdScript.length > 0) {
      const jsonLd = JSON.parse(jsonLdScript.html());
      return jsonLd;
    }
    
    return null;
  } catch (error) {
    console.error('JSON-LD extraction error:', error.message);
    return null;
  }
};

// Extract meta description
exports.extractMetaDescription = (html) => {
  try {
    const $ = cheerio.load(html);
    const metaDesc = $('meta[name="description"]').attr('content');
    return metaDesc || null;
  } catch (error) {
    console.error('Meta description extraction error:', error.message);
    return null;
  }
};

// Count headings (H1, H2, H3)
exports.countHeadings = (html) => {
  try {
    const $ = cheerio.load(html);
    
    return {
      h1: $('h1').length,
      h2: $('h2').length,
      h3: $('h3').length
    };
  } catch (error) {
    console.error('Headings count error:', error.message);
    return { h1: 0, h2: 0, h3: 0 };
  }
};

// Extract Open Graph tags
exports.extractOgTags = (html) => {
  try {
    const $ = cheerio.load(html);
    
    return {
      title: $('meta[property="og:title"]').attr('content') || null,
      description: $('meta[property="og:description"]').attr('content') || null,
      image: $('meta[property="og:image"]').attr('content') || null,
      url: $('meta[property="og:url"]').attr('content') || null
    };
  } catch (error) {
    console.error('OG tags extraction error:', error.message);
    return {};
  }
};

// Extract canonical URL
exports.extractCanonical = (html) => {
  try {
    const $ = cheerio.load(html);
    const canonical = $('link[rel="canonical"]').attr('href');
    return canonical || null;
  } catch (error) {
    console.error('Canonical extraction error:', error.message);
    return null;
  }
};
