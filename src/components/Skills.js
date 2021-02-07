import React from "react";

const Skills = ({ data }) => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>
              I have studied Nitec in Social Media & Web Development at ITE for 2 years, after ITE graduation I took a Diploma course in Interaction Design
              at Nanyang Polytechnic for 3 years. I am looking forward to further improve my skills in the future.
            </p>
  
          </div>
          <div className="column right">
            {data.map((skill) => {
              let className = "line " + skill.class;
              return (
                <div key={skill.id} className="bars">
                  <div className="info">
                    <span>{skill.name}</span>
                    <span>{skill.range}</span>
                  </div>
                  <div className={className}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
