import UsersRepository from '../repositories/users.repository.js'
import createHash from '../configs/bcrypt.config.js'
import generateUser from '../utils/usersFaker.js'

class UsersService {

    constructor(){
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


    createUserFaker = async () => {
        const users = []
        for(let i=0; i<50; i++){
            users.push(generateUserFaker())
        }

        //const arrayuser = await this.userRepository.createUserInDB(newUser)
        return users

        
    }



    findAllUsers = async () => {
        const users = await this.userRepository.findAllUsersInDB()
        return users  
    }

}



export default UsersService