import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi'
import styles from './DetailsSection.module.css'

export default function DetailsSection() {
  return (
    <section className={styles.section}>
      {/* Decorative blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.heading}>
            Where Southeast Asia&apos;s
            <br />
            <span className={styles.headingAccent}>brightest minds</span>
            <br />
            build the future.
          </h2>
        </motion.div>

        <motion.div
          className={styles.details}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className={styles.detailCard}>
            <span className={styles.detailIcon}><FiCalendar /></span>
            <div>
              <span className={styles.detailLabel}>Date</span>
              <span className={styles.detailValue}>July 2026 · TBA</span>
            </div>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailIcon}><FiMapPin /></span>
            <div>
              <span className={styles.detailLabel}>Location</span>
              <span className={styles.detailValue}>TBA</span>
            </div>
          </div>
          <div className={styles.detailCard}>
            <span className={styles.detailIcon}><FiUsers /></span>
            <div>
              <span className={styles.detailLabel}>Hackers</span>
              <span className={styles.detailValue}>500+</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
            30 hours of building, learning, and connecting with the best.
        </motion.p>
      </div>
    </section>
  )
}
