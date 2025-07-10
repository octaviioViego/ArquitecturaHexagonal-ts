export class UserEmail{
  
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  

  value: string;
 
  constructor(value: string){
     this.value = value;
     this.emailIsValid();
  }

  //Creamos la funcion para validar nuestro email
  private emailIsValid(){
    if(!(this.emailRegex.test(this.value))){
       throw new Error("Error en emai: Favor de verificar su email. ");
    }
  }

}


