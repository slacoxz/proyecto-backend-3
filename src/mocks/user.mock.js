// src/mocks/user.mock.js
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const generateUsers = async (quantity = 50) => {
  const users = [];
  const hashedPassword = await hashPassword("coder123");

  for (let i = 0; i < quantity; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: faker.helpers.arrayElement(["user", "admin"]),
      pets: [],
    });
  }
  return users;
};
