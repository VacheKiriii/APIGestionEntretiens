import { NextFunction, Request, Response, Router } from 'express';
import { Maintenance } from '../types/types';
import { handleGetMaintenance, handlePostMaintenance } from '../managers/maintenanceManager';

const router = Router();

 router.get('/', async(request: Request, response: Response<Maintenance[]>, next:NextFunction)=>{
    try {
response.status(200).json(await handleGetMaintenance(request, next))
    } catch (error) {
        
    }
 });

 router.post('/', async(request: Request, response: Response<Maintenance[]>, next: NextFunction)=>{
    try {
response.status(200).json(await handlePostMaintenance(request, next))
    } catch(error) {
        
    }
 });
 
//  router.put();

export default router;
