const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer")

router.get("/", function(req, res){
    res.render("contacto")
})

router.post("/", async function(req, res) {
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "e89942ba7cd99f",
          pass: "eaae3460834777"
        }
      });
      const {nombre, apellido, email, mensaje} = req.body
      const emailSaliente = {
        to: "atencionclientes@ricardo.org",
        from: email,
        subject: "Mensaje desde el formulario de contacto",
        html: `${nombre} ${apellido} ha enviado el siguiente mensaje ${mensaje}`
        //nombre: nombre, cuando el nombre de la propiedad y el nombre de la variable son iguales solo se escribe una sola vez
      }

      try {
        const sendMailStatus = await transport.sendMail(emailSaliente);
        let statusMessage = ""
        if (sendMailStatus.rejected.length) {
            statusMessage = "No pudimos enviar el mail"
        } else {
            statusMessage = "Mensaje enviado"
        }
        res.render("contacto", {statusMessage})
      } catch (error) {
        res.render("contacto", {statusMessage: "Servidor fuera de servicio"})
      }
})

module.exports = router