import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <h2 className="dim">
          Experience <b>— 04</b>
        </h2>
        <div className="timeline">
          {experience.map((exp) => (
            <div className="tl-item reveal" key={exp.company}>
              <div className="tl-head">
                <div>
                  <span className="tl-role">{exp.role}</span> —{" "}
                  <span className="tl-company">{exp.company}</span>
                </div>
                <div className="tl-period">{exp.period}</div>
              </div>
              <ul>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tl-stack">
                {exp.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
