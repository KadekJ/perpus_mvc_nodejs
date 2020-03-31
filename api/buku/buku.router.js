const {
    controllerAddBuku,
    controllerUpdateBuku,
    controllerDeleteBuku,
    controllerGetBuku
} = require("./buku.controller")

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation")

router.post("/addBuku", controllerAddBuku)
router.patch("/updateBuku", controllerUpdateBuku)
router.delete("/",controllerDeleteBuku)
router.get("/", controllerGetBuku)


module.exports = router;