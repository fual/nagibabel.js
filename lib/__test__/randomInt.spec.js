const randomInt = require('../randomInt.js')

describe('randomInt', () => {
  it('should generate random number', () => {
    const res = randomInt(1, 39)    

    expect(res >= 1).toBe(true)
    expect(res <= 39).toBe(true)
  })
})