import "./styles/Career.css";

const experiences = [
  {
    role: "Software Engineer Intern (Data Science)",
    company: "mFilterIt",
    period: "Jan 2026 – Present",
    type: "On-Site",
    bullets: [
      "Built an adware automation system (Core Attribution Fraud Services) using Python and Playwright to detect clickjacking, cookie stuffing and cookie hijacking, with evidence capture uploaded to AWS S3.",
      "Built an OCR + YOLO-based popup detection system for automated analysis of social media ad screenshots, combining YOLO-based localization with OCR text extraction.",
      "Developing a Llama 3-based system fine-tuned with LoRA to classify YouTube videos and analyze sentiment from titles and descriptions.",
      "Enhancing the ADAO model, retraining it on brand image data to improve ad placement detection accuracy in cricket broadcasts.",
    ],
    tags: ["Python", "YOLO", "OCR", "LLaMA 3", "LoRA", "AWS S3", "Playwright"],
  },
  {
    role: "Data Analyst Intern",
    company: "Finn Fintech",
    period: "Sep 2025 – Nov 2025",
    type: "Hybrid",
    bullets: [
      "Analyzed customer financial and loan datasets using SQL and Python to evaluate sales trends, profitability and risk metrics.",
      "Developed Power BI dashboards from financial statements to surface key KPIs and support credit assessment decisions.",
    ],
    tags: ["SQL", "Python", "Power BI", "DAX", "Financial Analytics"],
  },
  {
    role: "Data Analyst Intern",
    company: "Saiesha E-Vehicles",
    period: "Jun 2025 – Jul 2025",
    type: "On-Site",
    bullets: [
      "Cleaned and transformed FY 2024–25 sales ledger data using Python and Excel, conducted EDA to ensure data quality.",
      "Built interactive Power BI dashboards to monitor sales performance, revenue trends and monthly KPIs.",
    ],
    tags: ["Python", "Excel", "Power BI", "EDA", "Sales Analytics"],
  },
];

const Career = () => {
  return (
    <section className="career-section" id="career">
      <div className="career-inner section-container">
        <div className="career-header">
          <span className="section-label">Experience</span>
          <h2 className="career-title title">
            My Career &<br />
            <span className="display-font career-title-italic">Journey</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="career-timeline">
          {experiences.map((exp, i) => (
            <div className="career-item" key={i}>
              <div className="career-dot-wrap">
                <div className="career-dot"></div>
                {i < experiences.length - 1 && <div className="career-line"></div>}
              </div>

              <div className="career-card">
                <div className="career-card-top">
                  <div className="career-card-meta">
                    <span className="career-period">{exp.period}</span>
                    <span className="career-type-badge">{exp.type}</span>
                  </div>
                  <div className="career-card-title">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                </div>

                <ul className="career-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className="career-tags">
                  {exp.tags.map((tag) => (
                    <span className="career-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
