import { academicData } from '../data/academicData'

export function Academic() {
  return (
    <section id="academic" className="section">
      <div className="container">
        <h2 className="section-title">학력 사항</h2>
        <div className="academic-grid">
          {academicData.map((item) => (
            <div key={item.id} className="academic-card">
              <div className="academic-degree">{item.degree}</div>
              <h3 className="academic-school">{item.school}</h3>
              <p className="academic-period">{item.period}</p>
              <p className="academic-description">{item.description}</p>
              <div className="academic-skills">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="academic-skill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
