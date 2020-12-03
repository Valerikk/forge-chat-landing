const path = require('path')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'public'), path.join(__dirname, 'pages'), path.join(__dirname, 'components')],
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}

