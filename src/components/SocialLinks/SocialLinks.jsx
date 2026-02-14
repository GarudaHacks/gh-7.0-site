import React from 'react'
import { SiInstagram, SiTiktok } from 'react-icons/si'
import styles from './SocialLinks.module.css'

export default function SocialLinks({ size = 20, showLabels = false }) {
  return (
    <div className={styles.links}>
      <a
        href="https://instagram.com/garudahacks"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label="Follow @garudahacks on Instagram"
      >
        <SiInstagram size={size} />
        {showLabels && <span>@garudahacks</span>}
      </a>
      <a
        href="https://tiktok.com/@garudahacks"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        aria-label="Follow @garudahacks on TikTok"
      >
        <SiTiktok size={size} />
        {showLabels && <span>@garudahacks</span>}
      </a>
    </div>
  )
}
