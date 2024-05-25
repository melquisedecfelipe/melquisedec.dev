import { expect, test } from 'vitest'
import Education from '.'

test('should render correctly', () => {
  const render = <Education />

  expect(render).toBeDefined()
})
