import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCountdown } from '../../hooks/useCountdown'
import styles from './Countdown.module.css'

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
}

function CountdownDigit({ value, label }) {
  const display = String(value).padStart(2, '0')

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(135, 79, 254, 0.3)' }}
    >
      <div className={styles.digitWrapper}>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            className={styles.digit}
            initial={{ opacity: 0, y: -18, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
            transition={{ duration: 0.3 }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className={styles.label}>{label}</span>
    </motion.div>
  )
}

function Separator() {
  return <span className={styles.separator}>:</span>
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown()

  const units = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ]

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: 1.2 },
        },
      }}
    >
      {units.map((unit, i) => (
        <React.Fragment key={unit.label}>
          <CountdownDigit value={unit.value} label={unit.label} />
          {i < units.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </motion.div>
  )
}
