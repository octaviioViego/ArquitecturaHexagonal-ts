import {User} from "./User.ts";
import {UserId} from "./UserId.ts";

export interface UserRepository {
    //Se concidera buenba practica que la aplicacion que no devuelva nada se ponga void
    create(user:User): Promise<void>
    getAll(): Promise<User[]>
    getOneById(id:UserId): Promise<User | null>
    edit(user:User): Promise<void>
    delete(id:UserId): Promise<void>
}
