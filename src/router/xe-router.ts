import {Router} from "express";


import xeController from "../controller/XeController";


export const xeRouter = Router();

xeRouter.get('/', xeController.getAllXe);
xeRouter.post('/addXe',xeController.addXe);
xeRouter.put('/suaXe/:idXe',xeController.editXe);
xeRouter.delete('/xoaXe/:idXe',xeController.removeXe);
xeRouter.get('/xemXe/:idXe',xeController.getXe);
xeRouter.get('/timHang/:idHang',xeController.findHang);
xeRouter.get('/tangDan',xeController.find);
xeRouter.get('/giamDan',xeController.find1);
xeRouter.get('/nhieuxe',xeController.findmaxxe);



