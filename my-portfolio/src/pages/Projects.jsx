import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <div className="page">
      <h1>Featured Projects</h1>
      <p className="subtitle">Explore my recent work and client-side web applications.</p>
      
      <div className="grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <Link to={`/projects/${project.id}`} className="btn btn-secondary">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}