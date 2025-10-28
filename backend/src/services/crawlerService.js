// Service fetch HTML content bằng Puppeteer
const puppeteer = require('puppeteer');

// Fetch page content
exports.fetchPageContent = async (url) => {
  let browser = null;
  
  try {
    console.log('🌐 Launching browser...');
    
    // Launch browser
    browser = await puppeteer.launch({
      headless: process.env.PUPPETEER_HEADLESS !== 'false',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Tạo page mới
    const page = await browser.newPage();

    // Set user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });

    console.log(`📄 Navigating to ${url}...`);

    // Navigate to URL
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: parseInt(process.env.PUPPETEER_TIMEOUT) || 30000
    });

    // Đợi JavaScript render (thay waitForTimeout bằng Promise)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Lấy HTML content
    const html = await page.content();

    console.log('✅ Page loaded successfully');

    return html;

  } catch (error) {
    console.error('Crawler error:', error.message);
    throw new Error(`Failed to fetch page: ${error.message}`);
  } finally {
    if (browser) {
      await browser.close();
      console.log('🔒 Browser closed');
    }
  }
};
