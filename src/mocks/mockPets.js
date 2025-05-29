import { faker } from '@faker-js/faker';

export const generateMockPet = () => {
  return {
    _id: faker.database.mongodbObjectId(),
    name: faker.animal.cat(), // o dog, randomize si querés
    specie: faker.animal.type(),
    age: faker.number.int({ min: 1, max: 15 }),
    adopted: false,
    owner: null
  };
};

export const generateMockPets = (count = 100) => {
  return Array.from({ length: count }, generateMockPet);
};
