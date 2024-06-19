import puppeteer from 'puppeteer';


const url = "https://www.linkedin.com/"

(async()=>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto(url)
    await browser.close();
})

