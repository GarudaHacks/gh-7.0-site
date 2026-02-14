import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 200, scrollProgress = 0 }) {
  const points = useRef()

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
      speeds[i] = 0.002 + Math.random() * 0.005
    }
    return { positions, speeds }
  }, [count])

  useFrame((state) => {
    if (!points.current) return
    const posArray = points.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      posArray[i * 3 + 1] += speeds[i] * (1 + scrollProgress * 0.5)

      // Wrap around
      if (posArray[i * 3 + 1] > 10) {
        posArray[i * 3 + 1] = -10
      }

      // Gentle x oscillation
      posArray[i * 3] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.0005
    }

    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#C4A9FF"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
