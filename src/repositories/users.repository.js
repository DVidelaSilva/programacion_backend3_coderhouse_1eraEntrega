
import userModel from '../models/users.model.js'

class UsersRepository {


    constructor() {
       this.userModel = new userModel()
    }
    


    createUserInDB = async (data) => {
        const user = await userModel.create(data)
        return user
    }


    findAllUsersInDB = async () => {
        const users = await userModel.find()
        return users
    }




}


export default UsersRepository