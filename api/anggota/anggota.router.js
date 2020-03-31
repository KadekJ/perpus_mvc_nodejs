const {
    controllerAddAnggota,
    controllerUpdateAnggota,
    controllerDeleteAnggota,
    controllerGetAnggota
} = require("./anggota.controller")

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation")

router.post("/addAnggota", controllerAddAnggota)
router.patch("/updateAnggota", controllerUpdateAnggota)
router.delete("/",controllerDeleteAnggota)
router.get("/", controllerGetAnggota)


module.exports = router;