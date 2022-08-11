import React from 'react'
import styles from './Header.module.css'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {

    return (
        <header className={styles.container}>
            <Navigation />
            <MobileNavigation />
            <div className={styles.socialsContainer}>
                <a className={styles.linkedinLink} target="_blank" rel='noopener noreferrer' href="https://github.com/AgustinGauna"> <FontAwesomeIcon className={styles.github} icon={faGithub}></FontAwesomeIcon></a>
                <a className={styles.linkedinLink} target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/agustingauna97/"> <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin}></FontAwesomeIcon></a>
            </div>
        </header >
    )
}

export default Header