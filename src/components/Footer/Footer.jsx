import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.border} />
      <div className={styles.inner}>
        <p className={styles.copy}>© 2026 Garuda Hacks. All rights reserved.</p>
        <SocialLinks size={16} />
      </div>
    </footer>
  )
}
