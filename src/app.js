//qui vann todas las configuraciones del servidor, este archivo es llamado por el index 
import  express  from "express";
import PeridodoRuoutes from "./routes/periodos.routes.js"
import IndexRoutes from "./routes/index.routes.js"


const app = express()
//usar la siguiente linea para convertir todas las peticiones a formato json
app.use(express.json());
//importar rutas desde routes
app.use('/api', PeridodoRuoutes);
app.use(IndexRoutes);

//en caso de se escriba cualquier ruta no valida 

app.use((req, res, next)=>{
    res.status(404).json({
        message: "endpoint no validate"
    })
})

export default app;