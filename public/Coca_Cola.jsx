/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Coca_Cola.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Cola(props) {
  const { nodes, materials } = useGLTF('/Coca_Cola.glb')
  return (
    <group {...props} dispose={null}>
      <directionalLight intensity={683} decay={2} position={[2.897, 7.443, -0.412]} rotation={[1.714, -0.749, -2.78]} />
      <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={49.134} position={[-0.176, 6.43, 8.392]} rotation={[-0.388, -0.033, -0.018]} />
      <mesh geometry={nodes.Straw.geometry} material={materials.Straw} position={[-0.485, 0.317, 0.004]} rotation={[0, 0, -0.124]} scale={[0.072, 0.1, 0.072]} />
      <mesh geometry={nodes.Sticker.geometry} material={materials['Material.003']} position={[0, 2.764, 0]} scale={0.66} />
      <group position={[0, 0.072, 0]} scale={0.66}>
        <mesh geometry={nodes.Circle.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Circle_1.geometry} material={materials['Coca Cola']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Coca_Cola.glb')