# Movie App 2021

본 프로젝트는 "Do it! 클론 코딩 영화 평점 웹서비스" 책의 강좌 내용을 바탕으로 확장하여 만든 React 웹서비스입니다.

영화 정보는 API를 통해 실시간으로 가져오고 있으며, 홈페이지는 `GitHub Pages`를 통해 배포중입니다.

### 강좌 이후 추가된 내용

- About 페이지에 내용 추가
- 영화 상세 내용 페이지
- 영화 상세 내용 페이지 내 토렌트 다운로드 링크 추가

### 고려중인 내용

- 연도별/평점별/장르별/언어별 필터 기능 추가 예정
- 나만의 무비 다이어리 : 평점 및 후기 등록 기능 추가 예정
- 해외 사이트인 yts 대신 [영화진흥위원회(KOFIC) API](https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do) 또는 네이버 검색 API 사용 고려

### 패치 노트

- 2021.07.13 강좌 수강 완료 
> `create-react-app`을 통해 React 웹앱 시작하기\
> `Axios`를 이용해 [영화 평점 사이트](https://yts.mx/api)로부터 영화 데이터 불러오기\
> `react-router-dom`을 통해 여러 페이지 routing 및 잘못된 접근에 대한 re-directing\
> CSS 스타일링 및 GitHub Pages로 URL 배포하기

- 2021.07.15 영화 상세 내용 페이지 구현
> Detail 컴포넌트 추가
> 포스터 이미지와 영화 제목(연도), 평점, 상영시간, 영화 언어, 시놉시스 등 출력
> 시놉시스 아래에 토렌트 다운로드 링크 추가
> 필터링 옵션 적용을 위한 밑작업( Home 컴포넌트에 state 추가)

### 참고 사이트

- [노마드 코더 무비앱](https://nomadcoders.github.io/movie_app_2019/#/)