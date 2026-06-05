import React from 'react'
import { motion } from 'framer-motion'
import SocialLinks from '../SocialLinks/SocialLinks'
import styles from './NotifySection.module.css'

export default function NotifySection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <motion.div
          className={styles.mascotWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <img
            src="/assets/ghq_garudie_mascot.png"
            alt="Garudie Mascot"
            className={styles.mascot}
          />
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Stay in the loop.
        </motion.h2>

        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Follow us for the latest updates and announcements
        </motion.p>

        <motion.div
          className={styles.socials}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <SocialLinks size={26} showLabels />
        </motion.div>
      </div>
    </section>
  )
}
