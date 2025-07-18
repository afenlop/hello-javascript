const isEven = require('./23-testing-exercises.js')

test("2 debe ser par",()=>{
    expect(isEven(2)).toBe(true)
})

test("3 debe ser impar",()=>{
    expect(isEven(3)).toBe(false)
})

test("4 debe ser par",()=>{
    expect(isEven(4)).toBe(true)
})