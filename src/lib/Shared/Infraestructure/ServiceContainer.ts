import { inMemoryRepository } from '../../../../src/lib/user/infrastructure/InMemoryUserRepository';
import { UserGetAll } from '../../../../src/lib/user/application/UserGetAll/UserGetAll';
import { userGetOneById } from '../../../../src/lib/user/application/UserGetOneById/UserGetOneById';
import { UserCreate } from '../../../../src/lib/user/application/UserCreate/UserCreate';
import { UserDeleted } from '../../../../src/lib/user/application/UserDeleted/UserDeleted';
import { userEdit } from '../../../../src/lib/user/application/UserEdit/UserEdit';


//Este es un contenedor de servicios de infraestructura

//Para cambiar de repositorio, simplemente cambia la instancia de UserRepository
//Por ejemplo, si quieres usar PostgresUserRepository, simplemente cambia la instancia de UserRepository
//const UserRepository = new PostgresUserRepository('url de tu base de datos');
    
const  UserRepository = new inMemoryRepository();

export const ServiceContainer  = {
    user : {
        getAll: new UserGetAll(UserRepository),
        getOneById: new userGetOneById(UserRepository),
        create: new UserCreate(UserRepository),
        deleted: new UserDeleted(UserRepository),
        edit: new userEdit(UserRepository),
    }
}