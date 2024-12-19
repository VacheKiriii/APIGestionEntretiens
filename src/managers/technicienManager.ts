import { NextFunction, Request } from "express";
import { technicienModel, technicienPost } from "../models/technicienModel";
import { Technicien } from "../types/types";



export const handleGetTechnicien = async(request:Request, next:NextFunction)=>{
    try {
        return await technicienModel.getAll()
    } catch (error) {
        
    }
}

export const handlePostTechnicien = async(request:Request, next:NextFunction)=>{
    try {
        const technicien:Technicien = {
            nom: request.body.nom,
            prenom: request.body.prenom,
            specialite: request.body.specialite,
            dateEmbauche: request.body.dateEmbauche,
        }
        console.log(request)
        return await technicienPost.addOne(technicien)
    } catch (error) {
    
    }
}