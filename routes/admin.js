const express = require("express")
const router = express.Router()
const cloudinary = require('cloudinary').v2
const util = require("util")
const paises = require("../models/lugardeviaje")

cloudinary.config({
    cloud_name: 'dsurigiug',
    api_key: '612191667777482',
    api_secret: 'aR496GeeEI4IlotNUsWKCo4g7tM'
  });

//utilidades cloudinary
const upload = util.promisify(cloudinary.uploader.upload);

router.get("/", (req, res) => {
    res.render("admin", {user: req.session.user})
})

router.post("/", async (req, res ) => {
    const public_id = (await upload(req.files.imagen.tempFilePath)).public_id;
    await paises.agregarPais({...req.body, imagen: public_id})
    res.redirect("/admin")
})

module.exports = router