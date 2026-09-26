import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-screen">
      <div className="floating-particles">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="home-glow" />

      {/* HERO SECTION */}
      <main className="hero-section">

        <div className="hero-text">

          <p className="eyebrow">
            WELCOME TO MY WORLD
          </p>

          <h1>
            ABBIR'S
            <span>WORLD</span>
          </h1>

          <h2>
            DATA ANALYST
            <span>PYTHON DEVELOPER</span>
          </h2>

          <p className="hero-description">
            Turning Data into Decisions
            <br />
            and Ideas into Impact.
          </p>

          <div className="hero-buttons">

          <Link to="/projects" className="neon-button">
          EXPLORE MY WORK
          </Link>  

          <Link to="/about" className="outline-button">
          VIEW PROFILE
          </Link>

          <a href="/Abbir-Resume.pdf"
             target="_blank"
             rel="noreferrer"
             className="resume-button"
          >
            DOWNLOAD RESUME
          </a>

          </div>

        </div>

        {/* CHARACTER */}
        <div className="hero-character">
          <div className="character-ring" />

 <div className="character-placeholder">
  <div className="profile-scan-line" />

  <img
    src="/abbir-profile.png"
    alt="Abbir Billore"
    className="profile-image"
  />

  <div className="profile-hud-top">
    <span>ID: AB-001</span>
    <span>ONLINE</span>
  </div>

  <div className="profile-hud-bottom">
    <span>ROLE: ANALYST</span>
    <span>SYS://ACTIVE</span>
  </div>

  <span className="profile-corner top-left" />
  <span className="profile-corner top-right" />
  <span className="profile-corner bottom-left" />
  <span className="profile-corner bottom-right" />
</div>
          <div className="character-info">
            <span className="player-id">PLAYER 001</span>

            <h3>ABBIR BILLORE</h3>

            <div className="character-role">
              <span>DATA ANALYST</span>
              <span>PYTHON DEVELOPER</span>
            </div>

            <div className="character-status">
              <span className="status-dot" />
              SYSTEM ACTIVE
            </div>
          </div>
        </div>

      </main>

      {/* STATS */}
      <section className="stats-section">

        <div className="stat-card">
          <strong>06+</strong>
          <span>PROJECTS</span>
        </div>

        <div className="stat-card">
          <strong>02</strong>
          <span>CERTIFICATIONS</span>
        </div>

        <div className="stat-card">
          <strong>100%</strong>
          <span>DEDICATION</span>
        </div>

        <div className="stat-card">
          <strong>∞</strong>
          <span>LEARNING</span>
        </div>

      </section>

    </div>
  );
}

export default Home;