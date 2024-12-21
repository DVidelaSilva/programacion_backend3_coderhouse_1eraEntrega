
import { Router } from "express";

import UsersController from "../controllers/users.controller.js";


import validateCreateUserDto from '../middlewares/validateCreateUserDto.js';

const userRouter = Router()

const usersController = new UsersController()


userRouter.get('/',  usersController.getUsers)
userRouter.post('/', validateCreateUserDto, usersController.postUsers)
userRouter.get('/mockingusers', usersController.getUsersFaker)


export default userRouter