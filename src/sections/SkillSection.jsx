import "./skillSection.scss";

export const skillData = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        level: "Intermediate",
      },
      {
        name: "CSS",
        level: "Intermediate",
      },
      {
        name: "JavaScript",
        level: "Beginner",
      },
      {
        name: "React",
        level: "Intermediate",
      },
      {
        name: "Redux",
        level: "Beginner",
      },
      {
        name: "Sass",
        level: "Intermediate",
      },
      {
        name: "Bootstrap",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "NodeJS",
        level: "Beginner",
      },
      {
        name: "ExpressJS",
        level: "Beginner",
      },
      {
        name: "MongoDB",
        level: "Beginner",
      },
      {
        name: "Firebase",
        level: "Beginner",
      },
    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "Git",
        level: "Beginner",
      },
      {
        name: "GitHub",
        level: "Beginner",
      },
      {
        name: "Figma",
        level: "Beginner",
      },
    ],
  },
];

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="db"
    >
      <h1>Skills</h1>
      {skillData.map(({ title, skills }) => (
        <div
          className="skill-container"
          key={title}
        >
          <div className="skill-set-head">
            <h2>{title}</h2>
            <h2>Mastery</h2>
          </div>

          {skills.map(({ name, level }) => (
            <div
              className="skill-set-body"
              key={name}
            >
              <p>{name}</p>
              <p>{level}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default SkillSection;
