"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  staggerChildren?: number
  className?: string
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
