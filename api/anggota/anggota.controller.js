const {
    serviceAddAnggota,
    serviceUpdateAnggota,
    serviceDeleteAnggota,
    serviceGetAnggota
} = require("./anggota.service")

module.exports = {
    controllerGetAnggota: (req, res) => {
        serviceGetAnggota((err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                result
            })
        })
    },
    controllerUpdateAnggota: (req, res) => {
        let body = req.body
        const param = req.params
        const data = {
            nm_anggota : body.nm_anggota,
            alamat : body.alamat,
            tlpn : body.tlpn,
            kd_buku : param
        }
        serviceUpdateAnggota(body, (err, resluts)=>{
            if(err){
                console.log(err)
                return
            }
            if(!resluts){
                return res.json({
                    success: 0,
                    message: "Update gagal"
                })
            }else{
                return res.json({
                    success : 1,
                    message: "Update berhasil",
                    body
                })
            }
        })
    },    
    controllerDeleteAnggota: (req, res) => {
        const id = req.params;
        serviceDeleteAnggota(id, (err, results) => {
            if (err) {
                console.lod(err)
                return
            }
            if(!results){
                return res.json({
                    success : 0,
                    message: "Record not found"
                })
            }else{
                return res.json({
                    success : 1,
                    message : "Delete berhasil"
                })
            }
        })
    },
    controllerAddAnggota: (req, res) => {
        const data = req.body;
        console.log(data);
        serviceAddAnggota(data, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                data
            })
        })
    }
}