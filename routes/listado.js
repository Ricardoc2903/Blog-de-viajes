// const express = require("express")
// const router = express.Router()
// const cloudinary = require("cloudinary").v2
// const lugardeviaje = require("../models/lugardeviaje")

// cloudinary.config({
//     cloud_name: 'dsurigiug',
//     api_key: '612191667777482',
//     api_secret: 'aR496GeeEI4IlotNUsWKCo4g7tM'
//   });

// router.get("/", async(req, res) => {
//     const data = await lugardeviaje.leerLugardeviaje
//     const paises = data.map((row) => {
//         const imagen = cloudinary.url(row.imagen, {
//             width: 80,
//             height: 80,
//             crop: "fill"
//         });
//         return {...row, imagen}
//     })
//     res.render("listado", {paises, user: req.session.user})
// });

// module.exports = router

const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const lugardeviaje = require("../models/lugardeviaje");
const util = require("util")
const destroy = util.promisify(cloudinary.uploader.destroy);

cloudinary.config({
    cloud_name: 'dsurigiug',
    api_key: '612191667777482',
    api_secret: 'aR496GeeEI4IlotNUsWKCo4g7tM'
});

router.get("/", async (req, res) => {
    const data = await lugardeviaje.leerLugaresdeviaje();
    const paises = data.map((row) => {
        const imagen = cloudinary.url(row.imagen, {
            width: 80,
            height: 80,
            crop: "fill"
        });
        return { ...row, imagen };
    });
    res.render("listado", { paises, user: req.session.user });
});

router.get("/borrar/:id", async(req, res) => {
    const row = await lugardeviaje.leerLugardeviaje(req.params.id)
    await destroy(row[0].imagen)
    await lugardeviaje.borrarLugardeviaje(req.params.id)
    res.redirect("/listado")
})

router.get("/modificar/:id", async(req, res) => {
    const data = await lugardeviaje.leerLugardeviaje(req.params.id)
    const pais = data.map((row) => {
        return {...row}
    })
    res.render("modificar", {pais})
})

router.post("/modificar", async(req,res) => {
    const { id, pais, ciudad, localizacion } = req.body
    const data = {
        pais, ciudad, localizacion
    }
    await lugardeviaje.cambiarPais(data, id)
    res.redirect("/admin")
})

module.exports = router;