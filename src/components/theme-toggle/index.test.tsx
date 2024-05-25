import { expect, test } from 'vitest'
import ThemeToggle from '.'

test('should render correctly', () => {
  const render = <ThemeToggle />

  expect(render).toBeDefined()
})
