import { NextFunction, Request } from "express";
import { maintenanceModel, maintenancePost } from "../models/maintenanceModel";
import { Maintenance } from "../types/types";



export const handleGetMaintenance = async(request:Request, next:NextFunction)=>{
    try {
        return await maintenanceModel.getAll()
    } catch (error) {
        
    }
}

export const handlePostMaintenance = async(request:Request, next:NextFunction)=>{
    try {
        const maintenance:Maintenance = {
            dateDeMaintenance: request.body.dateDeMaintenance,
            description: request.body.description,
            statut: request.body.statut,
        }
        console.log(request)
        return await maintenancePost.addOne(maintenance)
    } catch (error) {

    }
}