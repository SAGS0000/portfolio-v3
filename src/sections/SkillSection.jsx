import "./skillSection.scss";

const SkillSection = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skill-container">
        <div className="skill-set">
          <h2>Frontend</h2>
          <div className="skill">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>
        </div>
        <div className="skill-set">
          <h2>Backend</h2>
          <div className="skill">
            <p>Node</p>
            <p>Express</p>
            <p>PostgreSQL</p>
            <p>Python</p>
          </div>
        </div>
        <div className="skill-set">
          <h2>Other</h2>
          <div className="skill">
            <p>Git</p>
            <p>GitHub</p>
            <p>Heroku</p>
            <p>Netlify</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
