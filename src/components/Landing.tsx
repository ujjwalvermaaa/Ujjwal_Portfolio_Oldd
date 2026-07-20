import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">

        {/* LEFT — intro text */}
        <div className="landing-intro">
          <p className="landing-greeting">Hello, I'm</p>
          <h1 className="landing-name">
            Ujjwal<br />
            <span>Verma</span>
          </h1>
          <div className="landing-roles">
            <span className="role-badge">Data Scientist</span>
            <span className="role-badge">ML Engineer</span>
            <span className="role-badge">AI Builder</span>
          </div>
          <p className="landing-tagline">
            Turning raw data into decisions.<br />
            Building AI that actually works.
          </p>
          <div className="landing-cta">
            <a href="#work" className="btn-primary" data-cursor="disable">View My Work</a>
            <a href="#contact" className="btn-secondary" data-cursor="disable">Get In Touch</a>
          </div>
        </div>

        {/* CENTER — large character image */}
        <div className="landing-character-wrap">
          <div className="landing-char-glow"></div>
          <img
            src="/images/char30.png"
            alt="Ujjwal Verma"
            className="landing-char-img"
          />
        </div>

        {/* RIGHT — stats */}
        <div className="landing-stats">
          <div className="stat-card">
            <div className="stat-item">
              <span className="stat-num">9.1</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">3+</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>

      </div>

      {/* scroll indicator */}
      <div className="landing-scroll">
        <div className="scroll-line"></div>
        <span>SCROLL</span>
      </div>
    </div>
  );
};

export default Landing;
