import {Xe} from "../model/xe";
import {AppDataSource} from "../data-source";






class XeServices {
    private xeRepository;

    constructor() {
        this.xeRepository = AppDataSource.getRepository(Xe)


    }

    getAll = async () => {
        let sql = `select * from xe join hang  on xe.idHang = hang.idHang  `
        let xes = await this.xeRepository.query(sql);
        return xes;
    }

    save = async (xe) => {

        return this.xeRepository.save(xe)
    }




    edit = async (id, newXe) => {

        let xe = await this.xeRepository.findOneBy({idXe:id})
        if(!xe) {
            return null
        }
        else {
            return await this.xeRepository.update({idXe: id}, newXe)
        }


    }

    remove = async (id) => {
        let xe = await this.xeRepository.findOneBy({idXe: id});
        if (!xe) {
            return null;
        }
        return this.xeRepository.delete({idXe: id})
    }

    getXe1 = async (id) => {
        let sql = `select * from xe join hang  on xe.idHang = hang.idHang where xe.idXe = ${id}  `
        let xes = await this.xeRepository.query(sql);
        return xes;
    }

    getXe2 = async (name) => {

        let sql = `select * from xe join hang  on xe.idHang = hang.idHang where xe.tenXe = '${name}'  `
        let xes = await this.xeRepository.query(sql);
        return xes;
    }

    getXe3 = async (id) => {

        let sql = `select * from xe join hang  on xe.idHang = hang.idHang where xe.idHang = ${id}  `
        let xes = await this.xeRepository.query(sql);
        return xes;
    }

    findmax = async () => {
      let sql = ` select * from xe join hang on xe.idHang = hang.idHang order by xe.giaXe ASC`
        let xes = await this.xeRepository.query(sql);
        return xes;
    }

    findmin = async () => {
        let sql = ` select * from xe join hang on xe.idHang = hang.idHang order by xe.giaXe DESC`
        let xes = await this.xeRepository.query(sql);
        return xes;
    }

    findmaxquantity = async () => {

        let sql1 = `select MAX(soLuong) as'soLuong' from xe`;
        let a = await this.xeRepository.query(sql1);

        let sql =  ` select tenHang from xe join hang on xe.idHang = hang.idHang where xe.soLuong = ${a[0].soLuong}`;
        let xes = await this.xeRepository.query(sql);
        return xes;
    }



    getXe4 = async (gia1, gia2) => {
        let sql = `select * from dongco.xe x join dongco.hang h on h.idHang = x.idHang where x.giaXe > ${gia1} and x.giaXe <  ${gia2}`
    let xes = await this.xeRepository.query(sql);
        return xes;

    }




}

export default new XeServices();