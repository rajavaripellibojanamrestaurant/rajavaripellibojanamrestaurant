import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

// A signature 3D centerpiece: a brass ceremonial lamp (diya) with a slow
// rotating ring of marigold-toned petals/embers, evoking the wedding-mandap
// imagery from the menu cover. Built in raw three.js (no extra deps).
export default function Hero3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
    camera.position.set(0, 1.1, 7)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // Lighting — warm, lamp-lit mood
    const ambient = new THREE.AmbientLight(0x3a1f12, 1.1)
    scene.add(ambient)
    const flame = new THREE.PointLight(0xffb347, 6, 12, 2)
    flame.position.set(0, 1.6, 0.4)
    scene.add(flame)
    const rim = new THREE.PointLight(0xc9a227, 2.2, 14)
    rim.position.set(-3, 2, 4)
    scene.add(rim)

    // Brass diya base (cone + sphere body)
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xC9A227,
      metalness: 0.85,
      roughness: 0.28,
    })

    const diya = new THREE.Group()

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.55, 0.22, 32), brassMat)
    base.position.y = -0.55
    diya.add(base)

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 1.1, 24), brassMat)
    stem.position.y = 0.0
    diya.add(stem)

    const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), brassMat)
    bowl.rotation.x = Math.PI
    bowl.position.y = 0.58
    diya.add(bowl)

    // Flame — layered cones with emissive glow
    const flameMat = new THREE.MeshStandardMaterial({
      color: 0xff9d3d,
      emissive: 0xff7a1a,
      emissiveIntensity: 2.2,
      roughness: 0.4,
    })
    const flameMesh = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.42, 16), flameMat)
    flameMesh.position.y = 0.95
    diya.add(flameMesh)

    scene.add(diya)

    // Marigold petal ring — small torus-knot-free discs orbiting
    const petalGroup = new THREE.Group()
    const petalColors = [0xE8732A, 0xC9A227, 0xF4A05B, 0x9A3B1B]
    const petalCount = 36
    const petals = []
    for (let i = 0; i < petalCount; i++) {
      const color = petalColors[i % petalColors.length]
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.05 })
      const geo = new THREE.IcosahedronGeometry(0.07 + Math.random() * 0.05, 0)
      const petal = new THREE.Mesh(geo, mat)
      const radius = 2.1 + Math.random() * 1.1
      const angle = (i / petalCount) * Math.PI * 2
      const yOff = (Math.random() - 0.5) * 1.6
      petal.userData = { radius, angle, yOff, speed: 0.08 + Math.random() * 0.06 }
      petal.position.set(Math.cos(angle) * radius, yOff, Math.sin(angle) * radius)
      petalGroup.add(petal)
      petals.push(petal)
    }
    scene.add(petalGroup)

    let frameId
    const clock = new THREE.Clock()

    function animate() {
      const t = clock.getElapsedTime()
      diya.rotation.y = t * 0.25
      flameMesh.scale.set(1, 1 + Math.sin(t * 9) * 0.08, 1)
      flame.intensity = 5.4 + Math.sin(t * 9) * 0.8

      petals.forEach((p) => {
        const d = p.userData
        const a = d.angle + t * d.speed
        p.position.x = Math.cos(a) * d.radius
        p.position.z = Math.sin(a) * d.radius
        p.position.y = d.yOff + Math.sin(t * 0.6 + d.angle) * 0.15
        p.rotation.x += 0.004
        p.rotation.y += 0.006
      })

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    function handleResize() {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" aria-hidden="true" />
}
