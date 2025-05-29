// src/mocks/mock.generator.js
import { fakerES as faker } from '@faker-js/faker';
import { createHash } from '../utils/passwordHash.js'; // debe exportar una función createHash(plain)

export const generateFakePets = (qty = 1) => {
  const pets = [];
  for (let i = 0; i < qty; i++) {
    pets.push({
      name: faker.animal.dog(),
      specie: faker.animal.type(),
      birthDate: faker.date.past(5).toISOString(),
      adopted: false,
    });
  }
  return pets;
};

export const generateFakeUsers = (qty = 1) => {
  const users = [];
  const hashedPassword = createHash("coder123");

  for (let i = 0; i < qty; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 65 }),
      password: hashedPassword,
      role: faker.helpers.arrayElement(["user", "admin"]),
      pets: [],
    });
  }
  return users;
};
