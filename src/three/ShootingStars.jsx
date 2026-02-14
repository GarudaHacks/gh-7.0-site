import React, { useRef, useMemo, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ShootingStars({ count = 3 }) {
  const linesRef = useRef()

  const stars = useMemo(() => {
    return Array.from({ length: count }, () => ({
      startPos: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        5 + Math.random() * 5,
        -5 + Math.random() * 3
      ),
      direction: new THREE.Vector3(
        -0.5 - Math.random() * 0.5,
        -0.3 - Math.random() * 0.3,
        0
      ).normalize(),
      speed: 0.08 + Math.random() * 0.06,
      tailLength: 0.8 + Math.random() * 1.2,
      progress: Math.random() * 100, // offset start times
      active: false,
      nextTrigger: Math.random() * 200,
    }))
  }, [count])

  const positions = useMemo(() => new Float32Array(count * 6), [count]) // 2 points per star (head + tail)

  useFrame((state) => {
    const t = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const star = stars[i]

      if (!star.active) {
        star.progress += 1
        if (star.progress > star.nextTrigger) {
          star.active = true
          star.progress = 0
          star.nextTrigger = 150 + Math.random() * 300
          star.startPos.set(
            (Math.random() - 0.5) * 20,
            4 + Math.random() * 6,
            -3 + Math.random() * 2
          )
        }
        // Hide off-screen
        positions[i * 6] = 100
        positions[i * 6 + 1] = 100
        positions[i * 6 + 2] = -100
        positions[i * 6 + 3] = 100
        positions[i * 6 + 4] = 100
        positions[i * 6 + 5] = -100
        continue
      }

      star.progress += star.speed

      const headX = star.startPos.x + star.direction.x * star.progress
      const headY = star.startPos.y + star.direction.y * star.progress
      const headZ = star.startPos.z + star.direction.z * star.progress

      const tailX = headX - star.direction.x * star.tailLength
      const tailY = headY - star.direction.y * star.tailLength
      const tailZ = headZ - star.direction.z * star.tailLength

      positions[i * 6] = headX
      positions[i * 6 + 1] = headY
      positions[i * 6 + 2] = headZ
      positions[i * 6 + 3] = tailX
      positions[i * 6 + 4] = tailY
      positions[i * 6 + 5] = tailZ

      // Reset when off screen
      if (headY < -10 || headX < -15) {
        star.active = false
        star.progress = 0
      }
    }

    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count * 2}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#C4A9FF"
        transparent
        opacity={0.6}
        linewidth={1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  )
}
