import UsersService from "../services/users.service.js"

class UsersController {

    constructor() {
        this.usersService = new UsersService()
    }



    getUsers = async (req, res) => {
        const users = await this.usersService.findAllUsers()

        return res.send(users)
    }


    postUsers = async (req, res) => {

        const {nombre, apellido, email, password} = req.body

        const users = await this.usersService.createUsers(req.body)

        return res.send(users)
    }



}


export default UsersController