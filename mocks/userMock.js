import { faker } from '@faker-js/faker'

function generateUser() {
  const roles = ['cliente', 'vendedor']
  const role = roles[Math.floor(Math.random() * roles.length)]

  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: {
      type: role,
      code: faker.string.alphanumeric(6)
    },
    premium: faker.datatype.boolean(),
    occupation: faker.person.jobTitle(),
    description: faker.commerce.productDescription()
  }
}

export function generateUsers(count = 10) {
  return Array.from({ length: count }, () => generateUser())
}
