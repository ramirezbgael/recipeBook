const { it, describe } = require('mocha')
const {assert} = require('chai')

const sumar = (a, b) => a + b

describe('test de la funcion sumar', () =>{
  it('deberia retornar 12 con 8 y 4', (done)=>{
    const response = sumar(8, 4)
    assert.equal(response, 12)
    done()
  })

  it('deberia retornar 5 con 2 y 3', ()=>{
    const response = sumar(2,3)
    assert.equal(response, 5)
    done()
  })
})