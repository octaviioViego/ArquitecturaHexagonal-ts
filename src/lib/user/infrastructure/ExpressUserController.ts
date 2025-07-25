import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '../../Shared/Infraestructure/ServiceContainer';
import { UserNotFoundError } from '../domain/UserNotFoundError';

export class ExpressUserController {
  async getAll(req:Request , res: Response, next:NextFunction){
    try{
      const users = await ServiceContainer.user.getAll.run();
      return res.json(users.map((user) => user.mapToPrimitives())).status(200);
    }catch(error){
      next(error);
    }
     
  }  

  async getOneById(req:Request , res: Response, next:NextFunction){
    
        try{

            const user = await ServiceContainer.user.getOneById.run(req.params.id);
            return res.json(user.mapToPrimitives()).status(200);
        
        }catch(error){
            if(error instanceof UserNotFoundError){
                return res.status(404).json({ message:error.message });
            }

            next(error);
        }    
        
    }

   async create(req:Request,res:Response, next:NextFunction){
    try{
        const {id,name,email} = req.body as {
          id: string;
          name: string;
          email: string;
          
        };
        await ServiceContainer.user.create.run(
          id,
          name,
          email,
          new Date(),
        );

        return res.status(201).json({ message: "User created successfully" });

    }catch(error){
        next(error);
    }
   
   } 

   async edit(req:Request,res:Response, next:NextFunction){
    try{
        const {id,name,email} = req.body;
        await ServiceContainer.user.edit.run(
          id,
          name,
          email,
          new Date(),
        );

         return res.status(204).send();
    }catch(error){
        if(error instanceof UserNotFoundError){
            return res.status(404).json({ message:error.message });
        }

        next(error);
    }
      
   } 


   async delete(req:Request, res:Response, next:NextFunction){
    try{

      await ServiceContainer.user.deleted.run(req.body.id);
      return res.status(204).send();
    
    }catch(error){
       if(error instanceof UserNotFoundError){
            return res.status(404).json({ message:error.message });
        }
 
      next(error);

    } 
   }

}

