const db = require("../../config/connection")

module.exports = {
    serviceAddPetugas: (data, callBack) => {
        db.query(
            `insert into petugas(nm_petugas, jabatan, tlpn_petugas, email, password)
            values (?,?,?,?,?)`,
            [
                data.nm_petugas,
                data.jabatan,
                data.tlpn_petugas,
                data.email,
                data.password
               
            ],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(null, result)
                }
            }
        )
    },
    serviceGetPetugas: callBack =>{
        db.query(
            `select * from petugas`,
            [],
            (err, results, fields)=> {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results)
                }
            }
        )
    },
    serviceUpdatePetugas: (data, callBack) => {
        db.query(
            `update petugas set nm_petugas=?, jabatan=?, tlpn_petugas=?)`,
            [
                data.nmPetugas,
                data.jabatan,
                data.tlpn,
                data.email,
                data.password,
                data.kd_petugas
            ],
            (err, results, fields) => {
                if (err) {
                    return callBack(err)
                } else {
                    return callBack(null, results)
                }
            }
        )
    },
    serviceDeletePetugas: (data, callBack) => {
        db.query(
            `delete from where kd_petugas=?`,
            [data],
            (err, result, fields) => {
                if (err) {
                    return callBack(err)
                } if(!result){
                    callBack(result)
                }else{
                    db.query(`delete from petugas where kd_petugasa=?`),
                    [data.param]
                    return callBack(null, result[0])
                }
            }
        )
    },
    serviceGetPetugasByEmail: (email, callBack)=>{
        db.query(
            `select email, password from petugas where email = ?`,
            [email],
            (err, results, fields) => {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results[0])
                }
            }
        )
    }
}