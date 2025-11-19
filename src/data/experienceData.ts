export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  salary: string;
  companyInfo: string;
  responsibilities: {
    category: string;
    details: string[];
  }[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Overseas business · 차장/팀장",
    company: "KAS Holdings Co,.Ltd (Viet Nam)",
    period: "2021.07 - 2025.09",
    duration: "3년 3개월",
    location: "베트남",
    salary: "5,500만원",
    companyInfo: "베트남 소비자보호협회 톱10 기업",
    responsibilities: [
      {
        category: "영업전략 계획 실행",
        details: [
          "100% 베트남 외국인 건설투자법인 캄보디아, 라오스 진출 실무 지원",
          "마스터 프랜차이즈 '꽈페' 오픈 계약 실무 지원",
          "회사 HR, ERP, MES 운영",
          "영업전략 시스템 계획 운영 (목표 설정 및 성과 지표관리)",
          "매출 생산성 관리업무 수행",
          "계약 관리 및 이슈 파악 및 처리(구매,통관,원가절감)"
        ]
      },
      {
        category: "사업주 대응",
        details: [
          "공공 업무와 관련된 사업주의 요구 사항 파악 및 대응, 의사 결정",
          "최고 경영진 대응 및 건설 사업주 네트워크 구축"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "해외 영업 · 차장 5년차",
    company: "㈜파버나인",
    period: "2014.12 - 2019.10",
    duration: "4년 11개월",
    location: "인천",
    salary: "4,000만원",
    companyInfo: "삼성전자 1차 vendor KOSPI 상장사",
    responsibilities: [
      {
        category: "해외전략기획",
        details: [
          "글로벌 가전업체 GE 社 품목 기획지원관리",
          "미국 GE 社 ERP 운영 : PO, Shipment notice and forecast",
          "멕시코 가전업체 마베(Mabe) 社 와 협업 실행전략 수립"
        ]
      },
      {
        category: "해외영업, 마케팅",
        details: [
          "GE 社, Mabe 社 경영성과 분석 및 관리, 자금의 조달 및 운영 보고",
          "GE 社, Mabe 社 제품 생산 인력 효율적으로 관리하고 운영 보고"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Sales/Marketing · Manager 3년차",
    company: "Aussie Farmers Direct",
    period: "2011.11 - 2014.11",
    duration: "3년 1개월",
    location: "호주",
    salary: "40,000달러",
    companyInfo: "호주 최대 식품 delivery 유통회사",
    responsibilities: [
      {
        category: "Eats Business Operations 조직 사업 운영팀",
        details: [
          "계약, 정산, 운영 등 관련 프로젝트에 데이터에 기반하여 해결방안을 도출하고 운영",
          "MYOB (및 기타 회계 소프트웨어) 운영, HR, PAYROLL 관리",
          "B2B Account Management (1.City Hall, 2. Queensland Parliament House. 3. Government House)"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "해외사업부 · 과장 5년차",
    company: "㈜제일약품",
    period: "2007.04 - 2011.09",
    duration: "4년 6개월",
    location: "서울",
    salary: "3,800만원",
    companyInfo: "국내 제약 original 매출 Top5 KOSPI 상장사",
    responsibilities: [
      {
        category: "경영지원, 재무관리업무, ERP 운영",
        details: [
          "전세계 최대 제약 社 미국 Pfizer 협업 지원 실무",
          "경영성과 분석 및 관리, 자금의 조달 및 운영, 감사보고서 발행, IR"
        ]
      },
      {
        category: "소화기, 순환기 약품 국가별 사업계획 수립 및 관리",
        details: [
          "사전적인 시장조사, 아이디어/행사기획 추진",
          "제품 홍보, 판촉 등 커뮤니케이션 전략 수립, 실행",
          "제품 매출 극대화를 위한 제반적인 중, 장기 계획과 전략, 연간/분기 마케팅 전략 기획 및 수행"
        ]
      }
    ]
  }
];
