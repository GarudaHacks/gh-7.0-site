import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'

function SoftCloud({ position, scale, speed, offset }) {
  const groupRef = useRef()

  const geometry = useMemo(() => {
    const count = 5 + Math.floor(Math.random() * 4)
    const geometries = []

    for (let i = 0; i < count; i++) {
      const sphere = new THREE.SphereGeometry(
        0.3 + Math.random() * 0.5,
        12,
        12
      )
      const matrix = new THREE.Matrix4()
      matrix.makeTranslation(
        (Math.random() - 0.5) * 1.2,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.6
      )
      sphere.applyMatrix4(matrix)
      geometries.push(sphere)
    }

    const merged = mergeGeometries(geometries, false)
    // Dispose individual geometries
    geometries.forEach((g) => g.dispose())
    return merged
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime * speed + offset
    groupRef.current.position.x = position[0] + Math.cos(t) * 0.3
    groupRef.current.position.y = position[1] + Math.sin(t * 0.7) * 0.4
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.1
  })

  return (
    <mesh ref={groupRef} geometry={geometry} position={position} scale={scale}>
      <meshStandardMaterial
        color="#ffffff"
        transparent
        opacity={0.15}
        roughness={1}
        metalness={0}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function CloudCluster({ count = 6, scrollProgress = 0 }) {
  const groupRef = useRef()

  const clouds = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 18,
        (i < count / 2 ? 3 + Math.random() * 4 : -3 - Math.random() * 3),
        -3 + Math.random() * 4,
      ],
      scale: 0.8 + Math.random() * 1.2,
      speed: 0.1 + Math.random() * 0.15,
      offset: Math.random() * Math.PI * 2,
    }))
  }, [count])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.z = scrollProgress * -3
    }
  })

  return (
    <group ref={groupRef}>
      {clouds.map((props, i) => (
        <SoftCloud key={i} {...props} />
      ))}
    </group>
  )
}
