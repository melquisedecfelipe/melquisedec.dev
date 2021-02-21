const withImages = require('next-images')
const withOffline = require('next-offline')
const withPWA = require('next-pwa')

const nextConfigWithPWA = withPWA({
  pwa: {
    dest: 'public'
  },
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    COSMIC_KEY: process.env.COSMIC_KEY,
    COSMIC_SLUG: process.env.COSMIC_SLUG,
    GOOGLE_ADSENSE: process.env.GOOGLE_ADSENSE,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    SITE_URL: process.env.SITE_URL,
  },
})

const nextConfigWithOffline = withOffline({ ...nextConfigWithPWA })

module.exports = withImages({
  esModule: true,
  ...nextConfigWithOffline
})
