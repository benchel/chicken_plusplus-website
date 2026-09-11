# @vanchall/chicken_plusplus-token

Design tokens for moment_token: CSS 변수, SCSS 변수 및 Tailwind v4 테마를 제공하는 패키지입니다.

버전: 0.0.1

설명
---
이 패키지는 디자인 시스템에서 사용할 수 있는 토큰(variables, SCSS partials, Tailwind theme)을 빌드된 형태로 제공합니다. 빌드 출력은 `dist/` 아래에 정리되어 있으며 원본 토큰은 `tokens/`에 있습니다.

설치
---
```bash
npm install @vanchall/chicken_plusplus-token
```

빠른 사용법
---
- CSS (브라우저 또는 번들러에서 직접 import):

```js
// 번들러 환경 (예: webpack, Vite)
import '@vanchall/chicken_plusplus-token/css'; // -> dist/css/variables.css
```

또는 HTML에서 직접 사용하려면 빌드 결과물을 복사해 공개 경로에 두고 링크합니다:

```html
<link rel="stylesheet" href="/path/to/variables.css">
```

- SCSS (프로젝트의 SCSS 빌드에 포함):

```scss
@use "@vanchall/chicken_plusplus-token/scss"; // -> dist/scss/_variables.scss
// 또는
@import "@vanchall/chicken_plusplus-token/scss";
```

- Tailwind 테마 통합:

패키지에서 제공하는 Tailwind 테마를 프로젝트에 통합하려면 `tailwind.config.js`에서 불러오거나, 제공된 테마 파일을 참고하여 `theme.extend`에 병합하세요.

```js
// 예: tailwind.config.js
const tokenTheme = require('@vanchall/chicken_plusplus-token/tailwind');

module.exports = {
  // ...
  theme: {
    extend: tokenTheme,
  },
};
```

- 개별 토큰 파일 접근:

패키지는 `tokens/*` 경로를 exports로 노출합니다. 예를 들어 원시 토큰 파일을 가져와서 직접 처리할 수 있습니다.

```js
import tokens from '@vanchall/chicken_plusplus-token/tokens/example.json';
```

패키지 구조 (주요 항목)
---
- dist/css/variables.css — 빌드된 CSS 변수
- dist/scss/_variables.scss — SCSS 변수 partial
- dist/tailwind/theme.css — Tailwind 테마 (사용 전 내용 확인)
- tokens/ — 원시 토큰 JSON 등
- build-tokens.mjs — 토큰을 빌드하는 스크립트

빌드 및 배포
---
패키지의 package.json에 `prepublishOnly`가 설정되어 있어 `npm publish` 전에 자동으로 빌드됩니다:

```bash
npm run build        # build-tokens.mjs 실행, dist/ 생성
npm version patch     # (권장) 버전 업데이트
git add package.json && git commit -m "chore: bump version" && git push
npm publish --access public
```

권장 절차
1. 코드/토큰 수정
2. `npm run build`로 빌드 결과 확인
3. package.json 버전 업데이트 (`npm version <patch|minor|major>` 권장)
4. 커밋/태그 푸시
5. `npm publish --access public` (publishConfig에 access: public 설정되어 있음)

참고: 퍼블리시 전에 npm에 로그인되어 있어야 합니다: `npm login`

개발
---
개발 의존성으로 `style-dictionary`가 사용됩니다. 토큰 빌드 스크립트(`build-tokens.mjs`)가 이 도구를 사용합니다.

```bash
# 의존성 설치 (로컬에서 개발하려면)
npm install
npm run build
```

문제 보고 및 기여
---
버그 리포트와 기여는 GitHub 리포지토리에서 받습니다:
- 리포지토리: https://github.com/benchel/chicken_plusplus-token
- 이슈: https://github.com/benchel/chicken_plusplus-token/issues

라이선스
---
MIT

저자
---
benchel

비고
---
- 패키지의 exports에 따라 경로별 import가 가능하도록 설계되어 있습니다 (css, scss, tailwind, tokens/*). 사용 전에 원하는 출력물이 dist/에 있는지 확인하세요.
- README의 사용 예시는 일반적인 통합 방식 예시입니다. 프로젝트 설정(빌드 툴, SCSS include paths, Tailwind 버전 등)에 따라 약간의 수정이 필요할 수 있습니다.
