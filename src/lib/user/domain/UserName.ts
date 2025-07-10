export class UserName{
  name: string;
  //Ponemos dentro nuestra metodo para que el constructor active la metodo. 
  constructor(value:string){
     this.name = value;
     this.ensureIsValid(); 
  }

  private ensureIsValid(){
    if(this.name.length > 4 ){
      throw new Error("Error en el nombre: No puede ser menos de 4 letras.");
    }
  }
}
