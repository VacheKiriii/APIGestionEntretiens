import { NextFunction, Request, Response, Router } from 'express';
import { Avion } from '../types/types';
import { handleDeleteAvions, handleGetAvions, handlePostAvions, handleUpdateAvion } from '../managers/avionManager';

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

 router.delete('/:numeroDeSerie', async (request: Request, response: Response<String>, next: NextFunction) => {
    try {
        const { numeroDeSerie } = request.params;
        const result = await handleDeleteAvions(numeroDeSerie);
        if (result.affectedRows > 0) {
            response.status(200).json(`L'avion avec le numéro de série "${numeroDeSerie}" a été supprimé avec succès.`);
        } else {
            response.status(404).json(`Aucun avion trouvé avec le numéro de série "${numeroDeSerie}".`);
        }
    } catch (error) {
        console.error('Erreur dans la suppression de l\'avion :', error);
        next(error);
    }
});


export default router;
