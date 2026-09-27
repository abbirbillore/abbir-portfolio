function About() {
  return (
    <div className="home-screen">

      <div className="home-glow" />

      <section className="portfolio-section about-section">

        <p className="eyebrow">
          PLAYER PROFILE
        </p>

        <h2>
          ABOUT ABBIR
        </h2>

        <div className="about-intro">

          <p>
            <p> “I believe that every problem becomes an opportunity when we look at it with the right data and the right mindset.” </p>
            <p> Hello everyone, My self Abbir Billore. I am currently pursuing my M.Tech in Data Science, and I have pursued my B.Tech in Computer Science and Business Systems from RGPV, Bhopal. </p>
            <p> I have a strong interest in Data Analytics, Data Science, and Artificial Intelligence, and I enjoy working with data to discover meaningful insights and solve real-world problems. 
            I have hands-on experience with technologies such as Python, SQL, Power BI, MySQL, Machine Learning, and Streamlit.
            During my academic journey, I have worked on several projects, including an E-commerce Analytics Dashboard using Power BI and MySQL, a UPI Fraud Detection system, 
            and AI-based applications involving document analysis, image generation, and object detection. These projects have helped me develop both my technical skills and my ability to approach problems analytically. </p>
            <p> Apart from technical skills, I consider myself a quick learner, problem solver, and someone who is always willing to learn new technologies. My goal is to build a career in Data Science and Analytics, 
            where I can use data and technology to create practical solutions and continuously grow as a professional. </p>
          </p>

          <p>
            I enjoy working with data, discovering meaningful patterns,
            building intelligent applications and converting ideas into
            practical technology solutions.
          </p>

        </div>


        {/* FOCUS AREAS */}

        <div className="about-block">

          <p className="eyebrow">
            PRIMARY FOCUS
          </p>

          <div className="skill-grid">

            <div className="skill-card">
              <span className="skill-icon">📊</span>

              <h3>
                DATA ANALYTICS
              </h3>

              <p>
                SQL, Power BI, MySQL, data cleaning,
                visualization and business insights.
              </p>
            </div>


            <div className="skill-card">
              <span className="skill-icon">🐍</span>

              <h3>
                PYTHON DEVELOPMENT
              </h3>

              <p>
                Python, Streamlit, Flask, Django and
                data-focused application development.
              </p>
            </div>


            <div className="skill-card">
              <span className="skill-icon">🤖</span>

              <h3>
                AI & MACHINE LEARNING
              </h3>

              <p>
                Machine learning, computer vision,
                NLP and AI-powered applications.
              </p>
            </div>


            <div className="skill-card">
              <span className="skill-icon">⚡</span>

              <h3>
                PROBLEM SOLVING
              </h3>

              <p>
                Building practical solutions and continuously
                learning new technologies.
              </p>
            </div>

          </div>

        </div>


        {/* EDUCATION */}

        <div className="about-block">

          <p className="eyebrow">
            EDUCATION
          </p>

          <div className="education-card">

            <div>
              <span className="education-label">
                CURRENTLY PURSUING
              </span>

              <h3>
                M.Tech in Data Science 
              </h3>

              <p>
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
              </p>
              <br />

              <span className="education-label">
                PURSUED
              </span>

              <h3>
                B.Tech in Computer Science and Business System
              </h3>

              <p>
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
              </p>
            </div>

            <span className="education-status">
              ACTIVE
            </span>

          </div>

        </div>


        {/* TOOLKIT */}

<div className="about-block">
  <p className="eyebrow">
    TECHNOLOGY TOOLKIT
  </p>

  <div className="skill-matrix">

    {/* DATA ANALYTICS */}

    <div className="skill-matrix-card">
      <div className="skill-matrix-header">
        <span className="skill-matrix-icon">📊</span>

        <div>
          <span className="skill-matrix-label">
            MODULE 01
          </span>

          <h3>DATA ANALYTICS</h3>
        </div>
      </div>

      <div className="skill-items">
        <span>Python</span>
        <span>SQL</span>
        <span>Power BI</span>
        <span>Excel</span>
        <span>MySQL</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Matplotlib</span>
      </div>
    </div>


    {/* DEVELOPMENT */}

    <div className="skill-matrix-card">
      <div className="skill-matrix-header">
        <span className="skill-matrix-icon">⚡</span>

        <div>
          <span className="skill-matrix-label">
            MODULE 02
          </span>

          <h3>DEVELOPMENT</h3>
        </div>
      </div>

      <div className="skill-items">
        <span>Python</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Streamlit</span>
        <span>Flask</span>
        <span>Django</span>
        <span>Git</span>
      </div>
    </div>


    {/* AI / MACHINE LEARNING */}

    <div className="skill-matrix-card">
      <div className="skill-matrix-header">
        <span className="skill-matrix-icon">🤖</span>

        <div>
          <span className="skill-matrix-label">
            MODULE 03
          </span>

          <h3>AI & MACHINE LEARNING</h3>
        </div>
      </div>

      <div className="skill-items">
        <span>Machine Learning</span>
        <span>Computer Vision</span>
        <span>Data Wrangling</span>
        <span>NLP</span>
        <span>AI Applications</span>
      </div>
    </div>

  </div>
</div>
      </section>

    </div>
  );
}

export default About;
