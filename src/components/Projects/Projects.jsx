import React from 'react'
import styles from './Projects.module.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faShoppingCart, faCloud, faList } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
    return (
        <motion.div initial={{ opacity: 0.0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.container}>
            <h1 className={styles.title}>Algunos de mis proyectos</h1>
            <div className={styles.parent}>
                <div className={styles.div1}>

                    <div className={styles.childs}>
                        <h2>PokeChallenge</h2>
                        <div className={styles.technologies}>
                            <button>HTML5</button>
                            <button>CSS3</button>
                            <button>React</button>
                            <button>Typescript</button>

                        </div>
                        <div className={styles.urls}>
                            <a href="https://pokechallenge-blue.vercel.app/" target="_blank" rel='noopener noreferrer'><button>Sitio</button></a>
                            <a href="https://github.com/AgustinGauna/pokechallenge" target="_blank" rel='noopener noreferrer'><button>Github</button></a>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>

                    </div>
                </div>
                <div className={styles.div2}>

                    <div className={styles.childs}>
                        <h2>Weather App</h2>
                        <div className={styles.technologies}>
                            <button>HTML5</button>
                            <button>CSS3</button>
                            <button>React js</button>
                        </div>
                        <div className={styles.urls}>
                            <a href="https://weatherapp0001.netlify.app" target="_blank" rel='noopener noreferrer'><button>Sitio</button></a>
                            <a href="https://github.com/AgustinGauna/weatherApp" target="_blank" rel='noopener noreferrer'><button>Github</button></a>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>

                    </div>
                </div>
                <div className={styles.div3}>

                    <div className={styles.childs}>
                        <h2>#Adviency Challenge</h2>
                        <div className={styles.technologies}>
                            <button>HTML5</button>
                            <button>CSS3</button>
                            <button>React js</button>
                        </div>
                        <div className={styles.urls}>
                            <a href="https://adviencychallenge.netlify.app/" target="_blank" rel='noopener noreferrer'><button>Sitio</button></a>
                            <a href="https://github.com/AgustinGauna/Adviency-challenge" target="_blank" rel='noopener noreferrer'><button>Github</button></a>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <FontAwesomeIcon icon={faList}></FontAwesomeIcon>

                    </div>
                </div>
                <div className={styles.div4}>

                    <div className={styles.childs}>
                        <h2>Aerolab Challenge</h2>
                        <div className={styles.technologies}>
                            <button>HTML5</button>
                            <button>CSS3</button>
                            <button>React</button>
                            <button>TypeScript</button>
                        </div>
                        <div className={styles.urls}>
                            <a href="https://aerolab-challenge-blue.vercel.app/" target="_blank" rel='noopener noreferrer'><button>Sitio</button></a>
                            <a href="https://github.com/AgustinGauna/aerolab-challenge" target="_blank" rel='noopener noreferrer'><button>Github</button></a>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

                    </div>
                </div>
            </div>
            <a href="https://github.com/AgustinGauna?tab=repositories" target="_blank" rel='noopener noreferrer'><button className={styles.moreButton}>Más <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button></a>
        </motion.div>
    )
}

export default Projects