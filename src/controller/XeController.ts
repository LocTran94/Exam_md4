import {Request, Response} from "express";
import XeService from "../service/XeService";
import xeService from "../service/XeService";

class XeController {
    private xeServices;

    constructor() {
        this.xeServices = xeService;
    }

    getAllXe = async (req: Request, res: Response) => {
        try {
            let response = await this.xeServices.getAll();
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }


    addXe = async (req: Request, res: Response) => {
        try {
            let xes = await xeService.save(req.body);
            res.status(200).json(xes)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    editXe = async (req: Request, res: Response) => {

        try {
            let xe = await this.xeServices.edit(req.params.idXe, req.body);
            res.status(201).json(xe)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    removeXe = async (req: Request, res: Response) => {
        try {
            let id = req.params.idXe;
            let xe = await this.xeServices.remove(id);
            res.status(200).json(xe)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    getXe = async (req: Request, res)=>{
        try {
            let id = req.params.idXe;
            let response = await this.xeServices.getXe1(id);

            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    findName = async (req: Request, res)=>{

        try {
            let name = req.params.tenXe;
            let response = await this.xeServices.getXe2(name);

            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message)
        }
}

findHang = async (req: Request, res)=>{

        try {
            let id = req.params.idHang;
            let response = await this.xeServices.getXe3(id);

            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e.message)
        }
}


find = async (req: Request, res)=>{
    try {
        let response = await this.xeServices.findmax();
        res.status(200).json(response)
    } catch (e) {
        res.status(500).json(e.message)
    }
}


find1 = async (req: Request, res)=>{
    try {
        let response = await this.xeServices.findmin();
        res.status(200).json(response)
    } catch (e) {
        res.status(500).json(e.message)
    }
}

findmaxxe = async (req: Request, res)=>{
    try {
        let response = await this.xeServices.findmaxquantity();
        res.status(200).json(response)
    } catch (e) {
        res.status(500).json(e.message)
    }
}

}


export default new XeController();