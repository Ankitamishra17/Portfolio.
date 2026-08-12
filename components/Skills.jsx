const skillGroups = [
  {
    index: "01",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Framer Motion",
      "3D Animation (Three.js)",
    ],
  },
  {
    index: "02",
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Sequelize", "REST APIs"],
  },
  {
    index: "03",
    title: "Deployment & Tools",
    skills: [
  "Vercel",
  "Render",
  "Railway",
  "VPS",
  "PM2",
  "Nginx",
  "CI/CD",
  "Hostinger",
  "Git & GitHub",
  "Postman",
],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <h2 className="dim">
          Skills <b>— 03</b>
        </h2>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skill-group reveal" key={group.title}>
              <div className="skill-group-head">
                <span className="skill-index">{group.index}</span> {group.title}
              </div>
              <div className="skillset">
                {group.skills.map((skill) => (
                  <span className="skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
