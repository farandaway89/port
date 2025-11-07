#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Update Contact.tsx - Remove location, update phone number, remove descriptions

contact_content = """export function Contact() {
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
                <a href="mailto:farandaway89@gmail.com">farandaway89@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <span>📱</span>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:010-4861-8910">010-4861-8910</a>
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
    f.write(contact_content)

print("Contact.tsx updated:")
print("- Removed Location card")
print("- Removed Email description: '업무 문의 및 협업 제안'")
print("- Removed Phone description: '빠른 상담이 필요하신 경우'")
print("- Updated phone number: 010-4861-8910")
