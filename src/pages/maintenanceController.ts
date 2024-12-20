import { NextFunction, Request, Response, Router } from 'express';
import { Maintenance } from '../types/types';
import { handleDeleteMaintenance, handleGetMaintenance, handlePostMaintenance } from '../managers/maintenanceManager';

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

  router.delete('/:id_maintenance', async (request: Request, response: Response<String>, next: NextFunction) => {
    try {
        const { id } = request.params;
        const result = await handleDeleteMaintenance();
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
