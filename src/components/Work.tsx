import { useState, useCallback, useMemo } from "react";
import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";

type Project = {
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  tools: string[];
  description: string[];
  github?: string;
  color: string;
};

const Work = () => {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "FoundrAI – AI Product & Startup Studio",
        shortTitle: "FoundrAI",
        category: "Multi-Agent Generative AI Platform",
        year: "2025",
        tools: ["Python", "FastAPI", "LangGraph", "LangChain", "RAG", "LLMs", "PostgreSQL", "FAISS"],
        description: [
          "End-to-end multi-agent GenAI platform that transforms startup ideas into business plans, product roadmaps, technical architectures and investor-ready documents.",
          "Specialized AI agents for idea validation, market research, competitor analysis, product planning, finance and marketing.",
          "Integrated PostgreSQL, FAISS, Sentence Transformers and Ollama (Qwen/Llama) for context-aware recommendations and persistent project memory.",
        ],
        github: "https://github.com/ujjwalvermaaa/FoundrAI",
        color: "#2563eb",
      },
      {
        title: "PharmX AI – Healthcare Intelligence System",
        shortTitle: "PharmX AI",
        category: "Healthcare Analytics Platform",
        year: "2025",
        tools: ["Python", "Scikit-learn", "TensorFlow", "NLP", "TF-IDF", "Streamlit", "Plotly"],
        description: [
          "End-to-end multi-model healthcare analytics: disease prediction, hospital severity analysis, outbreak risk forecasting and medicine demand prediction.",
          "Built ML/NLP pipelines with Scikit-learn and TensorFlow with consistent training–inference preprocessing.",
          "Interactive Streamlit app with Plotly visualizations delivering real-time predictions and insights.",
        ],
        github: "https://github.com/ujjwalvermaaa/PharmX-AI-Healthcare-Intelligence-System",
        color: "#7c3aed",
      },
      {
        title: "FinTime – Customer Behaviour Analytics",
        shortTitle: "FinTime",
        category: "Financial Analytics Dashboard",
        year: "2025",
        tools: ["Python", "SQL", "Power BI", "DAX", "EDA", "Pandas"],
        description: [
          "Analyzed customer transactions to identify revenue trends, churn behavior and financial health.",
          "Data cleaning, EDA and feature engineering in Python and SQL to build analytical tables.",
          "Four-page Power BI dashboard: revenue, segmentation, churn analysis and insights; 90-day churn logic and revenue-at-risk in DAX.",
        ],
        github: "https://github.com/ujjwalvermaaa/FinTime-Customer-Financial-Behavior-Analytics",
        color: "#0891b2",
      },
      {
        title: "RetainX – Customer Retention & Churn Analytics",
        shortTitle: "RetainX",
        category: "Customer Analytics Platform",
        year: "2025",
        tools: ["Python", "PostgreSQL", "Power BI", "Excel", "NumPy", "Seaborn"],
        description: [
          "End-to-end churn analytics from raw ingestion to executive dashboards.",
          "Customer segmentation and feature engineering in SQL to identify churn drivers and high-value risk.",
          "Power BI dashboards with KPIs, churn trends, revenue-at-risk and geographic insights.",
        ],
        github: "https://github.com/ujjwalvermaaa/RetainX-Customer-Churn-Retention-Analytics-Platform",
        color: "#059669",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const setProject = useCallback(
    (i: number) => {
      if (animating || i === active) return;
      setAnimating(true);
      setActive(i);
      setTimeout(() => setAnimating(false), 400);
    },
    [active, animating]
  );

  const current = projects[active];

  return (
    <section className="work-section" id="work">
      <div className="work-inner section-container">
        <div className="work-header">
          <span className="section-label">Portfolio</span>
          <h2 className="work-title title">
            Featured<br />
            <span className="display-font work-title-italic">Projects</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="work-layout">
          {/* Left: project list */}
          <div className="work-list">
            {projects.map((p, i) => (
              <button
                key={p.title}
                className={`work-list-item ${i === active ? "work-list-item-active" : ""}`}
                onClick={() => setProject(i)}
                data-cursor="disable"
              >
                <div className="work-list-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="work-list-info">
                  <span className="work-list-name">{p.shortTitle}</span>
                  <span className="work-list-cat">{p.category}</span>
                </div>
                <MdArrowOutward className="work-list-arrow" />
              </button>
            ))}
          </div>

          {/* Right: project detail */}
          <div className={`work-detail ${animating ? "work-detail-fade" : ""}`}>
            <div
              className="work-detail-accent"
              style={{ background: `linear-gradient(135deg, ${current.color}18, ${current.color}06)` }}
            ></div>

            <div className="work-detail-top">
              <span className="work-detail-year">{current.year}</span>
              <span className="work-detail-cat">{current.category}</span>
            </div>

            <h3 className="work-detail-title">{current.title}</h3>

            <ul className="work-detail-desc">
              {current.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <div className="work-detail-tools">
              {current.tools.map((t) => (
                <span className="work-tool-tag" key={t}>{t}</span>
              ))}
            </div>

            {current.github && (
              <a
                href={current.github}
                target="_blank"
                rel="noreferrer"
                className="work-detail-link"
                data-cursor="disable"
              >
                View on GitHub <MdArrowOutward />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
