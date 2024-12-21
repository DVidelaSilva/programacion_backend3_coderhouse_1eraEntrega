import dotenv from 'dotenv'

dotenv.config();

export default {

    port: process.env.PORT || 3000,
    mongodb: process.env.MONGO_URI
}