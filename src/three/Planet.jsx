import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    // Fresnel
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 3.0);

    // Gradient based on UV
    vec3 col1 = vec3(0.502, 0.212, 0.796); // #8036CB
    vec3 col2 = vec3(0.314, 0.475, 1.0);   // #5079FF
    vec3 col3 = vec3(0.133, 0.067, 0.224); // #221139

    float t = vUv.y + sin(uTime * 0.2) * 0.1;
    vec3 baseColor = mix(col3, col1, smoothstep(0.0, 0.5, t));
    baseColor = mix(baseColor, col2, smoothstep(0.4, 0.8, t));

    // Fresnel glow
    vec3 fresnelColor = vec3(0.678, 0.529, 1.0); // #AD87FF
    vec3 finalColor = mix(baseColor, fresnelColor, fresnel * 0.8);

    float alpha = 0.85 + fresnel * 0.15;

    gl_FragColor = vec4(finalColor, alpha);
  }
`

export default function Planet({ scrollProgress = 0 }) {
  const ref = useRef()

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.material.uniforms.uTime.value = state.clock.elapsedTime
    ref.current.rotation.y += 0.001
    ref.current.position.y = -3 + scrollProgress * 2

    // Subtle scale pulse
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.015
    ref.current.scale.set(s, s, s)
  })

  return (
    <mesh ref={ref} position={[5, -3, -6]}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}
