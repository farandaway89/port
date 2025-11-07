#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Create academicData.ts
academic_data = """export interface AcademicItem {
  id: number;
  degree: string;
  school: string;
  period: string;
  description: string;
  skills: string[];
}

export const academicData: AcademicItem[] = [
  {
    id: 1,
    degree: "학사 (경영학과, 학점: 3.4/4.5)",
    school: "조선대학교",
    period: "1999.03 - 2007.08",
    description: "경영학 전공을 통해 시스템적 사고와 프로세스 최적화에 대한 기초를 다졌습니다. CAD를 활용한 설계 과정에서 논리적 문제 해결 능력을 기를 수 있었습니다.",
    skills: ["Systems Thinking", "Process Optimization", "Project Management"]
  },
  {
    id: 2,
    degree: "문과계열 졸업",
    school: "광주서석고등학교",
    period: "1996.03 - 1999.02",
    description: "문과계열 교육과정을 통해 논리적 사고력과 문제 해결 능력의 기초를 다졌습니다. 체계적인 학습 습관과 분석적 사고 능력을 기를 수 있었습니다.",
    skills: ["Logical Thinking", "Analytical Skills", "Communication"]
  }
];
"""

with open('C:/developer/port-website/portfolio-react/src/data/academicData.ts', 'w', encoding='utf-8') as f:
    f.write(academic_data)

print("Created academicData.ts")

# Create Academic.tsx
academic_component = """import { academicData } from '../data/academicData'

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
"""

with open('C:/developer/port-website/portfolio-react/src/components/Academic.tsx', 'w', encoding='utf-8') as f:
    f.write(academic_component)

print("Created Academic.tsx")
