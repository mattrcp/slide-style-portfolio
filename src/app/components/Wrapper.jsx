"use client"

import React, { Children } from 'react'
import { motion } from 'framer-motion'

const Wrapper = ({children}) => {
  return (
    <motion.div>
      {children}
    </motion.div>
  )
}

export default Wrapper
