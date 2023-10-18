import { useState } from 'react'
import React from 'react'

import Alert from '../components/Alert'

const ContactPage = () => {
    const [mensaje, setMensaje] = useState("")
    const [correo, setCorreo] = useState("")
    const [alert, setAlert] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (correo === "" || mensaje === "") {
            console.log('tengo alerta')
            setAlert({
                error: true,
                msg: "Todos los campos son obligatorios",
                color: "alert danger",
            });
            return;
        }
        else {
            setAlert({
                error: false,
                msg: "Mensaje enviado exitosamente !",
                color: "alert success",
            });
            setCorreo("")
            setMensaje("")
        }
    }
    return (
        <div className="contacto">
            <h2>Como te podemos ayudar?</h2>
            <div className="formulario">
                <form onSubmit={handleSubmit}>
                    <div className="formInputs">
                        <label htmlFor="email">Correo</label>
                        <input type="email" name="email" id="email" onChange={(e) => setCorreo(e.target.value)} value={correo} />
                    </div>
                    <div className="formInputs">
                        <label htmlFor="message">Descripción</label>
                        <textarea name="message" id="message" onChange={(e) => setMensaje(e.target.value)} value={mensaje} />
                    </div>
                    <div className="formButton"><button className='button' type="submit">Enviar</button></div>
                </form>
                <Alert mensaje={alert.msg} color={alert.color} />
            </div>
        </div>
    )
}


export default ContactPage