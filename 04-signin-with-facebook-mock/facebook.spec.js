//const faceMock = require('./facebook.js')

test('Mock with 1 should return 1', () => {
  const mockFn = jest.fn().mockReturnValue(1)

  expect(mockFn()).toBe(1)
})
