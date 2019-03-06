const timeout = require('../timeout.js')

describe('timeout', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('should call given function after given time', (done) => {
    expect.assertions(1)

    const cb = jest.fn()

    timeout(cb, 500).then(() => {
      expect(cb).toBeCalled()
      done()
    })

    jest.runAllTimers(500)
  })
})