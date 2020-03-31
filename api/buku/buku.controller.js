const {
    serviceAddBuku,
    serviceUpdateBuku,
    serviceDeleteBuku,
    serviceGetBuku
} = require("./buku.service")

module.exports = {
    controllerGetBuku: (req, res) => {
        serviceGetBuku((err, result) => {
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
    controllerUpdateBuku: (req, res) => {
        let body = req.body
        const param = req.params
        const data = {
            nm_buku : body.nm_buku,
            pengarang : body.pengarang,
            penerbit : body.penerbit,
            tarif : body.tarif,
            durasi : body.durasi,
            kd_buku : param
        }
        serviceUpdateBuku(body, (err, resluts)=>{
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
    controllerDeleteBuku: (req, res) => {
        const id = req.params;
        serviceDeleteBuku(id, (err, results) => {
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
    controllerAddBuku: (req, res) => {
        const data = req.body;
        console.log(data);
        serviceAddBuku(data, (err, results) => {
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