import { expect } from 'chai'
import { generateUsers } from '../mocks/userMock.js'

describe('Mock: Generación de usuarios', () => {
  const users = generateUsers(5)

  it('Debe generar un array de usuarios', () => {
    expect(users).to.be.an('array')
    expect(users.length).to.equal(5)
  })

  it('Cada usuario debe tener nombre, apellido y email', () => {
    users.forEach(user => {
      expect(user.first_name).to.be.a('string')
      expect(user.last_name).to.be.a('string')
      expect(user.email).to.be.a('string')
    })
  })

  it('Debe incluir un rol válido con un código alfanumérico', () => {
    users.forEach(user => {
      expect(['cliente', 'vendedor']).to.include(user.role.type)
      expect(user.role.code).to.match(/^[a-zA-Z0-9]{6}$/)
    })
  })

  it('Debe tener un booleano premium y una ocupación laboral', () => {
    users.forEach(user => {
      expect(user.premium).to.be.a('boolean')
      expect(user.occupation).to.be.a('string')
    })
  })

  it('Debe tener una descripción', () => {
    users.forEach(user => {
      expect(user.description).to.be.a('string')
    })
  })
})
