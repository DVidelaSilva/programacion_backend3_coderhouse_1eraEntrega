import UsersService from "../services/users.service.js"

class UsersController {

    constructor() {
        this.usersService = new UsersService()
    }


    postUsers = async (req, res) => {

        try {
            const {first_name, last_name, email, password} = req.body
            const users = await this.usersService.createUsers(req.body)
            return res.status(201).send({status: 'success', message: 'Usuario creado exitosamente', data: users})

        } catch (error) {
            return res.status(500).json({ message: 'Error al crear usuario' })
        }

    }

    getUsers = async (req, res) => {
        try {
            const users = await this.usersService.findAllUsers()
            return res.status(200).send({status: 'success', message: 'Usuarios Encontrados exitosamente', data: users})

        } catch (error) {
            return res.status(500).json({ message: 'Error al devolver usuarios' })
        }


    }

}


export default UsersController