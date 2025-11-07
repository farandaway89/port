/**
 * Certifications & Qualifications
 * 자격증 및 전문성 (Education & Training과 다름)
 */

export interface CertificationItem {
  id: number;
  title: string;
  certType: string;
  description: string;
  skillsTags: string[];
}

export const certificationsData: CertificationItem[] = [
  {
    id: 1,
    title: "IELTS ACADEMIC 7.0",
    certType: "국제영어시험 - 글로벌 플랫폼 개발자 역량",
    description: "글로벌 플랫폼 개발자로서의 핵심 영어 역량: IELTS ACADEMIC 7.0 수준의 영어 능력을 바탕으로 해외 개발팀과의 원활한 협업, 영문 기술 문서 작성 및 검토, 국제 프로젝트 미팅 진행이 가능합니다.",
    skillsTags: ["API Documentation", "Code Review", "Technical Specification", "GitHub Management", "Global Team Collaboration"]
  },
  {
    id: 2,
    title: "ECC日本語学院新宿校",
    certType: "일본어 교육과정 (2019.11 ~ 2021.03)",
    description: "현실적인 플랫폼 개발자 실무 역량: 초급 수준의 일본어 교육과정을 통해 기본적인 일본어 시스템 용어 이해, 간단한 일본어 UI/UX 텍스트 작성, 일본인 동료와의 기초적인 업무 커뮤니케이션이 가능합니다.",
    skillsTags: ["Basic Japanese UI Text", "Translation", "Error Message Interpretation", "Multi-language Support"]
  },
  {
    id: 3,
    title: "ERP 시스템 전문가",
    certType: "Oracle/SAP 15년 운영 경험",
    description: "엔터프라이즈 플랫폼 개발자로서의 핵심 역량: 15년간 Oracle/SAP ERP 시스템 운영을 통해 습득한 대규모 시스템 아키텍처 설계, 복잡한 비즈니스 로직 구현, 시스템 간 통합 설계 경험을 플랫폼 개발에 직접 활용합니다.",
    skillsTags: ["System Architecture", "API Gateway", "Microservices", "Data Flow Design", "Enterprise Integration", "Workflow Engine"]
  },
  {
    id: 4,
    title: "SOX 컴플라이언스 전문성",
    certType: "파버나인 근무경력 기반 (2014.12 - 2019.10)",
    description: "파버나인의 미국 상장기업 자회사로서 SOX 404조 내부통제 구축 및 운영, ERP 시스템 접근권한 관리 및 직무분리 통제 설계, Big4 회계법인 외부감사 대응 경험을 보유하고 있습니다.",
    skillsTags: ["SOX 404 Compliance", "RBAC Design", "Audit Trail", "ITGC Implementation", "Enterprise Security", "Big4 Audit"]
  },
  {
    id: 5,
    title: "금융투자 분석 전문자격증",
    certType: "2010-2011년 연속 취득 (합격률 10-15%대 고난위도 시험)",
    description: "증권투자상담사, 파생상품투자상담사, 펀드투자상담사를 연속 취득하여 복잡한 데이터 분석, 리스크 모델링, 통계적 분석 방법론을 FinTech 플랫폼 개발에 활용합니다.",
    skillsTags: ["FinTech Platform", "VaR Calculation", "Risk Modeling", "Trading Systems", "Portfolio Optimization", "Mathematical Modeling"]
  }
];
