import theme from '@nuxt/content-theme-docs'

export default theme({
  loading: { color: '#e29503' },
  buildModules: [
    '@nuxtjs/mdx',
    'nuxt-ackee'
  ],
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: '24b28f02-7ad1-434e-81c5-f8e3f00a297b',
    detailed: true
  }
})
