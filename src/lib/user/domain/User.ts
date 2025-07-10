import { UserId } from "./UserId.ts";
import { UserName } from "./UserName.ts";
import { UserEmail } from "./UserEmail.ts";

//Entidad de dominio.
export class User{
  id: UserId;
  name: UserName;
  email: UserEmail;
  createdAt:number;
  
  constructor(id:UserId, name:UserName, email:UserEmail, createdAt:number){
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }
  
  //Servicios de dominio. Aprovechan los campos o los metodos de las clases.
  public nameAndEmail(){
    return `${this.name} - ${this.email}`;
  }
}
