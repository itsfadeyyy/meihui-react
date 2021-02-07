import React from "react";

const Services = ({ data }) => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>

        <div className="serv-content">
          {data.map((card) => {
            return (
              <div key={card.id} className="card">
                <div className="box">
                  {card.icon}
                  <div className="text">{card.title}</div>
                  <p>
                    {card.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
