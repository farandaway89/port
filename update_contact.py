#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Update Contact.tsx with 4 social links only
contact_component = """export function Contact() {
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
            <h3 className="social-title">Connect with me</h3>
            <div className="social-grid">
              <a href="https://farandaway89.tistory.com" className="social-item" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <span>📝</span>
                </div>
                <div className="social-info">
                  <div className="social-name">Blog</div>
                  <div className="social-desc">기술 블로그 & 인사이트</div>
                </div>
              </a>

              <a href="https://github.com/farandaway89" className="social-item" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <span>💻</span>
                </div>
                <div className="social-info">
                  <div className="social-name">GitHub</div>
                  <div className="social-desc">Code Repository</div>
                </div>
              </a>

              <a href="https://huggingface.co/farandaway" className="social-item" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <span>🤗</span>
                </div>
                <div className="social-info">
                  <div className="social-name">Hugging Face</div>
                  <div className="social-desc">AI & ML Projects</div>
                </div>
              </a>

              <a href="https://youtube.com/@farandaway85" className="social-item" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                  <span>📺</span>
                </div>
                <div className="social-info">
                  <div className="social-name">YouTube</div>
                  <div className="social-desc">Tech Videos & Tutorials</div>
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
"""

with open('C:/developer/port-website/portfolio-react/src/components/Contact.tsx', 'w', encoding='utf-8') as f:
    f.write(contact_component)

print("Updated Contact.tsx with 4 social links")
print("Removed: Portfolio, Netlify, Vercel")
print("Kept: Blog, GitHub, Hugging Face, YouTube")
