import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? styles.activado : null)} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? styles.activado : null)} to="/projects">Proyectos</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? styles.activado : null)} to="/contact">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation