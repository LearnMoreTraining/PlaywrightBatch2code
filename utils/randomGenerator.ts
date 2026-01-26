import {faker} from '@faker-js/faker'

export class RandomDataUtil{

    static getFirstName(){

       return faker.person.fullName()
    }

   static getRandomPassword(length:number){
       return faker.internet.password({length})
    }

    static getEmailId(){
      return  faker.internet.email()
    }


    static sample(){
        faker.phone.number()
        faker.location.country()
        faker.string.alphanumeric()
    }

}