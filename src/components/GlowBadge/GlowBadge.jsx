import React from 'react'
import { motion } from 'framer-motion'
import styles from './GlowBadge.module.css'

export default function GlowBadge({ text = 'COMING SOON' }) {
  return (
    <motion.div
      className={styles.badge}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 150, damping: 15 }}
    >
      <span className={styles.text}>{text}</span>
    </motion.div>
  )
}
