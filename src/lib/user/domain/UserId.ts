export class UserId{
  value: string;
  
  constructor(value:string){
    this.value = value;
    this.ensureIsValid();
  }

  private ensureIsValid(){
    if(this.value.length<5){
      throw new Error("EL Id se usuario debe tener al menos 5 caracteres");
    }
  }
}
