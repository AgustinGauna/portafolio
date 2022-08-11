import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';


const AnimatedRoutes = ({ children }) => {

    const animations = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    }

    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    )
}

export default AnimatedRoutes