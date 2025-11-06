import { educationData } from '../data/educationData'

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education & Training</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px', fontSize: '1.1rem' }}>
          체계적인 학습과 최신 기술 습득을 통한 전문성 구축
        </p>
        <div className="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <h3 className="education-degree">
                {edu.title}
                {edu.showOnlineTag && <span style={{ marginLeft: '10px', color: '#e74c3c', fontSize: '0.9rem' }}>(온라인 교육)</span>}
              </h3>
              <p className="education-school">{edu.school}</p>
              <p className="education-period">{edu.period}</p>
              <p className="education-description">
                {edu.description}
                <br /><br />
                <strong>주요 학습 내용:</strong><br />
                {edu.mainTopics.map((topic, idx) => (
                  <span key={idx}>
                    • {topic}<br />
                  </span>
                ))}
              </p>
              <div className="education-links">
                {edu.link ? (
                  <a href={edu.link} className="education-link" target="_blank" rel="noopener noreferrer">
                    수료증 보기
                  </a>
                ) : edu.status ? (
                  <span className="education-status">{edu.status}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
