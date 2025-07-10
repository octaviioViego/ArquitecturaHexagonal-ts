import { Request, Response } from 'express';
import { ServiceContainer } from '../../Shared/Infraestructure/ServiceContainer';
import { UserNotFoundError } from '../domain/UserNotFoundError';

export class ExpressUserController {
  async getAll(req:Request , res: Response){
    const users = await ServiceContainer.user.getAll.run();
    return res.status(200).json(users);
  }  

  async getOneById(req:Request , res: Response){
    
        try{

            const user = await ServiceContainer.user.getOneById.run(req.params.id);
            return res.status(200).json(user);
        
        }catch(error){
            if(error instanceof UserNotFoundError){
                return res.status(404).json({ message:error.message });
            }

            throw error;
        }    
        
    }

   async create(req:Request,res:Response){
    const {id,name,email} = req.body;
    await ServiceContainer.user.create.run(id,name,email);

    return res.status(201).send;
   } 

   async edit(req:Request,res:Response){
    const {id,name,email} = req.body;
    await ServiceContainer.user.edit.run(id,name,email);

    return res.status(204).send;
   } 


   async delete(req:Request, res:Response){
     await ServiceContainer.user.deleted.run(req.body.id);

     return res.status(204).send();
   }

}

