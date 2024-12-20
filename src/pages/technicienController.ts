import { NextFunction, Request, Response, Router } from 'express';
import { Technicien } from '../types/types';
import { handleDeleteTechnicien, handleGetTechnicien, handlePostTechnicien } from '../managers/technicienManager';

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

 router.delete('/:id_technicien', async (request: Request, response: Response<String>, next: NextFunction) => {
    try {
        const { id } = request.params;
        const result = await handleDeleteTechnicien();
        if (result.affectedRows > 0) {
            response.status(200).json(`L'avion avec le numéro de série "${id}" a été supprimé avec succès.`);
        } else {
            response.status(404).json(`Aucun avion trouvé avec le numéro de série "${id}".`);
        }
    } catch (error) {
        console.error('Erreur dans la suppression de l\'avion :', error);
        next(error);
    }
});

 export default router;