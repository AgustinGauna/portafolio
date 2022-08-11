import React from 'react'
import styles from './Error404.module.css'
import { motion } from 'framer-motion'

const Error404 = () => {
    return (
        <motion.div initial={{ opacity: 0.0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.error}>
            <div className={styles.body}>
                <p><img src="/files/error404.svg" alt="" /></p>
            </div>
        </motion.div>
    )
}

export default Error404