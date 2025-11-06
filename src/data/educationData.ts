export interface EducationItem {
  id: number;
  title: string;
  school: string;
  period: string;
  description: string;
  mainTopics: string[];
  link?: string;
  status?: string;
  showOnlineTag: boolean; // "온라인 교육" 표시 여부
}

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "[AI응용 SW개발] 인공지능 기반 서비스 플랫폼 개발자과정",
    school: "대한상공회의소 광주인력개발원",
    period: "2025년 5월 13일 ~ 2025년 11월 20일 (6개월, 900시간)",
    description: "실무에서 발생하는 데이터를 수집 및 가공하여 각 업무에 필요한 정보를 제공하는 기술을 갖추고 인공지능 플랫폼을 활용하여 응용프로그램을 개발하고 플랫폼 관리 기능 및 시각화를 구현할 수 있는 인재를 양성하는 기업 수요 반영한 project기반 실무 중심 교육입니다.",
    mainTopics: [
      "Python 프로그래밍 기초 및 고급 문법",
      "머신러닝 알고리즘 및 모델 학습 (scikit-learn, TensorFlow)",
      "딥러닝 아키텍처 설계 및 구현 (CNN, RNN, Transformer)",
      "빅데이터 처리 및 분석 (Pandas, NumPy, Spark)",
      "AI 솔루션 개발 및 배포 (Flask, FastAPI)",
      "음성인식 시스템 구현 (Speech Recognition)",
      "컴퓨터 비전 및 이미지 처리 (OpenCV, YOLO)",
      "실전 AI 프로젝트 개발 및 포트폴리오 구축"
    ],
    status: "진행중 (수료증 발급 예정)",
    showOnlineTag: false  // 이 과정만 온라인 교육 표시 안함
  },
  {
    id: 2,
    title: "생성형 AI 기반 실전 서비스 구현",
    school: "ICT이노베이션스퀘어",
    period: "2025.08.07 - 2025.09.04 (수료, 160시간)",
    description: "생성형 AI를 활용한 실무 프로젝트 구현 과정을 수료했습니다. 기존 비즈니스 데이터 분석 경험과 AI 기술을 결합하여 실제 서비스에 적용 가능한 생성형 AI 솔루션을 개발했습니다. RAG(Retrieval-Augmented Generation), Fine-tuning, 멀티모달 AI 등 최신 기술을 실제 비즈니스 시나리오에 적용했습니다.",
    mainTopics: [
      "대규모 언어 모델(LLM) 이해 및 활용 (GPT, Claude, Gemini)",
      "RAG(검색 증강 생성) 시스템 설계 및 구현",
      "Fine-tuning을 통한 도메인 특화 모델 개발",
      "멀티모달 AI (텍스트, 이미지, 음성 통합 처리)",
      "프롬프트 엔지니어링 및 최적화 기법",
      "LangChain을 활용한 AI 애플리케이션 개발",
      "벡터 데이터베이스 활용 (Pinecone, ChromaDB)",
      "실전 생성형 AI 서비스 구현 및 배포"
    ],
    link: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/certificates/[수료증]생성형 AI 실전 서비스 구현 과정.pdf",
    showOnlineTag: true
  },
  {
    id: 3,
    title: "NVIDIA X AICA Cluster GPU 활용 캠프 온라인 교육",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025.01.31 - 2025.12.20 (수료, 8시간)",
    description: "수료증 번호: AICA2025-0680호. NVIDIA GPU 및 AI 솔루션에 대한 전문 교육을 이수했습니다. H100 TensorCore를 활용한 학습 가속화, 분산 학습, GPU 프로파일링, Generative AI 플랫폼 NeMo, TensorRT-LLM을 통한 LLM 추론 최적화, NVIDIA AI Enterprise 및 NIM 활용 등 최신 GPU 기반 AI 기술을 습득했습니다.",
    mainTopics: [
      "NVIDIA GPU 및 데이터센터 플랫폼 아키텍처",
      "NVIDIA AI 솔루션 및 엔터프라이즈 환경",
      "H100 TensorCore를 활용한 딥러닝 학습 가속화",
      "분산 학습 기법을 통한 대규모 모델 학습 최적화",
      "GPU 프로파일링을 통한 병목 현상 개선",
      "Generative AI 학습 플랫폼 NeMo 활용",
      "TensorRT-LLM을 통한 LLM 추론 성능 최적화",
      "NVIDIA AI Enterprise 및 NIM 실무 적용"
    ],
    link: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/certificates/[수료증]NVIDIA X AICA Cluster GPU 활용 캠프 온라인 교육_이승필.pdf",
    showOnlineTag: true
  },
  {
    id: 4,
    title: "Microsoft Power BI 활용 기본 과정",
    school: "ICT이노베이션스퀘어",
    period: "2025.09.15 - 2025.09.19 (40시간)",
    description: "이전과 같지 않은 비즈니스 인텔리전스, MS Power BI 활용 기본 과정입니다. 엑셀을 넘어 데이터 시각화 도구를 실무에 활용하고, 보고서와 대시보드 등 직관적인 데이터 표현 기술을 습득했습니다.",
    mainTopics: [
      "Power BI Desktop을 활용한 데이터 모델링",
      "다양한 데이터 소스 연결 및 통합 (Excel, SQL, API)",
      "DAX(Data Analysis Expressions) 함수 활용",
      "인터랙티브 대시보드 및 시각화 보고서 작성",
      "Power Query를 통한 데이터 변환 및 정제",
      "실시간 데이터 업데이트 및 자동화 설정",
      "Microsoft Copilot을 활용한 AI 기반 데이터 분석",
      "실무 비즈니스 시나리오 기반 프로젝트 실습"
    ],
    link: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/certificates/[수료증]Microsoft Power BI 활용.pdf",
    showOnlineTag: true
  },
  {
    id: 5,
    title: "(심화) AI 응용 SW 직무역량 강화를 위한 풀스택 시스템 디자인",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025년 5월 13일 ~ 2025년 11월 20일 (6개월, 900시간)",
    description: "AI 기반 서비스 플랫폼 개발을 위한 풀스택 시스템 디자인 심화 과정입니다. 프론트엔드부터 백엔드, 데이터베이스, AI 모델 통합까지 전체 시스템 아키텍처를 설계하고 구현하는 고급 과정입니다.",
    mainTopics: [
      "풀스택 웹 애플리케이션 아키텍처 설계",
      "React.js 기반 프론트엔드 개발",
      "Node.js/Express.js 백엔드 API 개발",
      "MongoDB/PostgreSQL 데이터베이스 설계",
      "AI 모델 통합 및 배포 (Docker, Kubernetes)",
      "마이크로서비스 아키텍처 구현",
      "CI/CD 파이프라인 구축",
      "클라우드 플랫폼 활용 (AWS, Azure, GCP)",
      "실전 프로젝트 기반 포트폴리오 구축"
    ],
    link: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/certificates/[수료증](심화) AI 응용 SW 직무역량 강화를 위한 풀스택 시스템 디자인_이승필.pdf",
    showOnlineTag: true
  },
  {
    id: 6,
    title: "(심화) 심층 AI 프로그래밍을 위한 파이썬 라이브러리",
    school: "인공지능산업융합사업단 (AICA)",
    period: "2025년 5월 13일 ~ 2025년 11월 20일 (6개월, 900시간)",
    description: "AI 프로그래밍을 위한 파이썬 라이브러리 심화 과정입니다. 데이터 분석부터 시각화, 머신러닝까지 AI 개발에 필요한 모든 파이썬 라이브러리를 실무 수준으로 학습합니다.",
    mainTopics: [
      "인공지능 Python Ecosystem 기초",
      "NumPy 기반 고급 데이터 연산 및 배열 처리",
      "Pandas 기반 데이터 분석 및 처리 심화",
      "Matplotlib, Seaborn을 활용한 데이터 시각화",
      "Python 기반 시계열 데이터 처리",
      "데이터 전처리 및 정제 실습",
      "Scikit-learn을 활용한 머신러닝",
      "TensorFlow/PyTorch 딥러닝 프레임워크",
      "실전 AI 프로젝트 개발 및 최적화"
    ],
    link: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/certificates/[수료증](심화) 심층 AI 프로그래밍을 위한 파이썬 라이브러리    _이승필.pdf",
    showOnlineTag: true
  }
];
