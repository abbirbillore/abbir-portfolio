function Certifications() {
  return (
    <div className="home-screen">

      <div className="home-glow" />

      <section className="portfolio-section certifications-section">

        <p className="eyebrow">
          ACHIEVEMENT DATABASE
        </p>

        <h2>
          CERTIFICATIONS
        </h2>

        <div className="certificate-grid">

          {/* CERTIFICATE 01 */}

          <div className="certificate-card">

            <div className="certificate-top">
              <span className="certificate-number">
                01
              </span>

              <span className="certificate-status">
                VERIFIED
              </span>
            </div>

            <div className="certificate-icon">
              🛰️
            </div>

            <h3>
              Bhartiya Antariksh Hackathon 2026
            </h3>

            <p>
              Participation certificate for the Bhartiya Antariksh
              Hackathon 2026, presented by ISRO and powered by Hack2Skill.
            </p>

            <div className="certificate-meta">
              <span>
                ISRO
              </span>

              <span>
                HACK2SKILL
              </span>
            </div>

            <a href="/Bhartiya-Antariksh-Hackathon-2026.pdf"
               target="_blank"
               rel="noreferrer"
               className="certificate-button"
            >
              VIEW CERTIFICATE
            </a>

          </div>


          {/* CERTIFICATE 02 */}

          <div className="certificate-card">

            <div className="certificate-top">
              <span className="certificate-number">
                02
              </span>

              <span className="certificate-status">
                COMPLETED
              </span>
            </div>

            <div className="certificate-icon">
              🐍
            </div>

            <h3>
              Python with Data Science
            </h3>

            <p>
              Successfully completed a Python with Data Science course
              covering Python programming and fundamental data science
              concepts.
            </p>

            <div className="certificate-meta">
              <span>
                PYTHON
              </span>

              <span>
                DATA SCIENCE
              </span>
            </div>


            <a href="/Python-With-Data-Science.pdf"
               target="_blank"
               rel="noreferrer"
               className="certificate-button"
            >
              VIEW CERTIFICATE
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Certifications;