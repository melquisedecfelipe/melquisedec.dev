import { CURRENT_COMPANY } from '@/constants'
import { expect, test } from 'vitest'
import Link from '.'

test('should render correctly', () => {
  const render = <Link href={CURRENT_COMPANY.url}>{CURRENT_COMPANY.name}</Link>

  expect(render).toBeDefined()
})

test('should render correctly with custom className', () => {
  const render = (
    <Link className="bg-white" href={CURRENT_COMPANY.url}>
      {CURRENT_COMPANY.name}
    </Link>
  )

  expect(render.props.className).toBe('bg-white')
})
