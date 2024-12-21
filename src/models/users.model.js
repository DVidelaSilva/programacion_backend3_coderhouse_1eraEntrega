import { Schema, model } from "mongoose";


const usersCollection = 'users'


const userSchema = new Schema({

    nombre: {
        type: String,
        require: true
    },

    apellido: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true
    },

    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },

    pets: {
        type: [],
        default: []
    },

})


const userModel = model(usersCollection, userSchema)

export default userModel