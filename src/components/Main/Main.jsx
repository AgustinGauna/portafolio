import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Error404 from '../Error404/Error404'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import styles from './Main.module.css'

const Main = () => {



    return (

        <main className={styles.container} >

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error404 />} />
            </Routes>

        </main >
    )
}

export default Main