import { Router } from "express";

import userRouter from "./users.routes.js";



const appRouter = Router()


appRouter.use('/users', userRouter)


export default appRouter