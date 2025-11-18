export interface ProjectItem {
  id: number;
  title: string;
  period: string;
  description: string;
  tech: string[];
  links: {
    video?: string;
    demo?: string;
    plan?: string;
    report?: string;
    additional?: { label: string; url: string }[];
  };
  achievement?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "프로젝트 1: Python 기반 Baskin Robbins 31 키오스크 시스템",
    period: "2025.05.29 - 2025.06.07 (10일 완성, 팀 프로젝트)",
    description: "Python 기반 셀프 키오스크 시스템을 팀장으로서 개발을 이끈 프로젝트입니다. 실제 Baskin Robbins 매장 환경을 완벽 재현하여 메뉴 선택부터 결제까지 전체 주문 프로세스를 구현했습니다.",
    tech: ["Python", "Team Leadership", "POS System", "GUI Programming"],
    links: {
      video: "https://youtu.be/DPqXODA4eCw",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Baskin Robbins 31 키오스크 완료보고서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Baskin Robbins 31 키오스크 완료보고서.html"
    }
  },
  {
    id: 2,
    title: "프로젝트 2: C언어기반 콘솔 게임 오징어게임(비석치기)",
    period: "2025.06.23 - 2025.06.27 (5일 완성, 팀 프로젝트)",
    description: "C언어 기본 문법을 활용한 4라운드 콘솔 게임을 팀원 4명과 협력하여 개발했습니다. 무궁화꽃이 피었습니다, 뽑기, 비석치기, 징검다리 게임을 구현했습니다.",
    tech: ["C Language", "Console Game", "Team Project", "Game Logic"],
    links: {
      video: "https://youtu.be/tR3m8eoZdU4",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/C언어 콘솔 갑오징어게임 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/C언어 콘솔 갑오징어게임 완료보고서.html"
    }
  },
  {
    id: 3,
    title: "프로젝트 3: JavaScript 기반 Smart Booking Platform",
    period: "2025.07.01 - 2025.07.05 (5일 완성)",
    description: "다양한 서비스 예약을 통합 관리하는 스마트 부킹 플랫폼입니다. 음식점, 병원, 미용실, 피트니스 센터 등 4개 주요 카테고리의 예약을 한 곳에서 관리할 수 있습니다.",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"],
    links: {
      demo: "https://huggingface.co/spaces/farandaway/kooking-app-streamlit",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Kooking App 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Kooking App 완료보고서.html"
    }
  },
  {
    id: 4,
    title: "프로젝트 4: TypeScript 기반 탄소배출권 거래소 플랫폼",
    period: "2025.07.05 - 2025.07.09 (5일 완성)",
    description: "블록체인 기술을 활용한 탄소배출권 거래 플랫폼 및 ESG 관리 시스템입니다. Next.js 15 + TypeScript + Web3 기술로 구축된 완전한 금융 거래 플랫폼입니다.",
    tech: ["Next.js 15", "TypeScript", "Web3", "Ethers.js", "MetaMask", "Tailwind CSS", "ESG Management", "Blockchain"],
    links: {
      video: "https://youtu.be/7NaLZSIAMAQ",
      demo: "https://carbon-exchange-tau.vercel.app/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/탄소투자_개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/탄소투자_플랫폼_완료보고서.html"
    }
  },
  {
    id: 5,
    title: "프로젝트 5: C언어 & MySQL 기반 실시간 채팅 시스템",
    period: "2025.07.14 - 2025.07.21 (5일 완성)",
    description: "C# WinForm을 활용한 TCP 기반 다중 사용자 실시간 채팅 애플리케이션입니다. 네트워크 프로그래밍, 비동기/멀티스레딩 등 C# 핵심 기술을 통합적으로 적용했습니다.",
    tech: ["C# WinForm", "TCP/IP", "비동기 프로그래밍", "멀티스레딩", "네트워크 프로그래밍"],
    links: {
      video: "https://youtube.com/shorts/oa_bDUQyGWc",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Winfrom프로젝트 1 ChatApp.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Winfrom프로젝트 1 ChatApp 완료보고서.html"
    }
  },
  {
    id: 6,
    title: "프로젝트 6: Gradio 4.0+ 기반 AI 프롬프트 이미지 생성 플랫폼",
    period: "2025.08.01 - 2025.08.05 (5일 완성)",
    description: "AI 이미지 생성을 위한 창의적이고 전문적인 프롬프트를 자동으로 생성하는 Gradio 웹 애플리케이션입니다. 40+ 옵션 선택으로 수천 가지의 고유한 프롬프트를 생성할 수 있습니다.",
    tech: ["Python", "Gradio 4.0+", "AI Prompt Engineering", "Hugging Face Spaces"],
    links: {
      video: "https://youtu.be/DPqXODA4eCw",
      demo: "https://farandaway89.github.io/image-prompt-creator/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Image Prompt Creator 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Image Prompt Creator 완료보고서.html"
    }
  },
  {
    id: 7,
    title: "프로젝트 7: TypeScript 기반 AI 주식 교육 애플리케이션",
    period: "2025.08.12 - 2025.08.19 (8일 완성, 팀 프로젝트)",
    description: "초보 투자자를 위한 AI 기반 주식 교육 플랫폼입니다. React Native로 모바일 앱을 개발하고, TensorFlow.js를 활용한 AI 챗봇과 실시간 주가 분석 기능을 제공합니다.",
    tech: ["React Native", "TypeScript", "TensorFlow.js", "Expo", "AI Chatbot", "Stock Analysis"],
    links: {
      demo: "https://huggingface.co/spaces/farandaway/stock-education-ai",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/AI 주식교육 게임 앱 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/AI 주식교육 게임 앱 완료보고서.html"
    }
  },
  {
    id: 8,
    title: "프로젝트 8: Qt/C++/MySQL 기반 스마트 인덱스 검색",
    period: "2025.08.25 - 2025.08.29 (5일 완성)",
    description: "Qt Framework와 C++17을 활용한 고성능 데이터베이스 검색 시스템입니다. MySQL과의 통합을 통해 실시간 인덱스 검색 기능을 구현했습니다.",
    tech: ["Qt Framework", "C++17", "MySQL", "Database Optimization", "Cross-Platform"],
    links: {
      video: "https://youtu.be/Ajx2IRKebbM",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Qt 스마트인덱스 검색 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Qt 스마트인덱스 검색 완료보고서.html"
    }
  },
  {
    id: 9,
    title: "프로젝트 9: Qt/C++/MySQL 기반 농업용 SCADA 모니터링 시스템",
    period: "2025.09.02 - 2025.09.06 (5일 완성)",
    description: "Qt/C++로 구현한 실시간 농업 환경 모니터링 SCADA 시스템입니다. 온도, 습도, 토양 수분 등 센서 데이터를 실시간으로 수집하고 시각화합니다.",
    tech: ["Qt Framework", "C++17", "MySQL", "SCADA", "Real-time Monitoring", "Sensor Integration"],
    links: {
      video: "https://youtu.be/XLKzxxAbVeU",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Qt SCADA 농업용 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Qt SCADA 농업용 완료보고서.html"
    }
  },
  {
    id: 10,
    title: "프로젝트 10: Qt/C++ 기반 산업용 수처리 시설 SCADA 시스템",
    period: "2025.09.09 - 2025.09.13 (5일 완성)",
    description: "산업용 수처리 시설을 위한 Qt/C++ 기반 SCADA 제어 시스템입니다. 실시간 프로세스 제어와 알람 관리 기능을 포함합니다.",
    tech: ["Qt Framework", "C++20", "SCADA Systems", "Real-time Control", "Industrial Automation"],
    links: {
      video: "https://youtu.be/oR_Utgg1bro",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Qt SCADA 수처리 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Qt SCADA 수처리 완료보고서.html"
    }
  },
  {
    id: 11,
    title: "프로젝트 11: Qt/C++/MySQL 기반 지능형 교통관제 시스템",
    period: "2025.09.16 - 2025.09.20 (5일 완성)",
    description: "Qt/C++로 개발한 실시간 교통 흐름 분석 및 제어 시스템입니다. MySQL 데이터베이스와 통합하여 교통 데이터를 관리하고 최적화합니다.",
    tech: ["Qt Framework", "C++17", "MySQL", "Traffic Control", "Real-time Analysis", "System Integration"],
    links: {
      video: "https://youtu.be/rN32KwaTzN8",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Qt SCADA 교통관제 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Qt SCADA 교통관제 완료보고서.html"
    }
  },
  {
    id: 12,
    title: "프로젝트 12: React 18 기반 학원비 관리 시스템",
    period: "2025.09.23 - 2025.09.27 (5일 완성)",
    description: "React 18과 TypeScript로 구현한 학원 운영 관리 플랫폼입니다. 학생 등록, 출석 관리, 수강료 결제 등 학원 운영에 필요한 모든 기능을 제공합니다.",
    tech: ["React 18", "TypeScript", "Vite", "Responsive Design", "Payment System"],
    links: {
      demo: "https://react-project-1-mu.vercel.app/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/React 학원관리 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/React 학원관리 완료보고서.html"
    }
  },
  {
    id: 13,
    title: "프로젝트 13: Qt/C++/MySQL 기반 Arduino UNO R3 스마트팜 센서 시스템",
    period: "2025.09.30 - 2025.10.04 (5일 완성)",
    description: "Arduino UNO R3와 Qt/C++ 통합 스마트팜 모니터링 시스템입니다. 센서 데이터를 실시간으로 수집하고 MySQL 데이터베이스에 저장합니다.",
    tech: ["Qt Framework", "C++17", "MySQL", "Arduino", "Sensor Integration", "Serial Communication"],
    links: {
      video: "https://youtu.be/WmiZW__tQ8s",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Arduino 스마트팜 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Arduino 스마트팜 완료보고서.html"
    }
  },
  {
    id: 14,
    title: "프로젝트 14: Raspberry Pi 3B + Arduino 기반 VigilEdge HomeCare",
    period: "2025.10.07 - 2025.10.11 (5일 완성)",
    description: "Raspberry Pi 3B와 Arduino를 결합한 IoT 홈케어 모니터링 시스템입니다. Python과 C++를 사용하여 센서 데이터를 수집하고 분석합니다.",
    tech: ["Raspberry Pi", "Arduino", "Python", "C++", "IoT", "Embedded Systems"],
    links: {
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Raspberry Pi 홈케어 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Raspberry Pi 홈케어 완료보고서.html",
      additional: [
        { label: "사진보기 1", url: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/images/483_20250917150940.webp" },
        { label: "사진보기 2", url: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/images/c119_emergency_system.png" }
      ]
    }
  },
  {
    id: 15,
    title: "프로젝트 15: React 18 기반 CryptoVault Exchange 플랫폼",
    period: "2025.10.14 - 2025.10.18 (5일 완성)",
    description: "React 18과 Web3 기술을 활용한 암호화폐 거래소 플랫폼입니다. MetaMask 연동과 실시간 거래 기능을 제공합니다.",
    tech: ["React 18", "TypeScript", "Web3", "Ethers.js", "MetaMask", "Blockchain"],
    links: {
      video: "https://youtu.be/5N5YyOQQT9A",
      demo: "https://react-project-2-zeta.vercel.app/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/React CryptoVault 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/React CryptoVault 완료보고서.html"
    }
  },
  {
    id: 16,
    title: "프로젝트 16: JavaScript 기반 My Own Translator AI",
    period: "2025.10.21 - 2025.10.25 (5일 완성)",
    description: "순수 JavaScript와 HTML5로 구현한 AI 번역기 애플리케이션입니다. 다국어 번역 기능과 음성 인식 기능을 제공합니다.",
    tech: ["JavaScript ES6+", "HTML5", "CSS3", "AI Translation", "Speech Recognition"],
    links: {
      demo: "https://farandaway89.github.io/my-own-translator-ai/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Translator AI 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Translator AI 완료보고서.html"
    }
  },
  {
    id: 17,
    title: "프로젝트 17: React 18 기반 EEG 뇌파 인식 AI 플랫폼",
    period: "2025.10.28 - 2025.11.01 (5일 완성)",
    description: "React 18과 TensorFlow.js를 활용한 뇌파 데이터 분석 AI 플랫폼입니다. 실시간 EEG 신호 처리 및 시각화 기능을 제공합니다.",
    tech: ["React 18", "TypeScript", "TensorFlow.js", "EEG Analysis", "Data Visualization"],
    links: {
      demo: "https://react-project-3-theta.vercel.app/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/React EEG AI 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/React EEG AI 완료보고서.html"
    }
  },
  {
    id: 18,
    title: "프로젝트 18: Microsoft HoloLens & Meta Mixed Reality 기반 원격 3D 협업 회의 플랫폼",
    period: "2025.11.04 - 2025.11.08 (5일 완성)",
    description: "HoloLens와 Meta Quest를 활용한 혼합현실 협업 플랫폼입니다. Three.js, WebXR, WebRTC 기술로 실시간 3D 공간 공유 및 음성/영상 통신을 구현했습니다.",
    tech: ["Three.js", "WebXR", "WebRTC", "HoloLens", "Mixed Reality", "Real-time Collaboration"],
    links: {
      demo: "https://3d-meeting-platform.vercel.app/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/XR 협업플랫폼 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/XR 협업플랫폼 완료보고서.html"
    },
    achievement: "국내 최초 HoloLens와 Meta Quest 크로스 플랫폼 혼합현실 협업 시스템 구현"
  },
  {
    id: 19,
    title: "프로젝트 19: React 기반 AI 주식교육 게임 앱",
    period: "2025.08.12 - 2025.08.19 (8일 완성, 팀 프로젝트)",
    description: "React Native와 TensorFlow.js를 활용한 모바일 주식 교육 게임입니다. AI 챗봇이 실시간으로 투자 조언을 제공합니다.",
    tech: ["React Native", "TypeScript", "TensorFlow.js", "Expo", "Mobile Development"],
    links: {
      video: "https://youtube.com/shorts/AYywI_RyKtc",
      demo: "https://huggingface.co/spaces/farandaway/stock-education-ai"
    }
  },
  {
    id: 20,
    title: "프로젝트 20: React 기반 JLPT 일본어 학습 앱",
    period: "2025.11.11 - 2025.11.15 (5일 완성)",
    description: "React Native로 개발한 JLPT(일본어능력시험) 학습 애플리케이션입니다. N5부터 N1까지 단계별 학습 콘텐츠를 제공합니다.",
    tech: ["React Native", "TypeScript", "Expo", "Mobile Development", "Education Platform"],
    links: {
      video: "https://youtube.com/shorts/xyKe7bmOYKY",
      demo: "https://jlpt-learning-app.vercel.app/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/JLPT 학습앱 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/JLPT 학습앱 완료보고서.html"
    }
  },
  {
    id: 21,
    title: "프로젝트 21: C# WinForm 기반 실시간 채팅 & FileDownloader",
    period: "2025.07.14 - 2025.07.21 (8일 완성)",
    description: "C# WinForm을 활용한 TCP/IP 기반 실시간 채팅 및 파일 다운로드 시스템입니다. 비동기 프로그래밍과 멀티스레딩을 적용했습니다.",
    tech: ["C# WinForm", "TCP/IP", "Socket.io", "비동기 프로그래밍", "멀티스레딩"],
    links: {
      video: "https://youtu.be/gpe-BARmPFU",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Winfrom프로젝트 1 ChatApp.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Winfrom프로젝트 1 ChatApp 완료보고서.html"
    }
  },
  {
    id: 22,
    title: "프로젝트 22: C++, C#, Python 통합 TCP/IP 통신 기반 MFC실시간 3D 객체 재구성 시스템",
    period: "2025.11.18 - 2025.11.22 (5일 완성, 팀 프로젝트)",
    description: "C++, C#, Python을 통합한 멀티 언어 3D 비전 시스템입니다. TCP/IP 네트워크 통신으로 실시간 3D 객체 재구성 및 시각화를 구현했습니다.",
    tech: ["C++17", "C# WinForm", "Python", "OpenCV", "TCP/IP", "3D Reconstruction", "Computer Vision"],
    links: {
      video: "https://youtu.be/7h0U3iGvWDU",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/3D Vision 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/3D Vision 완료보고서.html",
      additional: [
        { label: "GitHub Repository", url: "https://github.com/farandaway/3d-vision-system" }
      ]
    },
    achievement: "멀티 언어 통합 TCP/IP 통신 기반 실시간 3D 재구성 시스템 완성"
  },
  {
    id: 23,
    title: "프로젝트 23: C#, WPF, MongoDB 기반 스마트 빌딩 에너지 모니터링 솔루션",
    period: "2025.11.10 - 2025.11.17 (8일 완성)",
    description: "실시간 센서 데이터 수집 및 시각화를 통한 스마트 빌딩 에너지 관리 시스템입니다. 30개 센서의 데이터를 MongoDB에 저장하고, 2D 차트(OxyPlot)와 3D 시각화(HelixToolkit)를 통해 직관적인 모니터링 환경을 제공합니다.",
    tech: ["C# 9.0", "WPF", ".NET 9.0", "MongoDB", "OxyPlot", "HelixToolkit.Wpf", "MVVM Pattern", "Real-time Visualization"],
    links: {
      video: "https://youtu.be/CYMzWPJ222g",
      plan: "https://port-ashy-iota.vercel.app/documents/reports/SmartBuildingMonitor_개발계획서.html",
      report: "https://port-ashy-iota.vercel.app/documents/reports/SmartBuildingMonitor_완료보고서.html"
    },
    achievement: "MeshBuilder 최적화로 Draw Call 90% 감소, 240 FPS 실시간 렌더링 달성"
  },
];
