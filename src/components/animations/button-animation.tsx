"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ButtonAnimationProps {
  children: ReactNode
  className?: string
}

export function ButtonAnimation({ children, className = "" }: ButtonAnimationProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={className}>
      {children}
    </motion.div>
  )
}
