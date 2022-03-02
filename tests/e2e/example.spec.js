const {chromium} = require("playwright");
const {expect} = require("chai");


describe('Test Playwright Header presents', () => {
  let browser
  let page

  before(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
    await page.goto('http://localhost:8080/')
  })

  after(async () => {
    await page.close()
    await browser.close()
  })

  it('has header', async () => {
    const h1 = await page.$('h1')
    const text = await h1.innerText()
    expect(text).to.equal('Posts')
  })

  it()
})
