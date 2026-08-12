const services = [
  "Responsive Website Development",
  "React.js & Next.js Applications",
  "Full-Stack Web Development",
  "API Integration",
  "Admin Dashboards",
  "Website Maintenance & Bug Fixes",
];

export default function Freelance() {
  return (
    <section className="section" id="freelance">
      <div className="wrap">
        <h2 className="dim">
          Freelance <b>— 06</b>
        </h2>
        <div className="freelance-box reveal">
          <div>
            <div className="avail">
              ● Available for Full-Time &amp; Freelance Opportunities
            </div>
            <h3>Let&apos;s build something amazing together.</h3>
            <p>
              I&apos;m a Frontend &amp; Full Stack Developer with experience
              building modern, responsive, and scalable web applications
              using React.js, Next.js, Node.js, Express.js, MongoDB, and
              MySQL.
            </p>
            <p>
              I&apos;ve worked on real-world projects including business
              websites, admin dashboards, AI-powered applications, and
              full-stack platforms. I focus on writing clean, maintainable
              code and delivering user-friendly digital experiences.
            </p>
            <p>
              Whether you&apos;re a company looking for a developer or a
              client with a new idea, I&apos;d love to help bring your
              project to life.
            </p>
            <div className="services">
              {services.map((service) => (
                <div className="service" key={service}>
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className="freelance-cta">
            <h4>Have a project in mind?</h4>
            <p>
              I&apos;m available to build modern, responsive, and scalable
              web applications. Let&apos;s discuss your ideas and create
              something great together.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let&apos;s Talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
