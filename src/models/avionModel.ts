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