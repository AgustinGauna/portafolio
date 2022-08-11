import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { faHomeLg, faEnvelope, faFolderBlank } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileNavigation = () => {



    return (
        <>
            <nav className={styles.mobileNavigation}>

                <ul  >
                    <li><NavLink className={({ isActive }) => (isActive ? styles.activado : null)} to="/"><FontAwesomeIcon icon={faHomeLg}></FontAwesomeIcon></NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? styles.activado : null)} to="/projects"><FontAwesomeIcon icon={faFolderBlank}></FontAwesomeIcon></NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? styles.activado : null)} to="/contact"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></NavLink></li>
                </ul>

            </nav>
        </>
    )
}

export default MobileNavigation