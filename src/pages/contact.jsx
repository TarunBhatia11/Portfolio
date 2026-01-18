import "./contact.css";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Send, 
  MapPin, 
  Phone,
  Code2,     // Used for LeetCode
  Terminal,  // Used for CodeForces
  Globe      // General icon
} from "lucide-react";

export const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <h1 className="contact-title">Get In <span>Touch</span></h1>
        <p className="contact-subtitle">I'm currently looking for new opportunities. My inbox is always open!</p>

        <div className="contact-grid">
          {/* LEFT SIDE: CONTACT INFO & SOCIALS */}
          <div className="contact-info">
            
            {/* EMAIL */}
            <div className="info-card">
              <Mail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:tarunbhatia2809@gmail.com" className="contact-link">tarunbhatia2809@gmail.com</a>
              </div>
            </div>

            {/* PHONE */}
            <div className="info-card">
              <Phone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+918604495829" className="contact-link">+91 86044 95829</a>
              </div>
            </div>
            
            {/* LOCATION */}
            <div className="info-card">
              <MapPin className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Kanpur Nagar, UP, India</p>
              </div>
            </div>

            <div className="connect-socials">
              <h3>Professional Profiles & Socials</h3>
              <div className="social-icons">
                {/* Regular Socials */}
                <a href="https://www.linkedin.com/in/tarun-bhatia-b46a24271/" target="_blank" className="social-link" title="LinkedIn"><Linkedin /></a>
                <a href="https://github.com/TarunBhatia11" target="_blank" className="social-link" title="GitHub"><Github /></a>
                <a href="https://www.instagram.com/tarun__2809/" target="_blank" className="social-link" title="Instagram"><Instagram /></a>
                
                {/* Competitive Programming (Using Code2 and Terminal as placeholders) */}
                <a href="https://leetcode.com/u/tarun_bhatia02/" target="_blank" className="social-link" title="LeetCode"><Code2 /></a>
                <a href="https://codeforces.com/profile/tarunbhatia2809" target="_blank" className="social-link" title="CodeForces"><Terminal /></a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <form className="contact-form" onSubmit={handleSubmit} 
            action="https://formspree.io/f/mgooadwr"
            method="POST">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="send-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};