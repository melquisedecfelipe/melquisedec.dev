import { expect, test } from 'vitest'
import Header from '.'

test('should render correctly', () => {
  const render = <Header />

  expect(render).toBeDefined()
})
