import { Router } from 'express';
import { mockingPets, mockingUsers, generateData } from '../controllers/mock.controller.js';

const router = Router();

router.get("/mockingpets", mockingPets);
router.get("/mockingusers", mockingUsers);
router.post("/generateData", generateData);

export default router;
