import "./Home.css"; 
import myProfileImage from "../assets/photo.png"; 
import {  
  Linkedin, 
  Github, 
  Instagram,     // General icon
} from "lucide-react";

export const HomePage = () => {

    const handleResumeClick= ()=>{
        window.open("https://drive.google.com/file/d/1wiGQUHvamyhvfHSCQb5ebjK8Y9EZNljp/view?usp=drive_link", "_blank");
    };

  return (
    <div className="home-container">
      <div className="hero-content">
        <span className="greeting">Hello, I'm</span>
        <h1>Tarun Bhatia</h1>
        <h2 className="typing-text">Software Engineering Enthusiast</h2>
        <p>
          I am a passionate fresher dedicated to building clean, 
          user-friendly web applications. I love turning complex problems 
          into simple and beautiful interface designs.
        </p>
        <div className="hero-btns">
          <button className="btn-secondary" onClick={handleResumeClick}>Download Resume</button>
          <a href="https://www.linkedin.com/in/tarun-bhatia-b46a24271/" target="_blank" className="social-link" title="LinkedIn"><Linkedin /></a>
          <a href="https://github.com/TarunBhatia11" target="_blank" className="social-link" title="GitHub"><Github /></a>
          <a href="https://www.instagram.com/tarun__2809/" target="_blank" className="social-link" title="Instagram"><Instagram /></a>
        </div>
      </div>
      
      <div className="hero-image-container">
        <div className="image-blob">
          <img src={myProfileImage} alt="Profile" className="profile-img" />
        </div>
      </div>
    </div>
  );
};