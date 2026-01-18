import "./Project.css";
import { Github, ExternalLink, Code2, Layers, Cpu } from "lucide-react";
import ProjectData from "../pages/projectList.json";



export const ProjectPage = () => {
  const projects = ProjectData

  return (
    <div className="project-page">
      <div className="project-wrapper">
        <h1 className="project-title">My <span>Projects</span></h1>
        <p className="project-subtitle">A collection of things I've built while exploring new technologies.</p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-icon-container">
                {project.icon}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
                    <Github size={20} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="proj-link demo">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};