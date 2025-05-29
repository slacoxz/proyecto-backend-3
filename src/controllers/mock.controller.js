import { generatePets } from '../mocks/pet.mock.js';
import { generateUsers } from '../mocks/user.mock.js';
import { petsService, usersService } from '../services/index.js';

export const mockingPets = async (req, res) => {
  const pets = generatePets(100);
  res.send({ status: "success", payload: pets });
};

export const mockingUsers = async (req, res) => {
  const users = await generateUsers(50);
  res.send({ status: "success", payload: users });
};

export const generateData = async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  const usersData = await generateUsers(Number(users));
  const petsData = generatePets(Number(pets));

  await usersService.insertMany(usersData);
  await petsService.insertMany(petsData);

  res.send({ status: "success", message: `Se insertaron ${users} usuarios y ${pets} mascotas.` });
};
