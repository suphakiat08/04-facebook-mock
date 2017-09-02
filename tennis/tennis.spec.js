const tennis = require('./tennis.js')

test('tennis', () => {
  let sc1 = '0'
  let sc2 = '0'

  let result = tennis(sc1, sc2)

  expect(result).toBe('Love - Love')
})
