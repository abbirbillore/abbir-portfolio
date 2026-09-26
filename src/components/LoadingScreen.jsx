import { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min((elapsed / 5000) * 100, 100);

      setProgress(nextProgress);

      if (elapsed >= 5000) {
        clearInterval(interval);
        onComplete();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="grid-background" />
      <div className="scan-line" />

      <div className="loading-content">

        <div className="system-status">
          <span className="status-dot" />
          SYSTEM INITIALIZING
        </div>

        <div className="energy-orb">
          <div className="orb-core">✦</div>
        </div>

        <p className="loading-label">WELCOME TO</p>

        <h1 className="glitch-logo">
          ABBIR.EXE
        </h1>

        <p className="portfolio-label">
          DEVELOPER PORTFOLIO
        </p>

        <div className="loading-terminal">
          <p>&gt; Initializing developer world...</p>
          <p>&gt; Loading skills, projects and achievements...</p>
          <p>&gt; Establishing connection...</p>
        </div>

        <div className="progress-wrapper">

          <div className="progress-info">
            <span>LOADING SYSTEM</span>
            <span>{Math.floor(progress)}%</span>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>

        <p className="loading-footer">
          {progress >= 100
            ? "SYSTEM READY — ENTERING ABBIR'S WORLD"
            : "PLEASE WAIT... SOMETHING AMAZING IS LOADING"}
        </p>

      </div>
    </div>
  );
}

export default LoadingScreen;