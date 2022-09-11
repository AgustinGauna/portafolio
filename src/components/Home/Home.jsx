import React from 'react';
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import portada from './Circle-icons-computer.png'

const Home = () => {

    const [htmlEstilos, setHtmlEstilos] = useState({ display: "none" })
    const [cssEstilos, setCssEstilos] = useState({ display: "none" })
    const [javascriptEstilos, setJavascriptEstilos] = useState({ display: "none" })
    const [reactEstilos, setReactEstilos] = useState({ display: "none" })
    const [tailwindEstilos, setTailwindEstilos] = useState({ display: "none" })
    const [typescriptEstilos, setTypescriptEstilos] = useState({ display: "none" })
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
                        <p>Me especializo en React JS y TypeScript.</p>
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
                            <li><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" id="icon-nav-next" width="43" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 154"><path className={styles.tailwind} onMouseEnter={() => { setTailwindEstilos(tagStyle) }} onMouseLeave={() => { setTailwindEstilos({ display: "none" }) }} fill="#fff" d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"></path></svg><div style={tailwindEstilos} >Tailwind CSS</div></li>
                            <li><svg fill="none" height="35" viewBox="0 0 27 26" width="35" xmlns="http://www.w3.org/2000/svg"><path onMouseEnter={() => { setTypescriptEstilos(tagStyle) }} onMouseLeave={() => { setTypescriptEstilos({ display: "none" }) }} className={styles.ts} title="typescript" clipRule="evenodd" d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z" fill="#fff" fillRule="evenodd"></path></svg><div style={typescriptEstilos} >TypeScript</div></li>
                            <li> <FontAwesomeIcon onMouseEnter={() => { setJavascriptEstilos(tagStyle) }} onMouseLeave={() => { setJavascriptEstilos({ display: "none" }) }} title='JavaScript' className={styles.js} icon={faJs}></FontAwesomeIcon><div style={javascriptEstilos} >JavaScript</div>   </li>
                            <li> <FontAwesomeIcon onMouseEnter={() => { setReactEstilos(tagStyle) }} onMouseLeave={() => { setReactEstilos({ display: "none" }) }} title='React' className={styles.react} icon={faReact}></FontAwesomeIcon> <div style={reactEstilos} >React</div>  </li>
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