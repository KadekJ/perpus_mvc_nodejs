require("dotenv").config();
const express = require('express')
const app = express();
const userRouter = require("./api/users/user.router")
const bukuRouter = require("./api/buku/buku.router")
const anggotaRouter = require("./api/anggota/anggota.router")
const peminjamanRouter = require("./api/peminjaman/peminjaman.router")
const petugasRouter = require("./api/petugas/petugas.router")

app.use(express.json())
app.use("/api/users", userRouter)
app.use("/api/buku", bukuRouter)
app.use("/api/anggota", anggotaRouter)
// app.use("/api/peminjaman", peminjamanRouter)
app.use("/api/petugas", petugasRouter)

app.listen(process.env.APP_PORT, ()=>{
    console.log("running on port " + process.env.APP_PORT)
})