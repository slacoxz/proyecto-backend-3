// src/mocks/pet.mock.js
import { faker } from '@faker-js/faker';

export const generatePets = (quantity = 100) => {
  const pets = [];
  for (let i = 0; i < quantity; i++) {
    pets.push({
      name: faker.animal.cat(), // o dog(), o random name
      specie: faker.animal.type(),
      birthDate: faker.date.past(5).toISOString(),
      adopted: false
    });
  }
  return pets;
};
