import { expect } from 'chai'
import { login } from '../mocks/loginMock.js'

describe('TDD: Login con usuarios hardcodeados', () => {
  it('Debe mostrar mensaje si el password está vacío', () => {
    const result = login('coderUser', '')
    expect(result).to.equal('No se ha proporcionado un password')
  })

  it('Debe mostrar mensaje si el usuario está vacío', () => {
    const result = login('', 'coder123')
    expect(result).to.equal('No se ha proporcionado un usuario')
  })

  it('Debe mostrar mensaje si el password es incorrecto', () => {
    const result = login('coderUser', 'wrongpass')
    expect(result).to.equal('Contraseña incorrecta')
  })

  it('Debe mostrar mensaje si el usuario es incorrecto', () => {
    const result = login('wrongUser', 'coder123')
    expect(result).to.equal('Credenciales incorrectas')
  })

  it('Debe mostrar mensaje si las credenciales son correctas', () => {
    const result = login('coderUser', 'coder123')
    expect(result).to.equal('logueado')
  })
})
