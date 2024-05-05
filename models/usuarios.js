const pool = require("../db")
const md5= require("md5")

const getUser = async (email, pass) => {
    const consulta = "SELECT * FROM usuarios WHERE email = ? AND password = ? LIMIT 1"
    const row = await pool.query(consulta, [email, md5(pass)])
    return row[0]
}

module.exports = getUser;
