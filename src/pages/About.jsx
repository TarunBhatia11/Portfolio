import "./About.css";
import { 
  User, 
  GraduationCap, 
  Award, 
  Code2, 
  Trophy, 
  ChevronRight, 
} from "lucide-react";

export const AboutPage = () => {
  const technicalSkills = [
    "React.js", "JavaScript (ES6+)", "Node.js", "Express", 
    "MongoDB", "HTML5 & CSS3", "Git & GitHub", "Tailwind CSS",
    "C++", "Python", "DSA", "Operating System", "DBMS", "Software Development Life Cycle",
    "OSI & TCP/IP Model", "System Design (Low Level)", "MySQL", "Data Analytics",
    "Soft Skill: (Problem Solving, Team Collaboration, Time management)"
  ];

  return (
    <div className="about-page">
      <div className="about-wrapper">
        
        {/* SECTION 1: INTRODUCTION */}
        <section className="about-card intro-section">
          <div className="card-header">
            <User className="icon" />
            <h2>Introduction</h2>
          </div>
          <p>
            I am <strong>Tarun Bhatia</strong>, a driven Software Engineer Enthusiast based in India. 
            Pursuing my <strong>Bachelors Degree</strong> in <i>CSE-DS</i> from <strong>Pranveer Singh Institute of Technology</strong>. I specialize in building scalable web applications and solving complex 
            architectural problems. My goal is to write clean, maintainable code 
            that provides real value to users.
          </p>
        </section>

        <div className="about-card intro-section">
                <div className="card-header">
                    <h2>Experience</h2>
                </div>
                <div className="timeline-item">
                    <h3>Data Analyst Intern</h3>
                    <small>Company Name: Kulture Hire (Sep-2024 to Dec 2024)</small>
                    <p>Key HighLights: 
                        <ul>
                            Conducted data and exploratory analysis using object-oriented programming, ensuring data security and scalable architecture.        
                            Improved actionable insights by 20% through structured EDA workflows.
                            Designed and implemented interactive dashboard interfaces using modern programming languages (Python, JavaScript).
                        </ul>
                    </p>                    
                </div>
        </div>

        <div className="about-grid">
          {/* SECTION 2: SCHOOLING / EDUCATION */}
          <section className="about-card">
            <div className="card-header">
              <GraduationCap className="icon" />
              <h2>Schooling</h2>
            </div>
            <div className="timeline-item">
              <h4>Bachelor of Technology (CSE - Data Science)</h4>
              <p>Pranveer Singh Institute of Technology • Dec 2022 - July 2026</p>
              <small>GPA: 8.18/10.0</small>
            </div>
            <div className="timeline-item">
              <h4>Senior Secondary (XIIth)</h4>
              <p>St. Francis Xaviers Inter College • April 2021 - March 2022</p>
              <small>Percentage: 78%</small>
            </div>
            <div className="timeline-item">
              <h4>High School (Xth)</h4>
              <p>St. Francis Xaviers Inter College • April 2019 - March 2020</p>
              <small>Percentage: 84%</small>
            </div>
          </section>

          {/* SECTION 3: TECHNICAL SKILLS */}
          <section className="about-card">
            <div className="card-header">
              <Code2 className="icon" />
              <h2>Technical Skills & CS Fundamentals</h2>
            </div>
            <div className="skills-tag-container">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>

          {/* SECTION 4: CERTIFICATIONS */}
          <section className="about-card">
            <div className="card-header">
              <Award className="icon" />
              <h2>Certifications</h2>
            </div>
            <ul className="list-content">
              <li><ChevronRight className="li-icon"/> Machine Learning using Python from Udemy</li>
              <li><ChevronRight className="li-icon"/> AWS Cloud Practitioner Essentials</li>
              <li><ChevronRight className="li-icon"/> JP Morgan and Chase Virtual Reearch Program</li>
              <li><ChevronRight className="li-icon"/> Node.JS from Infosys Springboard</li>
              <li><ChevronRight className="li-icon"/> Database management System from Infosys Springboard</li>
            </ul>
          </section>

          {/* SECTION 5: ACHIEVEMENTS */}
          <section className="about-card">
            <div className="card-header">
              <Trophy className="icon" />
              <h2>Achievements</h2>
            </div>
            <ul className="list-content">
              <li>Ranked 644! out of 8k+ at ICPC Northern Finals on Codeforces Platform</li>
              <li>Solved 500+ problems on LeetCode.</li>
              <li>Secured 3rd Rank in College Coding Competition.</li>
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
};