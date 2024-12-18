import { NextFunction, Request } from "express";
import { avionDel, avionModel, avionPost } from "../models/avionModel";
import { Avion } from "../types/types";


export const handleGetAvions = async(request:Request, next:NextFunction)=>{
    try {
        return await avionModel.getAll()
    } catch (error) {
        
    }
}

export const handlePostAvions = async(request:Request, next:NextFunction)=>{
    try {
        const avion:Avion = {
            numeroDeSerie: request.body.numeroDeSerie,
            modele: request.body.modele,
            dateMiseEnService: request.body.dateMiseEnService,
            statut: request.body.statut,
        }
        console.log(request)
        return await avionPost.addOne(avion)
    } catch (error) {

    }
}

export const handleDeleteAvions = async(request: Request, next: NextFunction)=>{
    try {
        const avion: Avion = {
            numeroDeSerie: request.body.numeroDeSerie,
            modele: request.body.modele,
            dateMiseEnService: request.body.dateMiseEnService,
            statut: request.body.statut,
        }
        console.log(request)
        return await avionDel.deleteOne(avion)
    } catch (error) {

    }
}