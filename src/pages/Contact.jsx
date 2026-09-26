function Contact() {
  return (
    <div className="home-screen">

      <div className="home-glow" />

      <section className="portfolio-section contact-section">

        <p className="eyebrow">
          COMMUNICATION TERMINAL
        </p>

        <h2>
          CONTACT ABBIR
        </h2>

        <p className="contact-intro">
          Have a project, opportunity or idea?
          Let's connect and build something impactful.
        </p>

        <div className="contact-grid">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abbir.billore99@gmail.com"
            className="contact-card"
          >
            <span className="contact-icon">✉</span>

            <div>
              <span className="contact-label">
                EMAIL
              </span>

              <strong>
                abbir.billore99@gmail.com
              </strong>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/abbir-billore-b05315226/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">in</span>

            <div>
              <span className="contact-label">
                LINKEDIN
              </span>

              <strong>
                Connect on LinkedIn
              </strong>
            </div>
          </a>

          <a
            href="https://github.com/abbirbillore"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">⌘</span>

            <div>
              <span className="contact-label">
                GITHUB
              </span>

              <strong>
                View My GitHub
              </strong>
            </div>
          </a>

          <div className="contact-card">
            <span className="contact-icon">⌖</span>

            <div>
              <span className="contact-label">
                LOCATION
              </span>
              <br />

              <strong>
                Madhya Pradesh, India
              </strong>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;