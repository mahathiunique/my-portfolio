// src/components/ProjectCard.jsx
import { Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, ghUrl, demoUrl }) => {
  return (
    <div className="proj-card">
      <img src={imgUrl} alt={title} />
      <div className="proj-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="proj-links">
          {ghUrl && (
            <Button variant="outline-light" href={ghUrl} target="_blank">
              GitHub
            </Button>
          )}
          {demoUrl && (
            <Button variant="primary" href={demoUrl} target="_blank">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
