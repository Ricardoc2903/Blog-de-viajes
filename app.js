require("dotenv").config
const express = require("express");
const hbs = require("express-handlebars")
const PORT = process.env.PORT || 2001
const indexRouter = require("./routes/index")
const contactoRouter = require("./routes/contacto")
const loginRouter = require("./routes/login")
const adminRouter = require("./routes/admin")
const listadoRouter = require("./routes/listado")
const modificarRouter = require("./routes/modificar")

const pool = require("./db")
const app = express();
const session = require("express-session")
const fileupload = require("express-fileupload")

//config Express-Handlebars
app.engine(".hbs", hbs.engine({extname: "hbs"}))
app.set("view engine", "hbs")
app.set("views", "./views")
app.set("views", __dirname + "/views")
//Carpeta de archivos estaticos
app.use(express.static("public"))

//middleware nativo de express que permite la lectura de datos enviados desde un formulario
app.use(express.urlencoded({extended: false}))

//express-session  Configuracion de la documentacion oficial
//https://expressjs.com/en/resources/middleware/session.html
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

//creamos el midleware para verificar los intentos de ingreso a la ruta "secret",
//aunque tratemos de entrar directamente, siempre se correra antes el middleware
//y solo podremos acceder si existe req.session.user (que se setea con un valor en caso de login positivo)
//luego, si salimos de "secret", podremos volver si escribimos la ruta, siempre que la sesion continue activa
function auth(req ,res, next) {
    if(req.session.user) {
        next()
    } else {
        res.render("login", {statusMessage: "Debe estar autorizado para acceder"})
    }
}

/*middleware de configuracion de Express-fileupload (tomado de la docu oficial)
usa carpeta y archivo temporal en ves de memoria para procesar los archivos */
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp"
}));

app.use("/", indexRouter)
app.use("/contacto", contactoRouter)
app.use("/login", loginRouter)
app.use("/admin", auth, adminRouter)
app.use("/listado", auth, listadoRouter)
app.use("/modificar", auth, modificarRouter)

app.listen(PORT, function(error) {
    error ? console.log(error) : console.log(`Servidor corriendo en http://localhost:${PORT}`)
})