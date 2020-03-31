const db = require("../../config/connection")

module.exports = {
    serviceAddBuku: (data, callBack)=>{
        db.query(
            `insert into buku (nm_buku, pengarang, penerbit, tarif, durasi)
            values (?,?,?,?,?)`,
            [
                data.nm_buku,
                data.pengarang,
                data.penerbit,
                data.tarif,
                data.durasi
            ],
            (err, result, fileds)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, result)
                }

            }
        )
    },
    serviceUpdateBuku: (data, callBack)=>{
        db.query(
            `update buku set nm_buku=?, pengarang=?, penerbit=?, tarif=?, durasi=?`,
            [
                data.nm_buku,
                data.pengarang,
                data.penerbit,
                data.tarif,
                data.durasi,
                data.kd_buku
            ],
            (err, results, fileds)=>{
                if(err){
                    return callBack(err);
                }else{
                    return callBack(null, results)
                }
            }
        )
    },       
    serviceDeleteBuku:(data,callBack)=>{
        db.query(
            `delete from petugas where kd_buku=?`,
        [data.id],
        (err,result)=>{
           if(err){
               return callBack(err)
           }if(!result){
               callBack(result)
           }else{
               return callBack(null, result)
           }
        }
    )},
    serviceGetBuku:callBack=>{
        db.query(`select * from buku`,
        (err,result, fileds)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null,result)
            }
        })
    }
}