import { experienceData } from '../data/experienceData'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px', fontSize: '1.1rem' }}>
          총 15년 9개월간의 글로벌 기업 해외영업 및 시스템 운영 경험 (호주 3년 1개월 포함)
        </p>
        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period} ({exp.duration})</p>
                <div className="experience-description">
                  <p>
                    <strong>회사소개:</strong> {exp.companyInfo}<br />
                    <strong>연봉:</strong> {exp.salary} | <strong>근무지역:</strong> {exp.location}
                  </p>
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} style={{ marginTop: '15px' }}>
                      <p><strong>• {resp.category}</strong></p>
                      {resp.details.map((detail, detailIdx) => (
                        <p key={detailIdx} style={{ marginLeft: '10px' }}>- {detail}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="experience-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
