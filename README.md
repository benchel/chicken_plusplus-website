# 치킨플러스플러스 (Chicken Plus Plus)

## 프로젝트 이름

**치킨플러스플러스 (C++)**

치킨 프랜차이즈 브랜드를 콘셉트로 제작한 반응형 웹사이트입니다. 브랜드 소개부터 메뉴 확인, 매장 검색, 이벤트, 창업 문의까지 사용자가 필요한 정보를 한 곳에서 확인할 수 있도록 구성했습니다.

## 프로젝트 소개

치킨플러스플러스의 브랜드 정체성과 소식을 전달하는 웹사이트입니다. PC와 모바일 환경에 대응하는 공통 헤더를 적용했으며, 페이지 목적에 맞는 콘텐츠와 이미지 중심의 UI를 제공합니다.

## 팀원 소개

| 이름 | 담당 |
| 조민지 | 공통 레이아웃, 메인 화면, 매장찾기, 이벤트, 로그인 |
| 안경찬 | 브랜드소개, 메뉴, 창업문의, 회원가입 |

## 프로젝트 기간

**2026.09.15 ~ 2026.09.17**

## 페이지 구성

| 페이지 | 파일 | 설명 |
| --- | --- | --- |
| 홈 | `index.html` | 메인 슬라이드, 신메뉴 및 추천 메뉴, 창업 안내 |
| C++ 소개 | `history.html` | 브랜드 미디어 콘텐츠 및 영상 갤러리 |
| 메뉴 | `menu.html` | 치킨 및 사이드 메뉴 목록, 메뉴 상세 팝업 |
| 매장 찾기 | `find_store.html` | 매장명·주소 검색 UI, 매장 정보 및 지도 |
| 이벤트 | `event.html` | 진행 중인 이벤트와 지난 이벤트 영역 |
| 창업 문의 | `information.html` | 창업 관련 안내 및 문의 폼 |
| 로그인 | `sign_in.html` | 로그인 입력 폼 |
| 회원가입 | `register.html` | 회원가입 입력 폼 및 약관 동의 |

## 주요 기능

- 공통 PC 헤더와 모바일 햄버거 메뉴
- 모바일 메뉴 오픈 시 딤드 레이어와 닫기 버튼 제공
- 메인 페이지 이벤트 배너 및 메뉴 소개
- 메뉴 카드와 `<dialog popover>` 기반 상세 메뉴 팝업
- 메뉴 이미지, 가격, 원산지 및 추천 사이드 메뉴 안내
- 브랜드 영상 썸네일 선택형 콘텐츠
- 매장명·주소 검색 UI와 매장 운영 서비스 정보 표시
- Google Maps 임베드 기반 지도 영역
- 진행 중·지난 이벤트를 구분하는 이벤트 UI
- 로그인·회원가입 및 창업 문의 입력 화면
- `alt` 속성을 활용한 이미지 대체 텍스트 제공

## 사용 기술

### Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Tailwind CSS `4.3.3`

### 개발 도구 및 패키지

- Node.js / npm
- `@tailwindcss/cli`
- `@vanchall/chicken_plusplus-token`

## 디자인 시스템

### 디자인 시안 
https://www.figma.com/design/fy0VeZJDSgLVbOSIPlKSqX/치킨플러스플러스?node-id=0-1&p=f&t=EU10ao7iNvcfudmH-0

`@vanchall/chicken_plusplus-token` 패키지에서 제공하는 디자인 토큰을 기반으로 색상, 간격, 모서리 반경, 타이포그래피를 관리합니다.

- **Primary**: 마젠타 계열 `#871d34`
- **Accent**: 머스터드 계열 `#ffb300`
- **Secondary**: 피전 레드 및 미디엄 블루 계열
- **Typography**: 기본 시스템 폰트, 로고용 `Myanmar Khyay`
- **Layout**: 최대 너비 `1000px`의 중앙 정렬 컨테이너
- **UI 원칙**: 치킨 브랜드 이미지를 강조하는 이미지 중심 구성과 명확한 메뉴 계층

## 반응형 기준

- **Desktop**: 뷰포트 너비 `1000px 초과`
  - 가로형 PC 헤더와 전체 내비게이션 표시
  - 콘텐츠 최대 너비 `1000px` 적용
- **Mobile**: 뷰포트 너비 `1000px 미만`
  - 모바일 헤더와 접이식 햄버거 메뉴 표시
  - 메뉴 오픈 시 우측 슬라이드 패널과 딤드 레이어 표시
- **Small Mobile**: 뷰포트 너비 `600px 이하`
  - 영상 썸네일을 가로 스크롤형 콘텐츠로 표시
  - 썸네일을 화면 너비에 맞춰 표시

## 폴더 구조

```text
chicken_plusplus-website/
├── assets/
│   └── image/              # 배너, 메뉴, 이벤트, 브랜드 이미지
├── js/
│   └── header_ctrl.js      # 모바일 헤더 메뉴 제어
├── style/
│   ├── common/
│   │   ├── layout.css      # 공통 레이아웃 및 반응형 헤더
│   │   └── reset.css       # 브라우저 기본 스타일 초기화
│   ├── event.css           # 이벤트 페이지 스타일
│   ├── find_store.css      # 매장 찾기 페이지 스타일
│   ├── history.css         # 브랜드 소개 페이지 스타일
│   ├── information.css    # 창업 문의 페이지 스타일
│   ├── input.css           # Tailwind 입력 스타일 소스
│   ├── main.css            # 홈 페이지 스타일
│   ├── menu.css            # 메뉴 페이지 스타일
│   ├── output.css          # 생성된 Tailwind CSS
│   ├── register.css        # 회원가입 페이지 스타일
│   └── sign_in.css         # 로그인 페이지 스타일
├── event.html
├── find_store.html
├── history.html
├── index.html
├── information.html
├── menu.html
├── register.html
├── sign_in.html
├── package.json
└── package-lock.json
```

## 실행 방법

```bash
npm install
```

의존성 설치 후 `index.html`을 브라우저에서 열거나, VS Code의 Live Server와 같은 정적 파일 서버를 사용해 실행할 수 있습니다.

## Git Convention

branch 이름 = 작업파트 

(예) event 이벤트 페이지 작업할 때만 사용 
작업이 끝나면 삭제

## 배포 주소
https://benchel.github.io/chicken_plusplus-website/

