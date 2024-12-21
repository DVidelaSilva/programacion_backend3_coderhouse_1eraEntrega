import UsersRepository from '../repositories/users.repository.js'
import createHash from '../configs/bcrypt.config.js'


class UsersService {

    constructor(){
         this.users = []
         this.userRepository = new UsersRepository()
    }
    

    createUsers = async (body) => {
        
        const {first_name, last_name, email, password} = body

        const newUser = {
            first_name,
            last_name,
            email,
            password: createHash(password)
        }

        const user = await this.userRepository.createUserInDB(newUser)
        return user
    }



    findAllUsers = async () => {
        const users = await this.userRepository.findAllUsersInDB()
        return users  
    }

}



export default UsersService