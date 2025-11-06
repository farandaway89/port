export function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Contact</h2>
          <p className="contact-subtitle">함께 혁신적인 프로젝트를 만들어갑시다</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card primary">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>업무 문의 및 협업 제안</p>
                <a href="mailto:farandaway89@gmail.com">farandaway89@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <span>📱</span>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>빠른 상담이 필요하신 경우</p>
                <a href="tel:010-9673-8910">010-9673-8910</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <span>📍</span>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>대한민국 광주광역시</p>
                <span style={{ color: '#667eea' }}>원격 근무 가능</span>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <h3 className="social-title">Social & Portfolio</h3>
            <div className="social-grid">
              <a href="https://github.com/farandaway89" className="social-item" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <span>💻</span>
                </div>
                <div className="social-info">
                  <div className="social-name">GitHub</div>
                  <div className="social-desc">코드 저장소</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/%EC%8A%B9%ED%95%84-%EC%9D%B4-b69635343/" className="social-item" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <span>💼</span>
                </div>
                <div className="social-info">
                  <div className="social-name">LinkedIn</div>
                  <div className="social-desc">전문 네트워크</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2025 이승필. All rights reserved.</p>
      </div>
    </section>
  )
}
