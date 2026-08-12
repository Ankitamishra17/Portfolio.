"use client";

import { useEffect, useRef } from "react";
import Hero3D from "./Hero3D";

const roles = ["Full Stack Developer", "Frontend Developer", "React.js Developer"];

export default function Hero() {
  const roleRef = useRef(null);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    let rIdx = 0;
    let cIdx = 0;
    let deleting = false;
    let timeoutId;

    function typeLoop() {
      const current = roles[rIdx];
      if (!deleting) {
        cIdx++;
        el.textContent = current.slice(0, cIdx);
        if (cIdx === current.length) {
          deleting = true;
          timeoutId = setTimeout(typeLoop, 1400);
          return;
        }
        timeoutId = setTimeout(typeLoop, 65);
      } else {
        cIdx--;
        el.textContent = current.slice(0, cIdx);
        if (cIdx === 0) {
          deleting = false;
          rIdx = (rIdx + 1) % roles.length;
          timeoutId = setTimeout(typeLoop, 300);
          return;
        }
        timeoutId = setTimeout(typeLoop, 35);
      }
    }
    typeLoop();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <Hero3D />
      <div className="crop tl" />
      <div className="crop tr" />
      <div className="wrap">
        <div className="eyebrow">
          <span className="dot" /> Available for new opportunities 
          
        </div>
        <h1 className="name">
          Ankita Mishra
         
        </h1>
        <div className="role-rotator">
          <span className="prefix">I work as a</span>
          <span ref={roleRef} id="roleText"></span>
          <span className="cursor"></span>
        </div>
        <p className="hero-desc">
          I design and ship products end to end — from React interfaces that
          feel considered, to Node APIs that hold up under load. I enjoy
          turning ideas into real-world digital products that deliver
          seamless experiences.
        </p>
        <div className="hero-cta">
          <a href="/Ankita_Resume.pdf" download className="btn btn-primary">
            Download Resume ↓
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="stamp">
        <div className="row">
          <span>Sheet</span>
          <span>01 / 07</span>
        </div>
        <div className="row">
          <span>Scale</span>
          <span>1 : 1</span>
        </div>
        <div className="row">
          <span>Drawn by</span>
          <span>A. Mishra</span>
        </div>
        <div className="row">
          <span>Rev</span>
          <span>2026.07</span>
        </div>
      </div>
    </section>
  );
}
