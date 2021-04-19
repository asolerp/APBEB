const { nextI18NextRewrites } = require('next-i18next/rewrites')

const withImages = require('next-images')
const localeSubpaths = {
  es: 'es',
  en: 'en'
}

module.exports = withImages({
  experimental: {
    reactRefresh: true
  },
  env: {
    CONTENFUL_API: process.env.CONTENFUL_API
  },
  target: 'serverless',
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  }
})
