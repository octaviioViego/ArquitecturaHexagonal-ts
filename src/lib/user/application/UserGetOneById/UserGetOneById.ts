import { UserRepository } from "../../domain/UserRepository";
import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";

export class userGetOneById{
   constructor(private repository:UserRepository){}

    async run(id:string):Promise<User>{
        const user = await this.repository.getOneById(new UserId(id));
        
        if(!user){
            throw new UserNotFoundError();
        }

        return user;
    }

}