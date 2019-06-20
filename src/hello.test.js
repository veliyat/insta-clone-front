function add(a=0, b=0) {
  return a + b
}

describe('Arithmetic', () => {
  it('Adds Successfully', () => {
    expect(add(1,2)).toBe(3)
  })

  it('Returns 0 while no args passed', () => {
    expect(add()).toBe(0)
  })
})