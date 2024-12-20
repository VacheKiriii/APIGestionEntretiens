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
    deleteOne: async (numeroDeSerie: String) => {
        let connection;
        try {
            connection = await pool.getConnection();
            const query = 'DELETE FROM avion WHERE numéro_serie = ?';
            const result = await connection.query(query, [numeroDeSerie]);
            return result;
        } catch (error) {
            console.error('Erreur dans deleteOne :', error);
            throw error;
        } finally {
            if (connection) connection.release();
        }
    }
};


export const avionPut = {
    updateOne: async (numeroDeSerie: string, fieldsToUpdate: { [key: string]: any }) => {
        const keys = Object.keys(fieldsToUpdate);
        const values = Object.values(fieldsToUpdate);

        // Construire dynamiquement la requête SQL
        const setClause = keys.map((key) => `${key} = ?`).join(', ');
        const query = `UPDATE avion SET ${setClause} WHERE numero_serie = ?`;

        // Ajout de `numeroDeSerie` à la fin des valeurs
        values.push(numeroDeSerie);

        return await pool.query(query, values);
    },
};
