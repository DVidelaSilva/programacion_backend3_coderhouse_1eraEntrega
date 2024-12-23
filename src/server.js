import express from 'express'
import envConfig from './configs/envConfig.js'
import appRouter from './routes/appRouter.js'
import connectMongoDB from './configs/mongoDBConfig.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(appRouter)

connectMongoDB()


app.listen(envConfig.port, () => {
    console.log(`Servidor corriendo en puerto ${envConfig.port}`);
})