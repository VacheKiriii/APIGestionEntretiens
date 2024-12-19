import { NextFunction, Request, Response, Router } from 'express';
import { Technicien } from '../types/types';
import { handleGetTechnicien, handlePostTechnicien } from '../managers/technicienManager';

const router = Router();

 router.get('/', async(request: Request, response: Response<Technicien[]>, next:NextFunction)=>{
    try {
response.status(200).json(await handleGetTechnicien(request, next))
    } catch (error) {
        
    }
 });

 router.post('/', async(request: Request, response: Response<Technicien[]>, next: NextFunction)=>{
    try {
response.status(200).json(await handlePostTechnicien(request, next))
    } catch(error) {
        
    }
 });