const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const path = require('path')

const SLIDES_DIR = path.join(process.cwd(), '/contents/slides')

async function getSlidesEntries(key) {
  const paths = await fs.readdir(path.join(SLIDES_DIR, key, 'orders'))
  return paths
}

const key = 'framer-motion'

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false })

  const paths = await getSlidesEntries(key)

  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080 })

  for (let i = 0; i < paths.length; i++) {
    await page.goto(`http://localhost:3000/slides/framer-motion?page=${i}`, {
      waitUntil: 'domcontentloaded',
    })
    await delay(2000)
    await page.screenshot({
      path: path.join(process.cwd(), '/public/slides/', key, `${i}.jpg`),
    })
  }

  await browser.close()
})()
