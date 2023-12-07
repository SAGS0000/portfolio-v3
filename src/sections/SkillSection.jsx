const SkillSection = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skill-container">
        <div className="skill">
          <h2>Frontend</h2>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>
        <div className="skill">
          <h2>Backend</h2>
          <p>Node</p>
          <p>Express</p>
          <p>PostgreSQL</p>
          <p>Python</p>
        </div>
        <div className="skill">
          <h2>Other</h2>
          <p>Git</p>
          <p>GitHub</p>
          <p>Heroku</p>
          <p>Netlify</p>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
