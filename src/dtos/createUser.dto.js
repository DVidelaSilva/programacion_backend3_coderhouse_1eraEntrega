

class CreateUserDto {

    constructor(user) {

        this.nombre = user.nombre;
        this.apellido = user.apellido;
        this.email = user.email
        this.password = user.password
        

    }
}


export default CreateUserDto