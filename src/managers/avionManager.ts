import { NextFunction, Request } from "express";
import { avionModel } from "../models/avionModel";



export const handleGetAvions = async(request:Request, next:NextFunction)=>{
    try {
        return await avionModel.getAll()
    } catch (error) {
        
    }
}