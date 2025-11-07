#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Create Education.tsx component
education_component = """import { educationData } from '../data/educationData'

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
              <div className="education-header">
                <h3 className="education-degree">{edu.title}</h3>
                {edu.showOnlineTag && (
                  <span className="online-tag">(온라인 교육)</span>
                )}
              </div>
              <p className="education-school">{edu.school}</p>
              <p className="education-period">{edu.period}</p>
              <p className="education-description">{edu.description}</p>

              {edu.mainTopics && edu.mainTopics.length > 0 && (
                <div className="education-topics">
                  <strong>주요 학습 내용:</strong>
                  <div className="topic-tags">
                    {edu.mainTopics.map((topic, idx) => (
                      <span key={idx} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="education-footer">
                <span className={`education-status ${edu.status === '진행중' ? 'in-progress' : 'completed'}`}>
                  {edu.status}
                </span>
                {edu.link && (
                  <a href={edu.link} className="education-link" target="_blank" rel="noopener noreferrer">
                    수료증 보기
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
"""

with open('C:/developer/port-website/portfolio-react/src/components/Education.tsx', 'w', encoding='utf-8') as f:
    f.write(education_component)

print("Created Education.tsx component")
