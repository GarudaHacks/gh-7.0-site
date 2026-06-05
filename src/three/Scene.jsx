import React, { Suspense, useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AdaptiveDpr, Preload } from '@react-three/drei'
import {
  EffectComposer,
  Bloom,
  Vignette,
} from '@react-three/postprocessing'
import CloudCluster from './CloudCluster'
import FloatingSpheres from './FloatingSpheres'
import ParticleField from './ParticleField'
import Planet from './Planet'
import AuroraPlane from './AuroraPlane'
import ShootingStars from './ShootingStars'
import { useMediaQuery } from '../hooks/useMediaQuery'

function MouseParallax({ enabled }) {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled) return
    const handler = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [enabled])

  useFrame(() => {
    if (!enabled) return
    target.current.x += (mouse.current.x * 0.3 - target.current.x) * 0.05
    target.current.y += (-mouse.current.y * 0.2 - target.current.y) * 0.05
    camera.position.x = target.current.x
    camera.position.y = target.current.y
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Memoize the inner scene to prevent re-renders from parent state changes
const SceneContent = React.memo(function SceneContent({ scrollProgress, isMobile, isTablet }) {
  const sphereCount = isMobile ? 5 : isTablet ? 8 : 10
  const particleCount = isMobile ? 80 : isTablet ? 130 : 200
  const cloudCount = isMobile ? 3 : isTablet ? 4 : 6

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#F9F5FF" />
      <directionalLight position={[5, 8, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#8036CB" />
      <pointLight position={[0, 5, -5]} intensity={0.3} color="#5079FF" />

      {/* Scene objects */}
      <AuroraPlane />
      <Planet scrollProgress={scrollProgress} />
      <CloudCluster count={cloudCount} scrollProgress={scrollProgress} />
      <FloatingSpheres count={sphereCount} scrollProgress={scrollProgress} />
      <ParticleField count={particleCount} scrollProgress={scrollProgress} />
      <ShootingStars count={isMobile ? 2 : 3} />

      {/* Mouse parallax */}
      <MouseParallax enabled={!isMobile} />

      {/* Post-processing */}
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
          radius={0.8}
        />
        <Vignette darkness={0.4} offset={0.3} />
      </EffectComposer>

      <AdaptiveDpr pixelated />
      <Preload all />
    </>
  )
})

export default function Scene({ scrollProgress = 0 }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')

  // Memoize DPR to avoid Canvas prop changes causing teardown
  const dpr = useMemo(() => [1, isMobile ? 1.2 : 1.5], [isMobile])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: `radial-gradient(ellipse at 50% 30%, #2d1654 0%, #221139 50%, #180d2e 100%)`,
      }}
    >
      <Canvas
        camera={{ fov: 50, position: [0, 0, 12], near: 0.1, far: 100 }}
        dpr={dpr}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        resize={{ debounce: 200 }}
      >
        <Suspense fallback={null}>
          <SceneContent
            scrollProgress={scrollProgress}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
