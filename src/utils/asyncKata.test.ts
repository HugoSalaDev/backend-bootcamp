import { describe, expect, it } from 'vitest'
import { delayAdd } from './asyncKata'

describe('delayAdd', () => {
  it('suma dos números de forma asíncrona', async () => {
    const r = await delayAdd(2, 3, 10)
    expect(r).toBe(5)
  })
})
