import React from 'react'
import { motion } from "framer-motion"
import  '../App.css'
function Box() {
  return (
    <div>
       <motion.div
    drag 
    dragConstraints={
    {
        top: 0,
        bottom: 440,
        left: 0,
        right: 1200,
    }}
    whileHover={{
        backgroundColor: 'rgba(255,255,255,0.1)',
    }}
    whileDrag={{
        scale: 1.1,
        transition: { duration: 0.3 },
    }}
    whileFocus={{
        backgroundColor: 'rgba(255,25,25,0.1)',
    }}
    className='circle'></motion.div>
    </div>
  )
}

export default Box
