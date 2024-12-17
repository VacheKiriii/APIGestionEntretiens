import { NextFunction, Request, Response, Router } from 'express';
import { Avion } from '../types/types';
import { handleGetAvions } from '../managers/avionManager';
// import { deleteAvion, getAvions } from '../controllers/avionsController';

const router = Router();

 router.get('/', async(request: Request, response: Response<Avion[]>, next:NextFunction)=>{
    try {
response.status(200).json(await handleGetAvions(request, next))
    } catch (error) {
        
    }
 });
// router.delete('/:immatriculation', deleteAvion);
console.log("coucou")

export default router;
