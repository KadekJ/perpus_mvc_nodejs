const {
    serviceAddPetugas,
    serviceUpdatePetugas,
    serviceDeletePetugas,
    serviceGetPetugas,
    serviceGetPetugasByEmail
} = require("./petugas.service")

const {genSaltSync, hashSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken")

module.exports = { 
    controllerAddPetugas: (req, res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        serviceAddPetugas(body, (err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success:1, 
                data: results
            })
        })
    },
    controllerUpdatePetugas: (req, res)=>{
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(`${body.password}`, salt)
        // const param = req.params
        // const data = {
        //     nm_petugas : body.nm_petugas,
        //     jabatan : body.jabatan,
        //     tlpn_petugas : body.tlpn_petugas,
        //     email : body.email,
        //     password : body.password,
        //     kd_petugas : param
        // }
        serviceUpdatePetugas(body, (err, results)=> {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message:"update failed"
                })
            }else{
                return res.json({
                    success: 1,
                    message: "update berhasil",
                    body
                })
            }
        })
    },
    controllerDeletePetugas: (req, res)=>{
        const param = req.params.serviceAddPetugas

        serviceDeletePetugas(param, (err, result)=>{
            if (err) {
                console.log(err)
                return res.json({
                    message: "Delete Petugas Failed"
                })
            } else {
                res.json({
                    message: "Data berhasil dihapus"
                })
            
            }
        })
    },

    controllerGetPetugas: (req, res)=>{
        serviceGetPetugas((err, results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    success: 1, 
                    data: results
                })
            }
        })
    },
    controllerLogin: (req, res)=>{
        const body = req.body
        serviceGetPetugasByEmail(body.email, (err, results)=>{
            if(err){
                console.log(err)
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Invalid email or password"
                })
            }
            const result = compareSync(body.password, results.password)

            if(result){
                results.password = undefined
                const jsonwebtoken = sign({result:results}, "secretkey",{
                    expiresIn: "1h"
                })
                return res.json({
                    success: 1,
                    message: "Login successfully, Your Account Already Use",
                    account: results,
                    token: jsonwebtoken
                })
            }else{
                return res.json({
                    success: 0,
                    message: "email or password invalid",
                })
            }
        })
    }
}