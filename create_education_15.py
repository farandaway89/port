#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Create educationData.ts with 15 items - All AICA courses are 40 hours
education_data = """export interface EducationItem {
  id: number;
  title: string;
  school: string;
  period: string;
  description: string;
  mainTopics: string[];
  link?: string;
  status: string;
  showOnlineTag: boolean;
}

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "AWS 아키텍트 성장 트랙",
    school: "전남ICT이노베이션스퀘어",
    period: "2025.10.27-10.31 (5일, 40시간)",
    description: "AWS 클라우드 아키텍처 설계 및 구축을 위한 실무 중심 교육 과정. 클라우드 인프라 설계의 기본 원칙부터 시작하여 EC2, S3, RDS 등 핵심 서비스의 실무 활용법을 학습합니다.",
    mainTopics: ["AWS Architecture", "EC2/S3/RDS", "VPC Network", "High Availability", "Cost Optimization", "Auto Scaling", "Load Balancer"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/AWS 아키텍트성장트랙.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 2,
    title: "(심화) 성능 향상, 최적화를 위한 AI 시스템 구현 방법론",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.03.17-12.20 (9개월, 40시간)",
    description: "AI 컴퓨팅 성능 공학과 시스템 최적화를 위한 심화 과정. 병렬 프로그래밍 기법인 OpenMP와 CUDA를 활용한 GPU 가속화, Python 코드 최적화 기법, 딥러닝 모델 경량화 전략을 학습합니다.",
    mainTopics: ["AI Performance Engineering", "CUDA Programming", "Python Optimization", "Model Compression", "Parallel Computing", "TensorRT", "Distributed Learning"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증](심화) 성능 향상, 최적화를 위한 AI 시스템 구현 방법론_이승필.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 3,
    title: "(응용) 서비스 PM이 되기 위한 인공지능 기업경영 실무",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.03.17-12.20 (9개월, 40시간)",
    description: "AI 서비스 프로젝트 매니저로 성장하기 위한 실무 중심 교육 과정. 최신 AI 기술 동향 파악부터 프로젝트 관리 방법론, PM 핵심 역량 개발까지 포괄적으로 다룹니다.",
    mainTopics: ["Project Management", "AI Service PM", "Process Mining", "Agile/Scrum/Kanban", "Business Strategy", "Risk Management", "Data-driven Decision"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증](응용) 서비스 PM이 되기 위한 인공지능 기업경영 실무 _이승필.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 4,
    title: "(입문) 기초 통계 개념 학습을 위한 AI 통계",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.03.17-12.20 (9개월, 40시간)",
    description: "AI와 데이터 과학의 기초가 되는 통계학 핵심 개념을 체계적으로 학습하는 입문 과정. 확률 분포, 가설 검정, 회귀 분석, 베이즈 정리 등 AI 모델링에 필수적인 통계 이론을 습득합니다.",
    mainTopics: ["Statistical Analysis", "Probability Distribution", "Hypothesis Testing", "Regression Analysis", "Python Statistics", "A/B Testing", "Data Visualization"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증](입문) 기초 통계 개념 학습을 위한 AI 통계_이승필.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 5,
    title: "(응용) AI 개발 프레임워크 실무 프로젝트 실습",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.03.17-12.20 (9개월, 40시간)",
    description: "TensorFlow, PyTorch 등 주요 AI 프레임워크를 활용한 실무 프로젝트 중심 교육 과정. 이미지 분류, 객체 탐지, 자연어 처리, 시계열 예측 등 다양한 AI 프로젝트를 직접 구현합니다.",
    mainTopics: ["TensorFlow", "PyTorch", "Model Development", "Transfer Learning", "Hyperparameter Tuning", "Model Deployment", "Deep Learning Architecture"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증](응용) AI 개발 프레임워크 실무 프로젝트 실습.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 6,
    title: "(기초) 풀스택(프론트엔드&백엔드)",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.01.20-12.20 (1년, 40시간)",
    description: "프론트엔드와 백엔드 기술 스택을 모두 다루는 풀스택 웹 개발 기초 과정. HTML, CSS 문법 및 주요 태그, 자바스크립트 문법 등 프론트엔드 기초를 학습했습니다.",
    mainTopics: ["HTML/CSS", "JavaScript", "Node.js/Express", "Django", "React", "MVC Pattern", "Frontend/Backend Integration"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증]풀스택(프론트엔드&백엔드).png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 7,
    title: "생성형 AI 기반 실전 서비스 구현",
    school: "ICT이노베이션스퀘어",
    period: "2025.08.07-09.04 (160시간)",
    description: "생성형 AI를 활용한 실무 프로젝트 구현 과정으로, LLM 이해 및 활용, RAG 시스템 설계, Fine-tuning, 멀티모달 AI, 프롬프트 엔지니어링 등 최신 생성형 AI 기술 전반을 실무 프로젝트를 통해 학습했습니다.",
    mainTopics: ["LLM", "RAG System", "Fine-tuning", "Prompt Engineering", "LangChain", "Vector Database", "Multimodal AI"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증]생성형 AI 실전 서비스 구현 과정.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 8,
    title: "NVIDIA X AICA Cluster GPU 활용 캠프 온라인 교육",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.01.31-12.20 (8시간)",
    description: "NVIDIA GPU 및 AI 솔루션에 대한 전문 교육으로, H100 TensorCore를 활용한 학습 가속화, 분산 학습, GPU 프로파일링 등 최신 GPU 기반 AI 기술을 습득했습니다.",
    mainTopics: ["NVIDIA GPU Architecture", "H100 TensorCore", "Distributed Learning", "TensorRT-LLM", "GPU Profiling", "CUDA Programming", "AI Enterprise"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증]NVIDIA X AICA Cluster GPU 활용 캠프 온라인 교육_이승필.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 9,
    title: "Microsoft Power BI 활용 기본 과정",
    school: "ICT이노베이션스퀘어",
    period: "2025.09.15-09.19 (40시간)",
    description: "비즈니스 인텔리전스 도구 MS Power BI 활용 기본 과정으로, Power BI Desktop 사용법, 데이터 모델링, DAX 함수, 인터랙티브 대시보드 제작 등을 학습했습니다.",
    mainTopics: ["Power BI Desktop", "Data Modeling", "DAX Functions", "Interactive Dashboard", "Power Query", "Microsoft Copilot", "Data Visualization"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증]Microsoft Power BI 활용.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 10,
    title: "AI 기반 클라우드 컴퓨팅 기초",
    school: "대한상공회의소 광주인력개발원",
    period: "2025.03.15-04.15 (40시간)",
    description: "클라우드 컴퓨팅 기초와 AI 서비스 배포에 대한 전문 교육으로, AWS, Azure, GCP 등 주요 클라우드 플랫폼에서 AI 모델을 배포하고 관리하는 실무 역량을 습득했습니다.",
    mainTopics: ["Cloud Computing", "AWS/Azure/GCP", "AI Deployment", "Docker/Kubernetes", "Model Serving", "Auto Scaling", "Cloud Infrastructure"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증](기초) AI 기반 클라우드 컴퓨팅 기초_이승필.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 11,
    title: "(심화) AI 응용 SW 직무역량 강화를 위한 풀스택 시스템 디자인",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.05.13-11.20 (6개월, 40시간)",
    description: "AI 기반 서비스 플랫폼 개발을 위한 풀스택 시스템 디자인 심화 과정으로, React.js, Node.js/Express.js, MongoDB/PostgreSQL, AI 모델 통합, Docker/Kubernetes 등 현대적 풀스택 개발 기술 전반을 실무 프로젝트를 통해 학습했습니다.",
    mainTopics: ["Full Stack Architecture", "React.js", "Node.js/Express", "MongoDB/PostgreSQL", "Microservices", "Docker/Kubernetes", "CI/CD Pipeline"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증](심화) AI 응용 SW 직무역량 강화를 위한 풀스택 시스템 디자인.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 12,
    title: "(심화) 심층 AI 프로그래밍을 위한 파이썬 라이브러리",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.05.13-11.20 (6개월, 40시간)",
    description: "AI 프로그래밍을 위한 파이썬 라이브러리 심화 과정으로, NumPy, Pandas, Matplotlib/Seaborn, 시계열 데이터 처리, Scikit-learn, TensorFlow/PyTorch 등 Python Ecosystem 전반을 다루는 심화 교육입니다.",
    mainTopics: ["Python Ecosystem", "NumPy/Pandas", "Data Visualization", "Scikit-learn", "TensorFlow/PyTorch", "Time Series Analysis", "ML Pipeline"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증](심화) 심층 AI 프로그래밍을 위한 파이썬 라이브러리.png",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 13,
    title: "[데이터 분석] 농·축산 데이터 셋을 활용한 데이터 분석",
    school: "전남ICT이노베이션스퀘어",
    period: "2025.10.27-11.27 (20일, 80시간)",
    description: "농·축산 데이터를 활용한 실무 데이터 분석 과정으로, Python 프로그래밍 기초부터 NumPy, Pandas를 활용한 데이터 처리 및 분석 기술을 학습합니다.",
    mainTopics: ["Python Programming", "NumPy", "Pandas", "Data Analysis", "Matplotlib", "Seaborn", "Data Visualization"],
    link: "",
    status: "진행중",
    showOnlineTag: true
  },
  {
    id: 14,
    title: "(심화) 생성형 AI의 협력적 활용 비즈니스 개발 방법론",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.03.17-12.20 (6주 과정, 40시간)",
    description: "AICA에서 진행하는 생성형 AI의 협력적 활용 비즈니스 개발 방법론 심화 과정입니다. 생성형 AI를 비즈니스에 효과적으로 적용하는 실무 방법론을 학습합니다.",
    mainTopics: ["Generative AI", "Business Development", "Prompt Design", "AI Strategy", "Process Optimization", "Service Development"],
    link: "https://port-ashy-iota.vercel.app/documents/certificates/[수료증](심화) 생성형 AI의 협력적 활용 비즈니스 개발 방법론.pdf",
    status: "수료 완료",
    showOnlineTag: true
  },
  {
    id: 15,
    title: "[AI응용 SW개발] 인공지능 기반 서비스 플랫폼 개발자과정",
    school: "대한상공회의소 광주인력개발원",
    period: "2025.05.13-11.20 (6개월, 900시간)",
    description: "실무에서 발생하는 데이터를 수집 및 가공하여 각 업무에 필요한 정보를 제공하는 기술을 갖추고, 인공지능 플랫폼을 활용하여 응용프로그램을 개발하는 실무 중심 교육 과정입니다.",
    mainTopics: ["Python Programming", "Machine Learning", "Deep Learning", "Big Data Processing", "AI Solution Development", "Computer Vision", "Speech Recognition"],
    link: "",
    status: "진행중",
    showOnlineTag: false
  }
];
"""

with open('C:/developer/port-website/portfolio-react/src/data/educationData.ts', 'w', encoding='utf-8') as f:
    f.write(education_data)

print("Created educationData.ts with 15 items")
print("All AICA courses set to 40 hours")
print("Only item #15 [AI응용 SW개발] has showOnlineTag: false")
