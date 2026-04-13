'use client';

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export default function HeroScene() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const hasTouch = navigator.maxTouchPoints > 0;
    setIsTouchDevice(coarsePointer || hasTouch);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: isTouchDevice ? 'none' : 'auto',
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#050505']} />
        
        {/* Céu Estrelado Imersivo */}
        <Stars 
          radius={100} 
          depth={50} 
          count={7000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1.5} 
        />

        {/* Permite que o usuário olhe ao redor, tornando "viciante" e interativo */}
        <OrbitControls 
          enabled={!isTouchDevice}
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
