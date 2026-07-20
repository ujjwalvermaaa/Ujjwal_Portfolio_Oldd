import "./styles/WhatIDo.css";

const services = [
  {
    number: "01",
    title: "Data Analytics",
    subtitle: "Insights From Data",
    description:
      "Cleaning, transforming and analyzing datasets to discover trends, track KPIs and communicate insights through interactive dashboards and reports.",
    tags: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Excel", "Tableau", "Matplotlib", "Seaborn"],
    emoji: "📊",
  },
  {
    number: "02",
    title: "Machine Learning",
    subtitle: "Predictive Modeling",
    description:
      "Designing end-to-end ML pipelines for classification, regression and clustering. From raw feature engineering to deployment-ready inference pipelines.",
    tags: ["Scikit-learn", "Feature Engg", "EDA", "Classification", "Regression", "Clustering"],
    emoji: "🤖",
  },
  {
    number: "03",
    title: "NLP & Deep Learning",
    subtitle: "Neural Networks & Text AI",
    description:
      "Building NLP pipelines with TF-IDF, NLTK and Transformers; training deep neural networks with TensorFlow/Keras for sequence and tabular problems.",
    tags: ["TensorFlow", "Keras", "NLP", "NLTK", "TF-IDF", "Transformers", "Deep Learning"],
    emoji: "🧠",
  },
  {
    number: "04",
    title: "Generative AI",
    subtitle: "LLMs, RAG & Agentic AI",
    description:
      "Building production Generative AI systems using LLMs, RAG pipelines, prompt engineering and multi-agent architectures with LangChain and LangGraph.",
    tags: ["LLMs", "RAG", "LangChain", "LangGraph", "Prompt Engg", "Ollama", "FAISS"],
    emoji: "✨",
  },
];

const WhatIDo = () => {
  return (
    <section className="whatido-section" id="whatido">
      <div className="whatido-inner section-container">
        <div className="whatido-header">
          <span className="section-label">What I Do</span>
          <h2 className="whatido-title title">
            Services &<br />
            <span className="display-font whatido-title-italic">Expertise</span>
          </h2>
          <div className="section-divider"></div>
          <p className="whatido-subtitle">
            End-to-end data intelligence — from raw numbers to AI-powered decisions.
          </p>
        </div>

        <div className="whatido-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-emoji">{service.emoji}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-desc">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span className="service-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
