


class UsersService {

    constructor(){
         this.users = []
    }
    

    findAllUsers = async () => {

    return this.users
        
    }


    createUsers = async (body) => {
        
        const {nombre, apellido, email, password} = body
        
        

        const user = {
            nombre,
            apellido,
            email,
            password
        }

        this.users.push(user)


        return this.users
    }

}



export default UsersService