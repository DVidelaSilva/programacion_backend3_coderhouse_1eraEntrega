import { Router } from "express";

import userRouter from "./users.routes.js";
import petRouter from './pets.routes.js'



const appRouter = Router()


appRouter.use('/users', userRouter)
appRouter.use('/pets', petRouter)


export default appRouter