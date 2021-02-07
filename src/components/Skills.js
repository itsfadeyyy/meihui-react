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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ratione error est recusandae consequatur, iusto illum
              deleniti quidem impedit, quos quaerat quis minima sequi.
              Cupiditate recusandae laudantium esse, harum animi aspernatur
              quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem
              illum. Ad delectus natus aut hic explicabo minus quod.
            </p>
            <a href="#">Read more</a>
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
