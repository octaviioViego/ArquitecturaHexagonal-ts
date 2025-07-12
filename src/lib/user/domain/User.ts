import { UserId } from "./UserId.js";
import { UserName } from "./UserName.js";
import { UserEmail } from "./UserEmail.js";
import { UserCreatedAt } from "./UserCreatedAt.js";
//Entidad de dominio.
export class User{
  id: UserId;
  name: UserName;
  email: UserEmail;
  createdAt:UserCreatedAt;
  
  constructor(id:UserId, name:UserName, email:UserEmail, createdAt:UserCreatedAt){
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }
  
  //Servicios de dominio. Aprovechan los campos o los metodos de las clases.
  public nameAndEmail(){
    return `${this.name} - ${this.email}`;
  }


  public mapToPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      createdAt: this.createdAt.value,
    };
  }

}
