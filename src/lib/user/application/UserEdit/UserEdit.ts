import { UserName } from "../../domain/UserName";
import { UserEmail } from "../../domain/UserEmail";
import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserRepository } from "../../domain/UserRepository";

export class userEdit{
    constructor(private repository:UserRepository){}

    async run(id:string,
              name:string,
              email:string):Promise<void>{
                const user = new User(
                    new UserId(id),
                    new UserName(name),
                    new UserEmail(email),
                    Date.now(),
                );
                return this.repository.edit(user);
              }
}

