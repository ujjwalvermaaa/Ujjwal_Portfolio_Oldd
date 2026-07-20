import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-inner section-container">
        {/* Left: photo + card */}
        <div className="about-visual">
          <div className="about-photo-wrap">
            <img
              src="/images/char40.png"
              alt="Ujjwal Verma"
              className="about-photo"
            />
          </div>
          <div className="about-quick-info">
            <div className="info-row">
              <span className="info-icon">📍</span>
              <span>Delhi, India</span>
            </div>
            <div className="info-row">
              <span className="info-icon">🎓</span>
              <span>B.Tech CSE (Data Science)</span>
            </div>
            <div className="info-row">
              <span className="info-icon">🏫</span>
              <span>BPIT, GGSIPU · 2023–27</span>
            </div>
            <div className="info-row">
              <span className="info-icon">⭐</span>
              <span>CGPA: 9.1 / 10</span>
            </div>
          </div>
        </div>

        {/* Right: bio */}
        <div className="about-content">
          <span className="about-label">About Me</span>
          <h2 className="about-heading title">
            Data & AI<br />
            <span className="display-font about-heading-italic">Enthusiast</span>
          </h2>
          <div className="about-heading-divider"></div>
          <p className="para about-bio">
            I'm a Data Science & AI/ML enthusiast with hands-on experience in
            Machine Learning, Deep Learning, and Generative AI — built across
            real-world internships and projects.
          </p>
          <p className="para about-bio">
            Skilled in Python, SQL, Excel and the full ML lifecycle: data cleaning,
            EDA, feature engineering and model building using Scikit-learn and
            TensorFlow. My work spans NLP with Transformer models, Computer Vision
            with YOLO and OCR, and Generative AI with LLMs, RAG and Agentic AI.
          </p>
          <div className="about-chips">
            <span className="chip">Python</span>
            <span className="chip">Machine Learning</span>
            <span className="chip">Deep Learning</span>
            <span className="chip">Generative AI</span>
            <span className="chip">Power BI</span>
            <span className="chip">SQL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
