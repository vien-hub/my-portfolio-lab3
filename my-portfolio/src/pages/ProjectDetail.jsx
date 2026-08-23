import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page">
        <h1>Project Not Found</h1>
        <p className="subtitle">The project you are looking for does not exist.</p>
        <Link to="/projects" className="btn">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="card" style={{ padding: "2.5rem" }}>
        <div>
          <h1>{project.title}</h1>
          <p className="subtitle">{project.description}</p>
        </div>
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
          <a href={project.link} target="_blank" rel="noreferrer" className="btn">
            Live Preview
          </a>
          <Link to="/projects" className="btn btn-secondary">
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}