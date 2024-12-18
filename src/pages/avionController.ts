import { NextFunction, Request, Response, Router } from 'express';
import { Avion } from '../types/types';
import { handleDeleteAvions, handleGetAvions, handlePostAvions } from '../managers/avionManager';

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

 router.delete('/', async(request: Request, response: Response<Avion[]>, next: NextFunction)=>{
    try {
response.status(200).json(await handleDeleteAvions(request, next))
    } catch(error) {

    }
 });



//  router.put();

export default router;
