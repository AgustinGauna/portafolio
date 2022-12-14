import React, { useState } from 'react'
import styles from './Projects.module.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faShoppingCart, faComment, faList, faArrowRight, faArrowLeft, faImage } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
    const [displayPoke, setDisplayPoke] = useState(false)
    const [displayWeather, setDisplayWeather] = useState(false)
    const [displayWordle, setDisplayWordle] = useState(false)
    const [displayAerolab, setDisplayAerolab] = useState(false)


    return (
        <motion.div initial={{ opacity: 0.0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.container}>

            <h1 className={styles.title}>Algunos de mis proyectos</h1>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <div onClick={() => { setDisplayPoke(!displayPoke) }} className={styles.sidebar}><FontAwesomeIcon className={styles.imageIcon} icon={faImage}></FontAwesomeIcon> <FontAwesomeIcon icon={displayPoke ? faArrowLeft : faArrowRight}></FontAwesomeIcon> </div>
                    <div className={displayPoke ? styles.webImage : styles.preload1} />
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
                        <FontAwesomeIcon className={styles.sideIcon} icon={faGamepad}></FontAwesomeIcon>

                    </div>
                </div>
                <div className={styles.div2}>
                    <div onClick={() => { setDisplayWeather(!displayWeather) }} className={styles.sidebar}><FontAwesomeIcon className={styles.imageIcon} icon={faImage}></FontAwesomeIcon> <FontAwesomeIcon icon={displayWeather ? faArrowLeft : faArrowRight}></FontAwesomeIcon> </div>
                    <div className={displayWeather ? styles.commentsImage : styles.preload3} alt="" />
                    <div className={styles.childs}>
                        <h2>Comments Section</h2>
                        <div className={styles.technologies}>
                            <button>React</button>
                            <button>TypeScript</button>
                            <button>Tailwind CSS</button>
                        </div>
                        <div className={styles.urls}>
                            <a href="https://comment-section-two.vercel.app/" target="_blank" rel='noopener noreferrer'><button>Sitio</button></a>
                            <a href="https://github.com/AgustinGauna/comment-section" target="_blank" rel='noopener noreferrer'><button>Github</button></a>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <FontAwesomeIcon className={styles.sideIcon} icon={faComment}></FontAwesomeIcon>

                    </div>
                </div>
                <div className={styles.div3}>
                    <div onClick={() => { setDisplayWordle(!displayWordle) }} className={styles.sidebar}><FontAwesomeIcon className={styles.imageIcon} icon={faImage}></FontAwesomeIcon> <FontAwesomeIcon icon={displayWordle ? faArrowLeft : faArrowRight}></FontAwesomeIcon> </div>
                    <div className={displayWordle ? styles.wordleImage : styles.preload2} />
                    <div className={styles.childs}>
                        <h2>Wordle</h2>
                        <div className={styles.technologies}>
                            <button>HTML5</button>
                            <button>CSS3</button>
                            <button>React</button>
                            <button>TypeScript</button>
                        </div>
                        <div className={styles.urls}>
                            <a href="https://wordle-seven-dun.vercel.app/" target="_blank" rel='noopener noreferrer'><button>Sitio</button></a>
                            <a href="https://github.com/AgustinGauna/wordle" target="_blank" rel='noopener noreferrer'><button>Github</button></a>
                        </div>
                    </div>
                    <div className={styles.side}>
                        <FontAwesomeIcon className={styles.sideIcon} icon={faList}></FontAwesomeIcon>

                    </div>
                </div>
                <div className={styles.div4}>
                    <div onClick={() => { setDisplayAerolab(!displayAerolab) }} className={styles.sidebar}><FontAwesomeIcon className={styles.imageIcon} icon={faImage}></FontAwesomeIcon> <FontAwesomeIcon icon={displayAerolab ? faArrowLeft : faArrowRight}></FontAwesomeIcon> </div>
                    <div className={displayAerolab ? styles.aerolabImage : styles.preload4} />
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
                        <FontAwesomeIcon className={styles.sideIcon} icon={faShoppingCart}></FontAwesomeIcon>

                    </div>
                </div>
            </div>
            <a href="https://github.com/AgustinGauna?tab=repositories" target="_blank" rel='noopener noreferrer'><button className={styles.moreButton}>M??s <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button></a>
        </motion.div>
    )
}

export default Projects