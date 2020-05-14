module.exports = function (moduleOptions) {
  this.options.build.additionalExtensions = ['mdx']

  if (this.options.extensions) {
    const extensions = this.options.extensions
    !extensions.includes('mdx') && extensions.push('mdx')

    let additionalExtensions = this.options.build.additionalExtensions
    if (!Array.isArray(additionalExtensions)) {
      additionalExtensions = ['mdx']
    } else {
      !additionalExtensions.includes('mdx') && additionalExtensions.push('mdx')
    }

    this.extendBuild((config) => {
      if (config.resolve.extensions) {
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
}

module.exports.meta = require('../package.json')
