import React from "react";
import "./cards.css";

export default function Cards({ content, iconsClass }) {
  return (
    <div className="cards">
      {Object.values(content).map((project) => (
        <Card key={project.title} content={project} iconsClass={iconsClass} />
      ))}
    </div>
  );
}

function Card({ content, iconsClass }) {
  const { title, description, image, link, icons } = content;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card">
      <div className="card-image">
        <img src={image} alt="Avatar" />
      </div>
      <div className={`card-icons ${iconsClass}`}>
        {icons.map((Icon, index) => (
          <Icon key={index} className={`card-icon`} />
        ))}
      </div>
      <div className="card-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}
