"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const themeColors = {
  dark: { core: 0x22d3ee, inner: 0x0a1930, torus: 0x38bdf8 },
  light: { core: 0x0891b2, inner: 0xf4f8fb, torus: 0x0369a1 },
};

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mount = mountRef.current;
    if (!mount || reduceMotion) return;

    const w = mount.clientWidth || 560;
    const h = mount.clientHeight || 560;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 7;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const coreGeo = new THREE.IcosahedronGeometry(2.1, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: themeColors.dark.core,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const innerMat = new THREE.MeshBasicMaterial({
      color: themeColors.dark.inner,
      transparent: true,
      opacity: 0.35,
    });
    const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(2.05, 0), innerMat);
    group.add(inner);

    const torusMat = new THREE.MeshBasicMaterial({
      color: themeColors.dark.torus,
      transparent: true,
      opacity: 0.5,
    });
    const torus = new THREE.Mesh(new THREE.TorusGeometry(3.1, 0.03, 12, 80), torusMat);
    torus.rotation.x = Math.PI / 2.4;
    scene.add(torus);

    const bits = [];
    const bitMats = [];
    for (let i = 0; i < 5; i++) {
      const bitMat = new THREE.MeshBasicMaterial({
        color: themeColors.dark.core,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      });
      const bit = new THREE.Mesh(new THREE.OctahedronGeometry(0.16, 0), bitMat);
      const angle = (i / 5) * Math.PI * 2;
      bit.userData.baseAngle = angle;
      bit.userData.radius = 3.4;
      bit.userData.speed = 0.3 + Math.random() * 0.2;
      scene.add(bit);
      bits.push(bit);
      bitMats.push(bitMat);
    }

    const handleThemeChange = (e) => {
      const mode = e.detail;
      const c = themeColors[mode];
      coreMat.color.setHex(c.core);
      innerMat.color.setHex(c.inner);
      torusMat.color.setHex(c.torus);
      bitMats.forEach((m) => m.color.setHex(c.core));
    };
    window.addEventListener("themechange", handleThemeChange);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();
    let rafId;
    function animate3D() {
      rafId = requestAnimationFrame(animate3D);
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.22 + mouseX * 0.6;
      group.rotation.x = t * 0.12 + mouseY * 0.4;
      inner.rotation.copy(core.rotation);
      torus.rotation.z = t * 0.18;
      bits.forEach((b) => {
        const a = b.userData.baseAngle + t * b.userData.speed;
        b.position.set(
          Math.cos(a) * b.userData.radius,
          Math.sin(a * 1.3) * 1.2,
          Math.sin(a) * b.userData.radius
        );
        b.rotation.x += 0.01;
        b.rotation.y += 0.015;
      });
      renderer.render(scene, camera);
    }
    animate3D();

    const handleResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      if (!nw || !nh) return;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("themechange", handleThemeChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="hero3d" className="hero-3d" ref={mountRef} />;
}
