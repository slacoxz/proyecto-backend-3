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
  try {
    const users = parseInt(req.query.users);
    const pets = parseInt(req.query.pets);

    if (isNaN(users) || isNaN(pets)) {
      return res.status(400).send({ status: "error", message: "Parámetros inválidos" });
    }

    const fakeUsers = generateUsers(users);
    const fakePets = generatePets(pets);

    await usersService.insertMany(fakeUsers);
    await petsService.insertMany(fakePets);

    res.send({ status: "success", message: `Insertados ${users} usuarios y ${pets} mascotas` });
  } catch (error) {
    logger.error(error);
    res.status(500).send({ status: "error", message: "Error generando los datos" });
  }
}
