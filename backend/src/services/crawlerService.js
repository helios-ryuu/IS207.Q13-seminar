// Service fetch HTML content bằng Puppeteer
const puppeteer = require('puppeteer');

// Fetch page content
exports.fetchPageContent = async (url) => {
  let browser = null;
  
  try {
    console.log('🌐 Launching browser...');
    
    // Launch browser với args tối ưu cho production
    browser = await puppeteer.launch({
      headless: process.env.PUPPETEER_HEADLESS !== 'false',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--disable-features=IsolateOrigins',
        '--disable-site-isolation-trials',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-background-networking',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-breakpad',
        '--disable-component-extensions-with-background-pages',
        '--disable-extensions',
        '--disable-features=TranslateUI',
        '--disable-ipc-flooding-protection',
        '--disable-renderer-backgrounding',
        '--enable-features=NetworkService,NetworkServiceInProcess',
        '--force-color-profile=srgb',
        '--metrics-recording-only',
        '--mute-audio'
      ],
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined
    });

    // Tạo page mới
    const page = await browser.newPage();

    // Set user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

    // Set viewport nhỏ hơn để tiết kiệm memory
    await page.setViewport({ width: 1280, height: 800 });

    // Disable images và CSS để tăng tốc
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      const resourceType = request.resourceType();
      if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
        request.abort();
      } else {
        request.continue();
      }
    });

    console.log(`📄 Navigating to ${url}...`);

    // Navigate to URL với timeout dài hơn và waitUntil domcontentloaded
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: parseInt(process.env.PUPPETEER_TIMEOUT) || 60000
    });

    // Đợi JavaScript render (giảm thời gian chờ)
    await new Promise(resolve => setTimeout(resolve, 1000));

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
