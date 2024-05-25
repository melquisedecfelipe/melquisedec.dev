import { expect, test } from 'vitest'
import Experiences from '.'

test('should render correctly', () => {
  const render = <Experiences />

  expect(render).toBeDefined()
})
