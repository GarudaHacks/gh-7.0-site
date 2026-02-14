import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'
import SocialLinks from '../SocialLinks/SocialLinks'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/assets/ghq_logo_whitecolor.png" alt="Garuda Hacks" className={styles.logoImg} />
        </div>
        <div className={styles.navRight}>
          <a
            href="https://2025.garudahacks.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            2025
          </a>
          <SocialLinks size={18} />
        </div>
      </div>
    </motion.nav>
  )
}
