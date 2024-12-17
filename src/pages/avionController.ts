import { NextFunction, Request, Response, Router } from 'express';
import { Avion } from '../types/types';
import { handleGetAvions, handlePostAvions } from '../managers/avionManager';

const router = Router();

 router.get('/', async(request: Request, response: Response<Avion[]>, next:NextFunction)=>{
    try {
response.status(200).json(await handleGetAvions(request, next))
    } catch (error) {
        
    }
 });

 router.post('/', async(request: Request, response: Response<Avion[]>, next: NextFunction)=>{
    try {
response.status(200).json(await handlePostAvions(request, next))
    } catch(error) {
        
    }
 });


//  router.put();
//  router.delete();

export default router;
