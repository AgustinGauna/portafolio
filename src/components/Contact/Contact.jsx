import React, { useState, useRef } from 'react'
import styles from './Contact.module.css'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {



    const form = useRef();
    const [nameError, setNameError] = useState("")
    const [mailError, setMailError] = useState("")
    const [mensajeError, setMensajeError] = useState("")
    const sendEmail = (e) => {
        e.preventDefault();
        const from = form.current.fullname.value
        const email = form.current.email.value
        const mensaje = form.current.message.value
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (from.length < 2) {
            setNameError("Ingrese un nombre valido")
            return
        } else {
            setNameError("")
        }

        if (emailRegex.test(email) === false) {
            setMailError("Ingrese un email valido")
            return
        } else {
            setMailError("")
        }

        if (mensaje.length < 3) {
            setMensajeError("Ingrese un mensaje valido")
            return
        } else {
            setMensajeError("")
        }

        emailjs.sendForm(`${process.env.REACT_APP_KEY1}`, `${process.env.REACT_APP_KEY2}`, form.current, `${process.env.REACT_APP_KEY3}`)
            .then(() => {
                toast.success("El mensaje se ha enviado exitosamente")
            })
            .catch(() => {
                toast.error("No se ha podido enviar el mail, intente de nuevo mas tarde")
            })

        e.target.reset();
    };



    return (
        <motion.div initial={{ opacity: 0.0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.container}>
            <h1>Contactame </h1>
            <div className={styles.formContainer}>

                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="fullname"> Nombre</label>
                    <input id="fullname" type="text" name="from_name" />
                    <p className={styles.error}>{nameError}</p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="from_email" />
                    <p className={styles.error}>{mailError}</p>
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" cols='5' rows='7' />
                    <p className={styles.error}>{mensajeError}</p>
                    <div className={styles.separador}></div>
                    <div className={styles.cover}><button type="submit" > Enviar</button></div>


                </form>
            </div>

            <div className={styles.orContainer}>
                <div className={styles.line}></div><h2 className={styles.or}>O</h2><div className={styles.line2}></div>
            </div>
            <a className={styles.linkedinLink} target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/agustingauna97/"><FontAwesomeIcon className={styles.icon} icon={faLinkedin}></FontAwesomeIcon></a>
        </motion.div>
    )
}

export default Contact