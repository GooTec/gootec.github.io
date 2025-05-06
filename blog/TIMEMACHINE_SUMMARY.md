# Time Machine 인터페이스 개선 요약

## 개선된 주요 기능

1. **전체 UI 변경**
   - TimeMachine이 전체 UI가 되도록 수정 (Navbar와 Footer 제거)
   - 전체 화면을 차지하는 깔끔한 인터페이스 구현

2. **타임라인 드래그 기능 개선**
   - 위아래로 드래그하여 시간대를 자연스럽게 이동 가능
   - 타임라인 핸들과 연도 마커가 정확히 함께 움직이도록 수정
   - 드래그 시작 및 종료 관련 버그 수정

3. **배경 디자인 변경**
   - 검정색 배경 → Navbar의 파란색(#2a63a1)을 반투명하게 적용
   - 별 배경 대신 깔끔한 단색 배경으로 변경

4. **카테고리 및 파일 시스템 개선**
   - 카테고리 선택 시 시각적 피드백 강화
   - 파일 아이콘 및 모달 디자인 개선

## 사용 방법

1. **타임라인 네비게이션**
   - 오른쪽 타임라인의 하얀색 동그라미를 위아래로 드래그하여 연도 이동
   - 연도 마커를 직접 클릭하여 특정 연도로 이동 가능

2. **카테고리 필터링**
   - 좌측 사이드바의 카테고리를 클릭하여 해당 카테고리의 이벤트만 표시
   - 같은 카테고리를 다시 클릭하면 필터링 해제

3. **파일 상세 보기**
   - 파일을 클릭하면 모달창이 열리며 상세 내용 표시
   - 모달창 우측 상단의 X 버튼으로 닫기

## 배포 방법

1. 제공된 빌드 스크립트를 사용하여 간편하게 배포:
```bash
cd ~/Desktop/gootec.github.io/Blog
chmod +x build-timemachine.sh
./build-timemachine.sh
```

2. 또는 수동으로 다음 명령어 실행:
```bash
cd ~/Desktop/gootec.github.io/Blog
npm run build
npx gh-pages --no-history -d build
```

배포가 완료되면 `https://gootec.github.io/#/timemachine`에서 확인할 수 있습니다.

## 추가 이벤트 등록하기

`src/pages/TimeMachine.js` 파일의 `timelineData` 배열에 새 이벤트를 추가할 수 있습니다:

```javascript
{
  id: '고유ID',
  title: '이벤트 제목',
  category: '카테고리ID', // 'academic', 'books', 'activity', 'development' 중 선택
  date: 'YYYY-MM-DD',
  year: YYYY, // 연도 숫자
  content: `
    <img src="${process.env.PUBLIC_URL}/images/이미지파일명.jpg" alt="대체텍스트" />
    <p>이벤트 상세 내용...</p>
  `
}
```

이미지 파일은 `public/images/` 폴더에 추가해야 합니다.

## 주요 수정 파일

1. `src/pages/TimeMachine.js` - 타임라인 기능 및 UI 컴포넌트
2. `src/styles/TimeMachine.css` - Time Machine 스타일
3. `src/App.js` - 전체 UI 설정 변경
4. `src/styles/App.css` - Time Machine 모드 설정

## 참고 사항

추가 도움이 필요하면 `TIME_MACHINE_README.md` 및 `TIME_MACHINE_BUILD.md` 파일을 참조하세요.