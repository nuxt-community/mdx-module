const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('module', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, '../../example'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('renders vue page', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('renders .mdx content', async () => {
    const html = await get('/test')
    expect(html).toContain('This a Nuxt MDX tomato')
  })

  test('resolves and renders imported .mdx component', async () => {
    const html = await get('/import')
    expect(html).toContain('<h2>MDX component</h2>')
  })
})
