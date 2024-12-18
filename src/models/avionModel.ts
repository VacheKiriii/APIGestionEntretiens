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
            if (connection) connection.release();
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
            VALUES("${avion.numeroDeSerie}", "${avion.modele}", "${avion.dateMiseEnService}", "${avion.statut}")`)
            return rows;
        } catch (error) {
            if (connection) connection.release();
        }
    }
}

export const avionDel = {
    deleteOne:async(avion: Avion)=>{
        let connection;
        console.log(avion)
        try{
            connection = await pool.getConnection();
            const rows = await pool.query('DELETE FROM avion WHERE avion.numero_serie = ', [avion.numeroDeSerie])
            return rows;
        } catch (error) { 
            if (connection) connection.release();
        }
    }
}