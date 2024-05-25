import { expect, test } from 'vitest'
import Container from '.'

test('should render correctly', () => {
  const render = (
    <Container>
      <div />
    </Container>
  )

  expect(render).toBeDefined()
})
