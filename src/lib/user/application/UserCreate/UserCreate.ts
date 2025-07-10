import {User} from "../../domain/User";
import { UserId } from "../../domain/UserId";
import {UserRepository} from "../../domain/UserRepository";
import { UserName } from "../../domain/UserName";
import { UserEmail } from "../../domain/UserEmail";

//Este es nuestro caso de uso.
export class UserCreate {
 constructor(private repository:UserRepository){
 }

 async run(id:string, 
           name:string, 
           email:string)
  : Promise<void>{
   const user = new User(
    //Instanciamos y validamos los valores de dominio.
    new UserId(id),
    new UserName(name),
    new UserEmail(email),
    Date.now(),
   );
   // Llamamos al repositorio para crear el usuario. 
   return this.repository.create(user);
 }

}
