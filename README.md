# Taewan Goo's Time Machine

이 웹사이트는 Mac의 Time Machine UI를 모방하여 만든 개인 포트폴리오/타임라인 웹사이트입니다.

## 기능 설명

### Time Machine 인터페이스

- 오른쪽에 위치한 하얀색 타임라인 바를 통해 연도별로 이동할 수 있습니다.
- 타임라인 바에는 각 연도가 표시되며, 현재 선택된 연도가 가장 크게 보입니다.
- 타임라인은 원근감 효과를 갖고 있어 현재 연도에서 멀어질수록 연도 마커가 작아집니다.

### 파일 시스템 창

- 중앙에 위치한 파일 시스템 창은 선택한 연도의 이벤트를 파일 형태로 보여줍니다.
- 각 파일은 해당 이벤트의 카테고리에 따라 색깔로 구분됩니다.
- 파일을 클릭하면 해당 이벤트의 상세 내용을 볼 수 있는 팝업 창이 열립니다.

### 카테고리 시스템

- 왼쪽 사이드바에 있는 카테고리 목록을 통해 이벤트를 필터링할 수 있습니다.
- 카테고리는 Academic(학업), Books(독서), Activity(활동), Software Development(개발)로 구분됩니다.
- 각 카테고리는 고유한 색상을 가지고 있어 쉽게 구분할 수 있습니다.

## 이미지 파일 교체하기

- `images` 폴더에 있는 각 이미지 파일을 실제 이미지로 교체하면 더 개인화된 웹사이트를 만들 수 있습니다:
  - `stars-bg.jpg`: 배경 이미지
  - `university.png`, `book.png`, `running.png`: 각 카테고리별 아이콘
  - `handong-university.jpg`, `the-stranger.jpg`, `hwaseong-marathon.jpg`: 이벤트별 이미지

## 이벤트 추가하기

새로운 이벤트를 추가하려면 `script.js` 파일의 `timelineData.events` 배열에 새 객체를 추가하세요:

```javascript
{
    id: '고유ID',
    title: '이벤트 제목',
    category: '카테고리', // 'academic', 'books', 'activity', 'development' 중 하나
    date: 'YYYY-MM-DD',
    year: YYYY, // 연도 숫자
    icon: '아이콘파일명.png',
    content: `
        <img src="images/이미지파일명.jpg" alt="대체텍스트">
        <p>이벤트 상세 내용입니다...</p>
    `
}
```

## 변경 기록

- 2025.05.06: 초기 버전 생성