import { Technicien } from "../types/types";
import pool from "./bdd";

export const technicienModel = {
    getAll:async()=>{
        let connection;
        try {
            connection = await pool.getConnection();
            const rows = await pool.query("select * from technicien");
            return rows;
        } catch (error) {
            if (connection) connection.release();
        }
    }
}

export const technicienPost = {
    addOne:async(technicien:Technicien)=>{
            let connection;
            console.log(technicien)
            try {
                connection = await pool.getConnection();
                const rows = await pool.query(`INSERT INTO technicien (nom, prenom, specialite, date_embauche) 
                VALUES("${technicien.nom}", "${technicien.prenom}", "${technicien.specialite}", "${technicien.dateEmbauche}")`)
                return rows;
            } catch (error) {
                if (connection) connection.release();
            }
        }
    }

    export const technicienDel = {
        deleteOne: async (id?: number) => {
            let connection;
            try {
                connection = await pool.getConnection();
                const query = 'DELETE FROM technicien WHERE id_technicien = ?';
                const result = await connection.query(query, [id]);
                return result;
            } catch (error) {
                console.error('Erreur dans deleteOne :', error);
                throw error;
            } finally {
                if (connection) connection.release();
            }
        }
    };