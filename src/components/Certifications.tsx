import { certificationsData } from '../data/certificationsData'

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications & Qualifications</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '50px', fontSize: '1.1rem' }}>
          전문성을 입증하는 수료증 및 자격증
        </p>
        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="certification-card">
              <h3 className="certification-title">{cert.title}</h3>
              <p className="cert-type">{cert.certType}</p>
              <p className="cert-description">
                {cert.description}
              </p>
              <div className="skills-tags">
                {cert.skillsTags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
