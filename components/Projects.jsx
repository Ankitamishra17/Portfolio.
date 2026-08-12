"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const INITIAL = 6;
const STEP = 3;

export default function Projects() {
  const [shown, setShown] = useState(INITIAL);
  const [touchedId, setTouchedId] = useState(null);

  const allShown = shown >= projects.length;
  const visibleProjects = projects.slice(0, shown);

  const handleMoreClick = () => {
    if (!allShown) {
      setShown((s) => Math.min(s + STEP, projects.length));
    } else {
      window.open("https://github.com/Ankitamishra17", "_blank", "noopener");
    }
  };

  const handleTilt = (e) => {
    if (window.innerWidth <= 860) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 14;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale3d(1.02,1.02,1.02)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = "";
  };

  const handleCardClick = (id) => {
    if (window.innerWidth > 860) return;
    setTouchedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <h2 className="dim">
          Projects <b>— 05</b>
        </h2>
        <div className="proj-grid">
          {visibleProjects.map((p, i) => {
            const imgSrc = p.image.startsWith("/")
              ? p.image
              : `https://picsum.photos/seed/${p.image}/600/400`;
            return (
              <div
                className={`card show ${touchedId === p.id ? "touched" : ""}`}
                key={p.id}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                onClick={() => handleCardClick(p.id)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="card-image"
                  src={imgSrc}
                  alt={`${p.title} preview`}
                  loading="lazy"
                />

                {p.featured && <span className="card-featured">★ Featured</span>}

                <div className="card-top">
                  <span className="card-index">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <h3>{p.title}</h3>
                <p>{p.description}</p>

                {p.features && p.features.length > 0 && (
                  <ul className="card-features">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}

                <div className="card-tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="card-actions">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn card-btn-ghost"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="more-wrap">
          <button
            className={`btn ${allShown ? "btn-primary" : "btn-ghost"}`}
            onClick={handleMoreClick}
          >
            {allShown ? "View More Projects on GitHub ↗" : "Show More Projects ↓"}
          </button>
        </div>
      </div>
    </section>
  );
}
