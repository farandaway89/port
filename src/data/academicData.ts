export interface AcademicItem {
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
