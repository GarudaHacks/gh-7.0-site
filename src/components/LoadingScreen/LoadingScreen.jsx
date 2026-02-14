import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#221139',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <img
                src="/assets/ghq_garudie_mascot.png"
                alt="Garudie Mascot"
                style={{
                    width: "12dvh"
                }}
            />
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.4)',
              }}
            >
              Loading
            </span>
          </motion.div>

          <style>{`
            @keyframes loadingPulse {
              0%, 100% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.15); opacity: 1; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
