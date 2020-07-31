module.exports = function (moduleOptions) {
  const extensions = this.options.extensions || []
  if (!extensions.includes('mdx')) {
    extensions.push('mdx')
  }

  const additionalExtensions = this.options.build.additionalExtensions
  if (Array.isArray(additionalExtensions)) {
    additionalExtensions.push('mdx')
  } else if (!additionalExtensions.includes('mdx')) {
    this.options.build.additionalExtensions = ['mdx']
  }

  this.extendBuild((config) => {
    if (Array.isArray(config.resolve.extensions)) {
      config.resolve.extensions.push('.mdx')
    } else {
      config.resolve.extensions = ['.mdx']
    }

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        'babel-loader',
        '@mdx-js/vue-loader'
      ]
    })
  })
}

module.exports.meta = require('../package.json')
