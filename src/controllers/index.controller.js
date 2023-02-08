import { pool } from "../db.js";

export const GetPeriodoP =  async (req, res) => {
    const [result] =  await pool.query("SELECT * FROM periodos");
    res.json(result[0]); 
}

 
