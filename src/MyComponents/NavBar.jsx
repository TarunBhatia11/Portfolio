import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="navbar-component">
        {/* Heading Like: Tarun's Portfolio */}
        <div className="section-portfolio">
            <h3>Portfolio</h3>
        </div>
        {/* Nav Bar Options */}
        <div className="section-ho-ab-pr-co">
            <div className="home"><Link to="/">Home</Link></div>
            <div className="about"><Link to="/about">About</Link></div>
            <div className="project"><Link to="/project">Project</Link></div>
            <div className="contact"><Link to="/contact">Contact</Link></div>
        </div>
      </div>
    </>
  )
}

export default NavBar
