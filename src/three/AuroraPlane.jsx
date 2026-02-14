import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;

  // Simple noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.05;

    float n1 = noise(uv * 3.0 + vec2(t, t * 0.5));
    float n2 = noise(uv * 5.0 - vec2(t * 0.7, t * 0.3));
    float n = (n1 + n2) * 0.5;

    vec3 col1 = vec3(0.404, 0.2, 0.612);  // #67339C
    vec3 col2 = vec3(0.314, 0.475, 1.0);  // #5079FF
    vec3 col3 = vec3(0.529, 0.31, 0.996); // #874FFE

    vec3 color = mix(col1, col2, n);
    color = mix(color, col3, n2 * 0.5);

    float alpha = smoothstep(0.0, 0.3, n) * 0.08;

    gl_FragColor = vec4(color, alpha);
  }
`

export default function AuroraPlane() {
  const ref = useRef()
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, -12]}>
      <planeGeometry args={[50, 30]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
