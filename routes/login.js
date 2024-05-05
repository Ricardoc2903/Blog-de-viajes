const express = require("express")
const router = express.Router()
const usuarios = require("../models/usuarios")

router.get("/", (req, res) => {
    res.render("login")
})

router.post("/", async (req, res) => {
    const data = await usuarios(req.body.email, req.body.pass)
    if(data != undefined) {
        req.session.user = req.body.email
        res.render("admin", {user: req.session.user})
    } else {
        res.render("login", { statusMessage: "Usuario o contraseña incorrecto"})
    }
})

router.get("/logout", (req,res) => {
    req.session.destroy()
    res.redirect("/")
})

module.exports = router