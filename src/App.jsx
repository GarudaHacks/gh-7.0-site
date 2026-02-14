import React, { useState, useEffect, useRef } from 'react'
import Scene from './three/Scene'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import DetailsSection from './components/DetailsSection/DetailsSection'
import NotifySection from './components/NotifySection/NotifySection'
import Footer from './components/Footer/Footer'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setScrollProgress(v)
    })
  }, [scrollYProgress])

  useEffect(() => {
    // Give Three.js time to initialize
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      {/* 3D Background */}
      <Scene scrollProgress={scrollProgress} />

      {/* HTML Content Overlay */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Navbar />

        {/* Hero with parallax */}
        <ParallaxWrapper speed={0.3}>
          <Hero />
        </ParallaxWrapper>

        <DetailsSection />

        <NotifySection />

        <Footer />
      </div>
    </>
  )
}

function ParallaxWrapper({ children, speed = 0.5 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 50}%`])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}
