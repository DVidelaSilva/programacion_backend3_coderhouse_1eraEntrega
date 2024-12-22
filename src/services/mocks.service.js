import UsersRepository from '../repositories/users.repository.js'
import PetsRepository from '../repositories/pets.repository.js'

import generateUserFaker from '../utils/usersFaker.js'
import generatePetFaker from '../utils/petsFaker.js'

class MocksService {

    constructor(){
         this.userRepository = new UsersRepository()
         this.petRepository = new PetsRepository()
    }



    createUserFaker = async () => {
        const users = []
        for(let i=0; i<50; i++){
            users.push(generateUserFaker())
        }
        return users
    }



    createPetFaker = async () => {
        const pets = []
        for(let i=0; i<50; i++){
            pets.push(generatePetFaker())
        }
        return pets
    }

    

    generateData = async (body) => {

        // Genetare Users

        const quantityUsers = body.users
        
        await this.userRepository.deleteUsers()

        for(let i=0; i<quantityUsers; i++){
            const fakeUsers = generateUserFaker()
            const user = await this.userRepository.createUserInDB(fakeUsers)
        }


        // Genetare Pets

        const quantityPets = body.pets
        
        await this.petRepository.deletePets()

        for(let i=0; i<quantityPets; i++){
            const fakePets = generatePetFaker()
            const pet = await this.petRepository.createPetInDB(fakePets)
        }    
    }

}



export default MocksService