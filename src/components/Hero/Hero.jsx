import React from 'react'
import { motion } from 'framer-motion'
import Countdown from '../Countdown/Countdown'
import GlowBadge from '../GlowBadge/GlowBadge'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <GlowBadge text="COMING SOON" />

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.titleLine}>GARUDA</span>
          <span className={styles.titleLine}>
            HACKS <span className={styles.version}>7.0</span>
          </span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          ONE OF Southeast Asia&apos;s Biggest{' '}
          <span className={styles.glow}>Hackathon</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Countdown />
        </motion.div>

        <motion.div
          className={styles.dateTag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          July 2026 · Exact Dates TBA
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
