export class UserName{
  value: string;
  //Ponemos dentro nuestra metodo para que el constructor active la metodo. 
  constructor(value:string){
     this.value = value;
     this.ensureIsValid(); 
  }

  private ensureIsValid(){
    if(this.value.length < 4 ){
      throw new Error("Error en el nombre: No puede ser menos de 4 letras.");
    }
  }
}
