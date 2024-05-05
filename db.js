const mysql = require("mysql")
const util = require("util")

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    database: "BlogDeViajes",
    user: "root",
    password: "",
})

pool.getConnection(function(err, connection) {
    if (err) {
        console.warn("No se pudo establecer la conexion", {error: err.message })
    } else {
        console.log("Conexion con la base de datos establecida...")
    }
})
pool.query = util.promisify(pool.query)


module.exports = pool