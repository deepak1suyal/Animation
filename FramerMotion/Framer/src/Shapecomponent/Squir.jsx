import React from 'react'
import { motion } from "framer-motion"
import  '../App.css'
function Squir() {
  return (
    <div>
        <motion.div
     initial={{x:300}}
     animate={{
      x:500,
      y:500,
      rotate:360,
      scale:1.5,
     
     }}
     transition={{
      duration:2,
      delay:1,
      ease:"anticipate",
      repeat:Infinity,
     }} className='box'></motion.div>
    </div>
  )
}

export default Squir
