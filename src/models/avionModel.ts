import { Avion } from "../types/types";
import pool from "./bdd";

export const avionModel = {
    getAll:async()=>{
        let connection;
        try {
            connection = await pool.getConnection();
            const rows = await pool.query("select * from avion");
            return rows;
        } catch (error) {
            
        }
    }
}

export const avionPost = {
addOne:async(avion:Avion)=>{
        let connection;
        console.log(avion)
        try {
            connection = await pool.getConnection();
            const rows = await pool.query(`INSERT INTO Avion (numéro_serie, modèle, date_mise_en_service, statut) 
            VALUES("${avion.numeroDeSerie}", "toto", "2020-11-12", "test")`)
            return rows;
        } catch (error) {

        }
    }
}