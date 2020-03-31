const {
    controllerAddPetugas,
    controllerGetPetugas,
    controllerUpdatePetugas,
    controllerDeletePetugas,
    controllerLogin 
} = require("./petugas.controller");

const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation")

router.post("/", controllerAddPetugas);
router.get("/", checkToken, controllerGetPetugas);
router.patch("/", checkToken, controllerUpdatePetugas);
router.delete("/", checkToken, controllerDeletePetugas);
router.post("/login", controllerLogin)

module.exports = router;