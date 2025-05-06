# Time Machine 빌드 및 배포 가이드

Time Machine 인터페이스가 제대로 작동하도록 수정한 내용입니다. 변경사항이 주로 다음과 같습니다:

1. TimeMachine 컴포넌트가 전체 UI로 동작하도록 수정
   - 페이지 진입 시 Navbar와 Footer가 표시되지 않음
   - 화면 전체를 채우는 인터페이스

2. 타임라인 드래그 기능 개선
   - 위아래로 드래그하여 시간대 이동 가능
   - 타임라인 핸들과 연도 마커가 동기화되어 움직임

3. 배경 색상 변경
   - 검정색 배경에서 Navbar의 파란색(#2a63a1)을 반투명하게 적용
   - 우주 느낌이 나는 별 배경 대신 깔끔한 블루 톤 사용

## 빌드 및 배포 방법

현재 변경사항을 웹사이트에 적용하려면 아래 단계를 따르세요:

1. 프로젝트 폴더로 이동:
```bash
cd ~/Desktop/gootec.github.io/Blog
```

2. 필요한 패키지 설치 확인:
```bash
npm install
```

3. 프로젝트 빌드:
```bash
npm run build
```

4. GitHub Pages에 배포:
```bash
npx gh-pages --no-history -d build
```

주의: 위 명령어에 `--no-history` 옵션을 반드시 포함해야 변경사항이 올바르게 반영됩니다.

## 변경사항 확인하기

배포가 완료되면 아래 URL에서 확인할 수 있습니다:
```
https://gootec.github.io/#/timemachine
```

## 주요 파일 설명

1. `src/pages/TimeMachine.js`: Time Machine 컴포넌트 구현
   - 타임라인 드래그 관련 기능 추가
   - 이벤트 데이터 관리

2. `src/styles/TimeMachine.css`: Time Machine 스타일
   - 배경 색상 및 UI 스타일 정의
   - 타임라인 원근감 효과 구현

3. `src/App.js`: 라우팅 설정
   - TimeMachine 페이지에서는 Navbar와 Footer를 표시하지 않도록 설정

4. `src/styles/App.css`: 앱 전체 스타일
   - TimeMachine 모드 관련 스타일 추가

## 추가 커스터마이징

타임라인과 파일 시스템 UI의 색상, 크기 등을 변경하려면 `src/styles/TimeMachine.css` 파일을 수정하세요. 주요 색상은 `:root` 섹션에 변수로 정의되어 있습니다.

이벤트를 추가하거나 수정하려면 `src/pages/TimeMachine.js` 파일의 `timelineData` 배열을 수정하세요.

## 문제 해결

배포 후 변경사항이 보이지 않는 경우:
1. 브라우저 캐시를 강력 새로고침(Ctrl+F5 또는 Cmd+Shift+R)으로 비우세요.
2. 아래 명령어로 배포 캐시를 비우고 다시 시도해보세요:
```bash
rm -rf node_modules/.cache/gh-pages
npx gh-pages --no-history -d build
```