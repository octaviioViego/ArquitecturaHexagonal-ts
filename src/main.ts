import express, { Router } from "express";
import { ExpressUserRouter } from "./lib/user/infrastructure/ExpressUserRouter";
import { Request,Response,NextFunction } from "express";

const app = express();

app.use(express.json());

app.use(ExpressUserRouter);

app.use((err: unknown,req: Request, res: Response, next: NextFunction) => {
   if(err instanceof Error){
     console.error(err.stack);
      return res.status(500).json({message: err.message});
   }  

    console.error(err);
    return res.status(500).json({message: "Error en el servidor"});
    });    


app.listen(3000, () => {
    console.log("El servidro esta corriendo on http://localhost:3000");
});