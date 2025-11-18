export function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>C | C++ | C# | Python</span>
            </div>

            <h1 className="hero-title">
              System Platform<br />
              <span className="gradient-text">Developer</span>
            </h1>

            <p className="hero-description">
              AI & Full-Stack Development Specialist<br />
              15년 ERP/MES 시스템 운영 경험 + 최신 AI 기술 융합
            </p>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-icon">23</div>
                <div className="stat-content">
                  <span className="stat-number">23</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">15</div>
                <div className="stat-content">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Years Exp</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">10</div>
                <div className="stat-content">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Tech Stack</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                <span>프로젝트 보기</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>연락하기</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-container">
              <img src="/documents/images/profile.jpg" alt="이승필 프로필 사진" className="profile-image" />
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
