import os

# Projects 7-22 data
new_projects = """  {
    id: 7,
    title: "프로젝트 7: TypeScript 기반 AI 주식 교육 애플리케이션",
    period: "2025.08.12 - 2025.08.19 (8일 완성, 팀 프로젝트)",
    description: "초보 투자자를 위한 AI 기반 주식 교육 플랫폼입니다. React Native로 모바일 앱을 개발하고, TensorFlow.js를 활용한 AI 챗봇과 실시간 주가 분석 기능을 제공합니다.",
    tech: ["React Native", "TypeScript", "TensorFlow.js", "Expo", "AI Chatbot", "Stock Analysis"],
    links: {
      video: "https://youtu.be/bAtG4vSj7F0?si=8PslzMUW9iiNDCBb",
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
      video: "https://youtu.be/m6WIbJ5Wpfw?si=bfNQGJkDyiHmL8qN",
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
      video: "https://youtu.be/KfnJl1vINLY?si=XowgfoBPPNRU9RCp",
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
      video: "https://youtu.be/bsPcY_G4o2E?si=9aKGfhz7EfX8gZv8",
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
      video: "https://youtu.be/YnE8A8qNFTY?si=Pu8pN0bOWqxgj8JZ",
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
      video: "https://youtu.be/QdIu0rfZZjQ?si=8xWgfhfZcBWj7Bfp",
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
      video: "https://youtu.be/mWOkLfxrwoc?si=b6H8jUTk2FfgBmPV",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Raspberry Pi 홈케어 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Raspberry Pi 홈케어 완료보고서.html"
    }
  },
  {
    id: 15,
    title: "프로젝트 15: React 18 기반 CryptoVault Exchange 플랫폼",
    period: "2025.10.14 - 2025.10.18 (5일 완성)",
    description: "React 18과 Web3 기술을 활용한 암호화폐 거래소 플랫폼입니다. MetaMask 연동과 실시간 거래 기능을 제공합니다.",
    tech: ["React 18", "TypeScript", "Web3", "Ethers.js", "MetaMask", "Blockchain"],
    links: {
      video: "https://youtu.be/8sHH1PoKRmE?si=vKJqT8sP6Z7L0YhN",
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
      video: "https://youtu.be/OgI3hWlnrjw?si=p9TfZhDpYfKc2YbN",
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
      video: "https://youtu.be/T7nj0d6pqmQ?si=m8H0_kO3fB7YgZpN",
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
      video: "https://youtu.be/BNhZX8rKfwQ?si=pN6jL9H0_kO3fB7Y",
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
      video: "https://youtu.be/bAtG4vSj7F0?si=8PslzMUW9iiNDCBb",
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
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Winfrom프로젝트 1 ChatApp.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/Winfrom프로젝트 1 ChatApp 완료보고서.html"
    }
  },
  {
    id: 22,
    title: "프로젝트 22: C++, C#, Python 통합 TCP/IP 통신 기반 실시간 3D 객체 재구성 시스템",
    period: "2025.11.18 - 2025.11.22 (5일 완성, 팀 프로젝트)",
    description: "C++, C#, Python을 통합한 멀티 언어 3D 비전 시스템입니다. TCP/IP 네트워크 통신으로 실시간 3D 객체 재구성 및 시각화를 구현했습니다.",
    tech: ["C++17", "C# WinForm", "Python", "OpenCV", "TCP/IP", "3D Reconstruction", "Computer Vision"],
    links: {
      video: "https://youtu.be/ZN8hH1rKfwQ?si=bN6jL9H0_kO3fB7Y",
      plan: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/3D Vision 개발계획서.html",
      report: "https://port-c2m28r0vq-8910s-projects.vercel.app/documents/reports/3D Vision 완료보고서.html",
      additional: [
        { label: "GitHub Repository", url: "https://github.com/farandaway/3d-vision-system" }
      ]
    },
    achievement: "멀티 언어 통합 TCP/IP 통신 기반 실시간 3D 재구성 시스템 완성"
  },"""

# Read the current file
with open('C:/developer/port-website/portfolio-react/src/data/projectsData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the last closing bracket and semicolon
last_bracket_index = content.rfind('];')

if last_bracket_index != -1:
    # Insert new projects before the closing bracket
    # Remove the closing brace of the last project and add a comma
    before = content[:last_bracket_index].rstrip()
    if not before.endswith(','):
        before += ','

    new_content = before + '\n' + new_projects + '\n];\n'

    # Write the updated content
    with open('C:/developer/port-website/portfolio-react/src/data/projectsData.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("Successfully added projects 7-22 to projectsData.ts")
    print("Total projects: 22")
else:
    print("Error: Could not find closing bracket")
