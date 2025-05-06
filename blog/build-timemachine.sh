#!/bin/bash

# Time Machine 빌드 및 배포 스크립트
echo "=== Time Machine 빌드 및 배포 스크립트 ==="
echo "이 스크립트는 Time Machine 인터페이스가 적용된 웹사이트를 빌드하고 배포합니다."

# 현재 디렉토리 확인
if [ "$(basename "$PWD")" != "Blog" ]; then
  echo "오류: 이 스크립트는 Blog 디렉토리에서 실행해야 합니다."
  echo "현재 디렉토리: $PWD"
  echo "다음 명령어를 실행하세요: cd ~/Desktop/gootec.github.io/Blog"
  exit 1
fi

# 노드 모듈 확인
if [ ! -d "node_modules" ]; then
  echo "노드 모듈이 설치되어 있지 않습니다. 설치를 시작합니다..."
  npm install
  if [ $? -ne 0 ]; then
    echo "오류: npm install 실패"
    exit 1
  fi
fi

# gh-pages 캐시 삭제
echo "gh-pages 캐시를 삭제합니다..."
rm -rf node_modules/.cache/gh-pages

# 프로젝트 빌드
echo "프로젝트 빌드를 시작합니다..."
npm run build
if [ $? -ne 0 ]; then
  echo "오류: 빌드 실패"
  exit 1
fi

# GitHub Pages 배포
echo "GitHub Pages에 배포합니다..."
npx gh-pages --no-history -d build
if [ $? -ne 0 ]; then
  echo "오류: 배포 실패"
  exit 1
fi

echo "=== 빌드 및 배포 완료 ==="
echo "배포된 웹사이트는 다음 URL에서 확인할 수 있습니다:"
echo "https://gootec.github.io/#/timemachine"
echo ""
echo "참고: 변경사항이 반영되는 데 몇 분 정도 소요될 수 있습니다."
echo "브라우저 캐시를 비우려면 Ctrl+F5 또는 Cmd+Shift+R을 눌러주세요."
