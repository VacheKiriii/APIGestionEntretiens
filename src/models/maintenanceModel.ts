import { Maintenance } from "../types/types";
import pool from "./bdd";

export const maintenanceModel = {
    getAll:async()=>{
        let connection;
        try {
            connection = await pool.getConnection();
            const rows = await pool.query("select * from maintenance");
            return rows;
        } catch (error) {
            if (connection) connection.release();
        }
    }
}

export const maintenancePost = {
addOne:async(maintenance:Maintenance)=>{
        let connection;
        console.log(maintenance)
        try {
            connection = await pool.getConnection();
            const rows = await pool.query(`INSERT INTO Maintenance (dateDeMaintenance, description, statut) 
            VALUES("${maintenance.dateDeMaintenance}", "${maintenance.description}", "${maintenance.statut}")`)
            return rows;
        } catch (error) {
            if (connection) connection.release();
        }
    }
}
