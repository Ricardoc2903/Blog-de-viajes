// const pool = require("../db");

// const agregarPais = async (pais) => {
//     try {
//         // Construye la consulta SQL con placeholders para evitar SQL Injection
//         const query = "INSERT INTO lugardeviaje (pais, ciudad, localizacion, imagen) VALUES (?, ?, ?, ?)";
//         const values = [pais.pais, pais.ciudad, pais.localizacion, pais.imagen];

//         // Ejecuta la consulta SQL con los valores
//         const row = await pool.query(query, values);
//         return row;
//     } catch (error) {
//         console.log(error);
//     }
// };

// async function leerLugardeviaje () {
//     try {
//         const query = "SELECT * FROM lugardeviaje";
//         const rows = await pool.query(query);
//         return rows
//     } catch (error) {
//         console.log(error)
//     }    
// }
// module.exports = { agregarPais, leerLugardeviaje };

const pool = require("../db");

async function agregarPais(pais) {
    try {
        const query = "INSERT INTO lugardeviaje (pais, ciudad, localizacion, imagen) VALUES (?, ?, ?, ?)";
        const values = [pais.pais, pais.ciudad, pais.localizacion, pais.imagen];
        const row = await pool.query(query, values);
        return row;
    } catch (error) {
        console.log(error);
    }
}

async function leerLugaresdeviaje() {
    try {
        const query = "SELECT * FROM lugardeviaje";
        const rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}


async function leerLugardeviaje(id) {
    try {
        const query = `SELECT * FROM lugardeviaje WHERE id = ${id} LIMIT 1`
        const row = await pool.query(query)
        return row
    } catch (error) {
        console.log(error)
    }
}

const borrarLugardeviaje = async(id) => {
    try {
        const query = `DELETE FROM lugardeviaje WHERE id = ${id}`
        const row = await pool.query(query)
        return row
    } catch (error) {
        console.log(error)
    }
}

const cambiarPais = async(data, id) => {
    try {
        const query = "UPDATE lugardeviaje SET ? WHERE id = ?";
        const row = await pool.query(query, [data, id])
        return row
    } catch (error) {
        console.log(error)
    }
}

module.exports = { agregarPais, leerLugaresdeviaje, leerLugardeviaje, borrarLugardeviaje, cambiarPais };