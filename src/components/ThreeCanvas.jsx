import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    
    // Create Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      currentMount.clientWidth / currentMount.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Create a floating torus knot wireframe with glowing material
    const geometry = new THREE.TorusKnotGeometry(0.8, 0.25, 120, 16);
    
    // Particles / Points representation
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x00f0ff, // neon blue
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, pointsMaterial);
    scene.add(particles);

    // Subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xbd00ff, 2, 5); // neon purple glow light
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Track mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      mouseY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let reqId;

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth lag effect on mouse tracking
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate torus knot based on elapsed time + mouse position
      particles.rotation.x = elapsedTime * 0.15 + targetY * 0.8;
      particles.rotation.y = elapsedTime * 0.15 + targetX * 0.8;
      
      // Pulse size / glow effect slightly over time
      pointsMaterial.size = 0.012 + Math.sin(elapsedTime * 2) * 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-[400px] lg:h-[500px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    >
      {/* Absolute overlay indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 tracking-widest font-mono pointer-events-none select-none uppercase">
        Drag & Interactive 3D Canvas
      </div>
    </div>
  );
}
