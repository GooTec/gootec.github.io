# Mac Time Machine 인터페이스 구현 가이드

이 문서는 Mac의 Time Machine UI를 모방한 개인 포트폴리오/타임라인 웹사이트의 구현 가이드입니다.

## 구현된 기능

### 1. Time Machine 타임라인
- 오른쪽에 위치한 하얀색 타임라인 바를 통해 연도별로 이동할 수 있습니다.
- 타임라인은 Mac의 Time Machine처럼 원근감 효과가 적용되어 있어, 현재 연도가 가장 크게 보이고 멀어질수록 작아집니다.
- 타임라인 바 위의 동그라미를 드래그하여 시간을 이동할 수 있습니다.

### 2. 파일 시스템 창
- 중앙에 위치한 Mac 스타일의 창에서 선택한 연도의 이벤트를 파일 형태로 보여줍니다.
- 창의 상단에는 Mac 스타일의 창 컨트롤(빨강, 노랑, 초록 버튼)이 있습니다.
- 파일을 클릭하면 상세 내용을 볼 수 있는 모달 창이 열립니다.

### 3. 카테고리 시스템
- 왼쪽 사이드바에 4가지 카테고리가 표시됩니다:
  - Academic: 학업 관련 이벤트 (파란색)
  - Books: 독서 관련 이벤트 (주황색)
  - Activity: 활동 관련 이벤트 (녹색)
  - Software Development: 개발 관련 이벤트 (빨간색)
- 각 카테고리는 색상으로 구분되며, 클릭하여 필터링할 수 있습니다.

### 4. 예제 이벤트
현재 구현된 예제 이벤트:
- 2011년 한동대학교 입학 (Academic)
- 2024년 이방인 - 알베르 카뮈 (Books)
- 2024년 화성시 경기 가족 마라톤 (Activity)

## 실행 방법

1. 프로젝트 디렉토리로 이동:
```bash
cd ~/Desktop/gootec.github.io/Blog
```

2. 개발 서버 실행:
```bash
npm start
```

3. 브라우저에서 `http://localhost:3000/timemachine` 접속

## 배포 방법

배포 방법은 `build-instructions.md` 파일을 참조하세요.

## 이벤트 추가하기

새로운 이벤트를 추가하려면 `src/pages/TimeMachine.js` 파일의 `timelineData` 배열에 새 객체를 추가하세요:

```javascript
{
  id: '고유ID',
  title: '이벤트 제목',
  category: '카테고리ID', // 'academic', 'books', 'activity', 'development' 중 하나
  date: 'YYYY-MM-DD',
  year: YYYY, // 연도 숫자
  content: `
    <img src="${process.env.PUBLIC_URL}/images/이미지파일명.jpg" alt="대체텍스트" />
    <p>이벤트 상세 내용...</p>
  `
}
```

이미지 파일은 `public/images/` 폴더에 추가하세요.

## 커스터마이징

- 카테고리 색상: `src/styles/TimeMachine.css` 파일의 `:root` 섹션에서 변경 가능
- 배경: 현재 우주와 같은 스타일의 배경이 CSS로 구현되어 있으며, 같은 CSS 파일에서 수정 가능
- 타임라인 효과: 원근감 효과는 CSS의 `transform` 속성을 통해 구현되었으며, 필요시 조정 가능

## 주요 컴포넌트 구조

- **타임라인**: `.timeline` 요소에 구현된 연도 선택기
- **파일 시스템 창**: `.file-system-window`에 구현된 Mac 스타일 창
- **카테고리 사이드바**: `.window-sidebar`에 구현된 카테고리 목록
- **파일 목록**: `.files-container`에 표시되는 이벤트 파일들
- **파일 모달**: `.file-modal`에 구현된 이벤트 상세 뷰

## 문제 해결

1. 이미지가 보이지 않는 경우:
   - `public/images/` 폴더에 이미지 파일이 올바르게 추가되었는지 확인
   - 이미지 경로가 `${process.env.PUBLIC_URL}/images/파일명.jpg` 형식인지 확인

2. 아이콘이 표시되지 않는 경우:
   - Font Awesome이 올바르게 로드되었는지 확인
   - `public/index.html`에 Font Awesome CSS 링크가 있는지 확인

3. 배포 후 변경사항이 보이지 않는 경우:
   - `--no-history` 옵션을 사용하여 다시 배포해보세요:
   ```bash
   npx gh-pages --no-history -d build
   ```