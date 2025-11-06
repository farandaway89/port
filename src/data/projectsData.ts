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
      video: "https://youtu.be/DPqXODA4eCw?si=RZ9PdZhsnh3p9O_9",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Baskin Robbins 31 키오스크 완료보고서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Baskin Robbins 31 키오스크 완료보고서.html"
    }
  },
  {
    id: 2,
    title: "프로젝트 2: C언어 콘솔 갑오징어게임",
    period: "2025.06.23 - 2025.06.27 (5일 완성, 팀 프로젝트)",
    description: "C언어 기본 문법을 활용한 4라운드 콘솔 게임을 팀원 4명과 협력하여 개발했습니다. 무궁화꽃이 피었습니다, 뽑기, 비석치기, 징검다리 게임을 구현했습니다.",
    tech: ["C Language", "Console Game", "Team Project", "Game Logic"],
    links: {
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
      video: "https://youtu.be/7NaLZSIAMAQ?si=W4K1_-yYKoJ7OJJA",
      demo: "https://carbon-exchange-tau.vercel.app/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/탄소투자_개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/탄소투자_플랫폼_완료보고서.html"
    },
    achievement: "대화형 학습 센터 및 전문 동영상 강의 시스템 추가! AI 아바타 강사와 함께하는 탄소 거래 실습 시뮬레이터가 완전히 구현되었습니다."
  },
  {
    id: 5,
    title: "프로젝트 5: C# & MySQL 기반 실시간 채팅 시스템",
    period: "2025.07.14 - 2025.07.21 (5일 완성)",
    description: "C# WinForm을 활용한 TCP 기반 다중 사용자 실시간 채팅 애플리케이션입니다. 네트워크 프로그래밍, 비동기/멀티스레딩 등 C# 핵심 기술을 통합적으로 적용했습니다.",
    tech: ["C# WinForm", "TCP/IP", "비동기 프로그래밍", "멀티스레딩", "네트워크 프로그래밍"],
    links: {
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
      demo: "https://farandaway89.github.io/image-prompt-creator/",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Image Prompt Creator 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Image Prompt Creator 완료보고서.html"
    }
  }
];
