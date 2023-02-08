import { pool } from "../db.js";

const queries = {
"all": "SELECT * FROM periodos",
"one": "SELECT * FROM periodos where id = ?",
"delete": "DELETE FROM periodos where id = ?",
"update": "update periodos set nombre = ? where id = ?"
}
export const GetPeriodo = async (req, res) => {
    

   try {
    if (req.params.id) {
      
        const [result] =  await pool.query(queries.one, [req.params.id]);
    if (result<=0){
        return res.status(404).json({
            message: "NO se encontro el periodo"
        })
    } 
        res.send(result[0])

    } else {
        const [result] =  await pool.query(queries.all);
        res.send(result)  //el arreglo 0 sino te tira los corchetes
    }
   } catch (error) {
    return res.status(500).json({
        Message: "Algo salio mal"
    })
   }

};

export const CreatePeriodo = async (req, res) => {
    try {
            //res.send(req.body)
    const {nombre} = req.body   
    const [result] = await pool.query("INSERT INTO periodos (nombre) values (?)", [nombre] )
    res.send({
        id: result.insertId,
        nombre
    })
    } catch (error) {
    
    }
    
}





export const UpdatePeriodo = async (req, res) => {
    const id = req.params.id
    //definir en un arreglo losparametros del body
    const {nombre} = req.body
    try {
        
    if (req.body.nombre) {
        const result = await pool.query(queries.update, [nombre, id])
        if (result.affectedRows <=0) {
            return res.status(404).json({
                message: "NO se encontro el periodo"
            })
        }
        //res.sendStatus(204)

        //PARA VER QUE MODIFIQUE // NO ES NECESARIO
        const [rows] = await pool.query(queries.one, [id])
        res.send(rows[0])

    } else {
        res.sendStatus(404)
    } 

    
    } catch (error) {
        return res.status(500).json({
            Message: "Algo salio mal"
        })
    }
    
}





export const DeletePeriodo = async (req, res) => {
    try {
        const id = req.params.id
    if (id) {
        const [result] = await pool.query(queries.delete, [id])
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "NO se encontro el registro a borrar"
            })
        }
        
    } else {
        res.send("NO parametros")
    }
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            Message: "Algo salio mal"
        })
    }
}