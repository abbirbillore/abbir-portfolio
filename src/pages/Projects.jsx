const projects = [
  {
    id: "01",
    title: "E-Commerce Analytics Dashboard",
    description:
      "Interactive business intelligence dashboard for analyzing sales, profit, customers, products and regional performance.",
    tech: ["Power BI", "MySQL", "DAX", "Data Analytics"],
    github: "",
    demo: "",
  },

  {
    id: "02",
    title: "UPI Fraud Detection",
    description:
      "Fraud detection system using synthetic UPI transaction data, behavioral feature engineering and anomaly detection techniques.",
    tech: ["Python", "Machine Learning", "Isolation Forest", "Pandas"],
    github: "",
    demo: "",
  },

  {
    id: "03",
    title: "AI Document Assistant",
    description:
      "AI-powered document assistant capable of processing documents and providing intelligent responses using modern AI services.",
    tech: ["Python", "Streamlit", "Supabase", "Groq"],
    github: "",
    demo: "",
  },

  {
    id: "04",
    title: "Trashify — Smart Object Detection",
    description:
      "Computer vision application that detects objects using YOLOv8 and provides an interactive Streamlit interface.",
    tech: ["Python", "YOLOv8", "Computer Vision", "Streamlit"],
    github: "",
    demo: "",
  },

  {
    id: "05",
    title: "GIS Location Intelligence Platform",
    description:
      "Location intelligence platform for finding nearby places, analyzing geographic data and visualizing results on an interactive map.",
    tech: ["Python", "Streamlit", "GIS", "OpenStreetMap"],
    github: "",
    demo: "",
  },

  {
    id: "06",
    title: "AI Image Generator",
    description:
      "AI-powered image generation application built with Streamlit and Hugging Face for creating images from text prompts.",
    tech: ["Python", "Streamlit", "Hugging Face", "Generative AI"],
    github: "",
    demo: "",
  },
];

function Projects() {
  return (
    <div className="home-screen">

      <div className="home-glow" />

      <section className="portfolio-section projects-section">

        <p className="eyebrow">
          MISSION DATABASE
        </p>

        <h2>
          MY PROJECTS
        </h2>

        <div className="project-list">

          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
            >

              <span className="project-number">
                {project.id}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="tech-tags">

                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <div className="project-actions">

                {/* {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-button"
                  >
                    GITHUB
                  </a>
                ) : (
                  <button
                    className="project-button project-button-disabled"
                    disabled
                  >
                    GITHUB
                  </button>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-button"
                  >
                    LIVE DEMO
                  </a>
                ) : (
                  <button
                    className="project-button project-button-disabled"
                    disabled
                  >
                    LIVE DEMO
                  </button>
                )} */}

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Projects;