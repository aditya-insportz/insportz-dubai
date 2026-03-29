import puppeteer from 'puppeteer'
import { createServer } from 'node:http'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import handler from 'serve-handler'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, 'dist')
const PORT = 3033

const ROUTES = [
  '/',
  '/facility',
  '/facility/indoor-cricket',
  '/facility/padel',
  '/facility/badminton',
  '/facility/volleyball',
  '/facility/football',
  '/facility/table-tennis',
  '/leagues-tournaments',
  '/training-and-coaching',
  '/corporate-events-and-team-building',
  '/contact-us',
]

// Start a local static server
const server = createServer((req, res) =>
  handler(req, res, { public: DIST, rewrites: [{ source: '**', destination: '/index.html' }] })
)

await new Promise(resolve => server.listen(PORT, resolve))
console.log(`Server running at http://localhost:${PORT}`)

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const route of ROUTES) {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' })
  const html = await page.content()
  await page.close()

  const outDir = join(DIST, route === '/' ? '' : route)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
  console.log(`Pre-rendered: ${route}`)
}

await browser.close()
server.close()
console.log('Pre-rendering complete.')
