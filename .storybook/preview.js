export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  parameters: {
    layout: 'fullscreen'
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  Story => (
    <>
      <Story />
    </>
  )
]