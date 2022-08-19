import React from 'react';
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3, faGithub, faBootstrap, faLinkedin, faTypeScript } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import portada from './Circle-icons-computer.png'
import typescript from './typescript.svg'

const Home = () => {

    const [htmlEstilos, setHtmlEstilos] = useState({ display: "none" })
    const [cssEstilos, setCssEstilos] = useState({ display: "none" })
    const [javascriptEstilos, setJavascriptEstilos] = useState({ display: "none" })
    const [reactEstilos, setReactEstilos] = useState({ display: "none" })
    const [githubEstilos, setGithubEstilos] = useState({ display: "none" })
    const [bootstrapEstilos, setBootstrapEstilos] = useState({ display: "none" })
    const tagStyle = { fontSize: "12px", position: "absolute", backgroundColor: "rgba(0,0,0, 0.8)", minWidth: "auto", textAlign: "center", borderRadius: "10px", marginTop: "-17px", padding: "0px 5px 0px 5px", fontWeight: "700" }


    return (
        <motion.div initial={{ opacity: 0.0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.container}>
            <div className={styles.presentation}>

                <div className={styles.img_container}>

                    <img className={styles.central_img} src={portada} alt="" />
                </div>
                <div className={styles.card}>
                    <div className={styles.about}>
                        <h2>Sobre mi</h2>
                        <p>Hola, me llamo Agustín Gauna, tengo 24 años y soy Frontend Developer.</p>
                        <p>Me especializo en React JS y tambien me gusta utilizar TypeScript.</p>
                        <p>Actualmente vivo en Buenos Aires - Argentina.</p>
                        <p>En mi tiempo libre me gusta juntarme con amigos, ver series y hacer ejercicio.</p>
                        <div>

                        </div>
                    </div>
                    <div className={styles.tech}>
                        <h2>Habilidades</h2>
                        <ul>
                            <li> <FontAwesomeIcon onMouseEnter={() => { setHtmlEstilos(tagStyle) }} onMouseLeave={() => { setHtmlEstilos({ display: "none" }) }} title='HTML' className={styles.html} icon={faHtml5}></FontAwesomeIcon> <div style={htmlEstilos} >HTML</div>  </li>
                            <li> <FontAwesomeIcon onMouseEnter={() => { setCssEstilos(tagStyle) }} onMouseLeave={() => { setCssEstilos({ display: "none" }) }} title='CSS' className={styles.css} icon={faCss3}></FontAwesomeIcon> <div style={cssEstilos} >CSS</div> </li>
                            <li> <FontAwesomeIcon onMouseEnter={() => { setBootstrapEstilos(tagStyle) }} onMouseLeave={() => { setBootstrapEstilos({ display: "none" }) }} title='Bootstrap' className={styles.bootstrap} icon={faBootstrap}></FontAwesomeIcon> <div style={bootstrapEstilos} >Bootstrap</div>  </li>
                            <li> <FontAwesomeIcon onMouseEnter={() => { setJavascriptEstilos(tagStyle) }} onMouseLeave={() => { setJavascriptEstilos({ display: "none" }) }} title='JavaScript' className={styles.js} icon={faJs}></FontAwesomeIcon><div style={javascriptEstilos} >JavaScript</div>   </li>
                            <li> <FontAwesomeIcon onMouseEnter={() => { setReactEstilos(tagStyle) }} onMouseLeave={() => { setReactEstilos({ display: "none" }) }} title='React' className={styles.react} icon={faReact}></FontAwesomeIcon> <div style={reactEstilos} >React</div>  </li>
                            <li> <FontAwesomeIcon onMouseEnter={() => { setGithubEstilos(tagStyle) }} onMouseLeave={() => { setGithubEstilos({ display: "none" }) }} title='Github' className={styles.Github} icon={faGithub}></FontAwesomeIcon> <div style={githubEstilos} >React</div>  </li>
                        </ul>
                    </div>
                    <div className={styles.mobileRedes}>
                        <h2>Redes</h2>
                        <div className={styles.socialsContainer}>
                            <a className={styles.linkedinLink} target="_blank" rel='noopener noreferrer' href="https://github.com/AgustinGauna"> <FontAwesomeIcon className={styles.socials} icon={faGithub}></FontAwesomeIcon></a>
                            <a className={styles.linkedinLink} target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/agustingauna97/"> <FontAwesomeIcon className={styles.socials} icon={faLinkedin}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
                <Link to="/files/CV.pdf" target="_blank" rel='noopener noreferrer'><button className={styles.cv_btn}> Descargar CV <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></button></Link>



            </div>
        </motion.div>
    )
}

export default Home