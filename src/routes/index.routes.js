import { Router } from "express";
import { GetPeriodoP } from "../controllers/index.controller.js";
const router = Router();

router.get('/ping', GetPeriodoP ) 

export default router