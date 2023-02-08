import { Router } from "express";
import { GetPeriodo, CreatePeriodo, UpdatePeriodo, DeletePeriodo } from "../controllers/periodos.controller.js";

const routes  = Router();

routes.get('/periodo', GetPeriodo)
routes.get('/periodo/:id', GetPeriodo)
routes.post('/periodo', CreatePeriodo)
routes.put('/periodoup/:id', UpdatePeriodo)
routes.delete('/periododel/:id', DeletePeriodo)

export default routes; 