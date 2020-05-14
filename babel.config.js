module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          esmodules: true
        }
      },
      '@vue/babel-preset-jsx'
    ]
  ]
}
