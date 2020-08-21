module.exports = function (moduleOptions) {
  const { options } = this

  const { extensions } = options
  if (extensions && !extensions.includes('mdx')) {
    extensions.push('mdx')
  }

  const { additionalExtensions } = options.build
  if (additionalExtensions && !additionalExtensions.includes('mdx')) {
    additionalExtensions.push('mdx')
  }

  this.extendBuild((config) => {
    if (!config.resolve.extensions.includes('.mdx')) {
      config.resolve.extensions.push('.mdx')
    }

    const jsxRuleLoaders = config.module.rules.find(r => r.test.test('.jsx')).use
    const babelLoader = jsxRuleLoaders[jsxRuleLoaders.length - 1]

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        babelLoader,
        '@mdx-js/vue-loader'
      ]
    })
  })
}

module.exports.meta = require('../package.json')
