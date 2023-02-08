import {Router} from "express";
import {xeRouter} from "./xe-router";

export  const router = Router()
router.use('/xe',xeRouter)




