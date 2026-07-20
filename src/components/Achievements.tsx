import "./styles/Achievements.css";
import { MdArrowOutward } from "react-icons/md";

const certs = [
  {
    title: "Complete Data Analyst Bootcamp",
    issuer: "Udemy",
    desc: "Data cleaning, EDA, and visualization using Python, SQL and Excel; Power BI dashboards; Snowflake, AWS and Azure; multiple real-world projects.",
    link: "https://www.udemy.com/certificate/UC-33d9930c-e4f7-4156-95fb-0e993205028d/",
    icon: "📈",
  },
  {
    title: "Ultimate Job Ready Data Science Course",
    issuer: "CodeWithHarry",
    desc: "End-to-end data science: Python, NumPy, Pandas, visualization, SQL and statistics; ML and basic DL; Jupyter, Git; exposure to modern AI (LLMs).",
    link: null,
    icon: "🧪",
  },
  {
    title: "Complete DS, ML, DL & NLP Bootcamp",
    issuer: "Udemy",
    desc: "Full DS workflow: preprocessing, EDA, feature engineering; ML with Scikit-learn; DL (ANN, CNN, RNN, LSTM, GRU, Transformers) using TensorFlow/Keras; NLP.",
    link: "https://www.udemy.com/certificate/UC-c47ad375-83fb-4476-8daa-47b82dc6af5e/",
    icon: "🤖",
  },
];

const Achievements = () => {
  return (
    <section className="ach-section" id="achievements">
      <div className="ach-container section-container">

        <div className="ach-header">
          <span className="section-label">Certifications</span>
          <h2 className="ach-title title">
            Achievements &<br />
            <span className="display-font ach-title-italic">Certifications</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="ach-grid">
          {certs.map((cert, i) => (
            <div className="ach-card" key={i}>
              <div className="ach-card-inner">
                <div className="ach-icon">{cert.icon}</div>
                <div className="ach-card-body">
                  <span className="ach-issuer">{cert.issuer}</span>
                  <h3 className="ach-card-title">{cert.title}</h3>
                  <p className="ach-card-desc">{cert.desc}</p>
                </div>
                <div className="ach-card-footer">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="ach-link"
                      data-cursor="disable"
                    >
                      View Credential <MdArrowOutward />
                    </a>
                  ) : (
                    <span className="ach-on-request">Available on request</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
