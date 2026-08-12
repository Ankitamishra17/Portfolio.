"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    if (!isFinePointer || reduceMotion) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let rafId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%,-50%)`;
    };

    const handleMouseLeave = () => document.body.classList.add("cursor-hidden");
    const handleMouseEnter = () => document.body.classList.remove("cursor-hidden");

    const hoverSelector =
      "a, button, .card, input, textarea, .theme-toggle, .burger";

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest(hoverSelector)) {
        ring.classList.add("hover");
        dot.classList.add("hover");
      }
    };
    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.closest(hoverSelector)) {
        ring.classList.remove("hover");
        dot.classList.remove("hover");
      }
    };

    function ringLoop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(ringLoop);
    }
    ringLoop();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
