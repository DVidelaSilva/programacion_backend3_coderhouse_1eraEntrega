
import { Router } from "express";

import UsersController from "../controllers/users.controller.js";
import PetsController from "../controllers/pets.controller.js";

const mockRouter = Router()

const usersController = new UsersController()
const petsController = new PetsController()


mockRouter.get('/mockingusers', usersController.getUsersFaker)
mockRouter.get('/mockingpets', petsController.getPetsFaker)


export default mockRouter