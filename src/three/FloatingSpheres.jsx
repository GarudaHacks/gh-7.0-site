import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GlassSphere({ position, radius, color, speed, offset }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed + offset
    ref.current.position.x = position[0] + Math.cos(t) * 0.8
    ref.current.position.y = position[1] + Math.sin(t * 0.7) * 0.6
    ref.current.position.z = position[2] + Math.sin(t * 0.5) * 0.3
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshPhysicalMaterial
        color={color}
        transmission={0.85}
        thickness={0.5}
        roughness={0.1}
        metalness={0.1}
        ior={1.5}
        transparent
        opacity={0.6}
        envMapIntensity={1}
      />
    </mesh>
  )
}

const SPHERE_COLORS = ['#8036CB', '#5079FF', '#874FFE', '#FE636A', '#AD87FF', '#6689FE']

export default function FloatingSpheres({ count = 10, scrollProgress = 0 }) {
  const groupRef = useRef()

  const spheres = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6 - 2,
      ],
      radius: 0.12 + Math.random() * 0.35,
      color: SPHERE_COLORS[i % SPHERE_COLORS.length],
      speed: 0.15 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2,
    }))
  }, [count])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.z = scrollProgress * -2
    }
  })

  return (
    <group ref={groupRef}>
      {spheres.map((props, i) => (
        <GlassSphere key={i} {...props} />
      ))}
    </group>
  )
}
