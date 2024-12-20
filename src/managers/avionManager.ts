import { NextFunction, Request, request } from "express";
import { avionDel, avionModel, avionPost, avionPut } from "../models/avionModel";
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

export const handleDeleteAvions = async (numeroDeSerie: String) => {
    try {
        return await avionDel.deleteOne(numeroDeSerie);
    } catch (error) {
        console.error('Erreur dans handleDeleteAvions :', error);
        throw error;
    }
};

interface AvionUpdateData {
    modele?: string;
    dateMiseEnService?: string;
    statut?: string;
}

export const handleUpdateAvion = async (numeroDeSerie: string, data: AvionUpdateData) => {
    try {
        const fieldsToUpdate: { [key: string]: any } = {};

        if (data.modele) fieldsToUpdate['modele'] = data.modele;
        if (data.dateMiseEnService) fieldsToUpdate['date_mise_en_service'] = data.dateMiseEnService;
        if (data.statut) fieldsToUpdate['statut'] = data.statut;

        if (Object.keys(fieldsToUpdate).length === 0) {
            throw new Error('Aucun champ valide à mettre à jour.');
        }

        return await avionPut.updateOne(numeroDeSerie, fieldsToUpdate);
    } catch (error) {
        throw error;
    }
};