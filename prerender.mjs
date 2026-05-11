import puppeteer from 'puppeteer'
import { createServer } from 'node:http'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import handler from 'serve-handler'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, 'dist')
const PORT = 3033
const BASE_URL = 'https://insportzclub.com'

const ROUTES = {
  '/': {
    title: 'Insportz Dubai | Premier Sports Facility',
    description:
      'Experience world-class sports facilities in Dubai. Indoor Cricket, Padel, Badminton, Volleyball, Football, and Table Tennis at Insportz Dubai.',
  },
  '/facility': {
    title: 'Sports Facilities in Dubai | Insportz Club',
    description:
      'Explore premier sports facilities at Insportz Dubai — indoor cricket, padel, badminton, volleyball, football and table tennis. Book your court today.',
  },
  '/facility/indoor-cricket': {
    title: 'Indoor Cricket Dubai | Book a Pitch at Insportz',
    description:
      'Play indoor cricket in Dubai at Insportz Club. Book pitches, join leagues, and train year-round in our climate-controlled venue.',
  },
  '/facility/padel': {
    title: 'Padel Court Dubai | Play Padel at Insportz Club',
    description:
      'Book your padel court in Dubai at Insportz. Social, exciting, and perfect for 1:1 games. Play or train at our premium indoor courts.',
  },
  '/facility/badminton': {
    title: 'Badminton Court Dubai | Insportz Club',
    description:
      'Reserve a badminton court at Insportz Dubai. Professional indoor courts for casual play, training, and tournaments.',
  },
  '/facility/volleyball': {
    title: 'Volleyball Court Dubai | Insportz Club',
    description:
      'Play volleyball in Dubai at Insportz Club. Book courts, join leagues and book training sessions for all skill levels.',
  },
  '/facility/football': {
    title: 'Football Pitch Dubai | Insportz Club',
    description:
      'Book a football pitch at Insportz Dubai. Indoor football for casual games, leagues, and corporate matches.',
  },
  '/facility/table-tennis': {
    title: 'Table Tennis Dubai | Insportz Club',
    description:
      'Play table tennis at Insportz Dubai. Pro tables for practice, casual games, and competitive play.',
  },
  '/leagues-tournaments': {
    title: 'Sports Leagues & Tournaments Dubai | Insportz Club',
    description:
      'Join leagues and tournaments in Dubai across cricket, padel, badminton, football and more at Insportz Club.',
  },
  '/training-and-coaching': {
    title: 'Sports Training & Coaching Dubai | Insportz Club',
    description:
      'Professional coaching for cricket, padel, badminton, volleyball, football and table tennis in Dubai. All ages and skill levels welcome.',
  },
  '/corporate-events-and-team-building': {
    title: 'Corporate Events & Team Building Dubai | Insportz Club',
    description:
      'Host corporate events and team-building activities in Dubai at Insportz. Sports-led experiences tailored for your team.',
  },
  '/contact-us': {
    title: 'Contact Insportz Dubai | Visit, Call or Book',
    description:
      'Get in touch with Insportz Dubai. Visit our facility, book a court or contact us about leagues, coaching and corporate events.',
  },
}

const escapeAttr = s =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function rewriteHead(html, route, meta) {
  const canonical = `${BASE_URL}${route}`
  const title = escapeAttr(meta.title)
  const description = escapeAttr(meta.description)

  // Strip duplicate/stale head tags (both static and Helmet-injected)
  html = html.replace(/<title>[\s\S]*?<\/title>/gi, '')
  html = html.replace(/<link[^>]*rel=["']canonical["'][^>]*>/gi, '')
  html = html.replace(
    /<link[^>]*rel=["']alternate["'][^>]*hreflang=[^>]*>/gi,
    ''
  )
  html = html.replace(
    /<link[^>]*hreflang=[^>]*rel=["']alternate["'][^>]*>/gi,
    ''
  )
  html = html.replace(
    /<meta[^>]*http-equiv=["'](?:Pragma|Cache-Control)["'][^>]*>/gi,
    ''
  )
  html = html.replace(/<meta[^>]*name=["']description["'][^>]*>/gi, '')
  html = html.replace(/<meta[^>]*property=["']og:url["'][^>]*>/gi, '')
  html = html.replace(/<meta[^>]*property=["']og:title["'][^>]*>/gi, '')
  html = html.replace(/<meta[^>]*property=["']og:description["'][^>]*>/gi, '')
  html = html.replace(/<meta[^>]*name=["']twitter:title["'][^>]*>/gi, '')
  html = html.replace(/<meta[^>]*name=["']twitter:description["'][^>]*>/gi, '')

  const fresh = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />`

  return html.replace('<head>', `<head>${fresh}`)
}

const server = createServer((req, res) =>
  handler(req, res, { public: DIST, rewrites: [{ source: '**', destination: '/index.html' }] })
)

await new Promise(resolve => server.listen(PORT, resolve))
console.log(`Server running at http://localhost:${PORT}`)

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const [route, meta] of Object.entries(ROUTES)) {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' })
  let html = await page.content()
  await page.close()

  html = rewriteHead(html, route, meta)

  const outDir = join(DIST, route === '/' ? '' : route)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)
  console.log(`Pre-rendered: ${route}`)
}

await browser.close()
server.close()
console.log('Pre-rendering complete.')
