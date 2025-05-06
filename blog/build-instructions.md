# Time Machine 빌드 및 배포 안내

Time Machine 컴포넌트가 적용된 웹사이트를 빌드하고 배포하려면 다음 단계를 따르세요:

## 빌드 지침

1. 프로젝트 디렉토리로 이동합니다:
```bash
cd ~/Desktop/gootec.github.io/Blog
```

2. 필요한 패키지가 모두 설치되어 있는지 확인합니다:
```bash
npm install
```

3. 프로젝트를 빌드합니다:
```bash
npm run build
```

4. Font Awesome 아이콘을 사용하기 위해 다음 스크립트를 `public/index.html` 파일의 `<head>` 태그 안에 추가했는지 확인하세요:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
```

## GitHub Pages 배포

5. 프로젝트를 GitHub Pages에 배포합니다:
```bash
npx gh-pages -d build
```

만약 `--no-history` 옵션 없이 배포 시 변경사항이 반영되지 않는다면, 다음 명령어를 사용하세요:
```bash
npx gh-pages --no-history -d build
```

또는 캐시를 완전히 비우고 배포:
```bash
rm -rf node_modules/.cache/gh-pages
npx gh-pages -d build
```

## 변경사항 확인

배포 후 몇 분 기다리면 `https://gootec.github.io/timemachine` 주소에서 변경사항을 확인할 수 있습니다.

## 문제 해결

만약 배포 후 변경사항이 보이지 않는다면:
1. 브라우저 캐시를 비우고 새로고침해보세요.
2. `gh-pages` 브랜치를 GitHub에서 직접 확인하여 변경사항이 제대로 푸시되었는지 확인하세요.
3. 필요시 로컬 빌드 폴더를 완전히 삭제한 후 다시 빌드하세요:
```bash
rm -rf build
npm run build
npx gh-pages -d build
```