## React를 사용해 메모장을 개발 ##
-뷰
 메모리스트화면
 메모상세화면

-기능
 메모리스트조회
 메모상세조회
 메모추가
 메모수정
 메모삭제

### Files ###
- App.js: 메모데이터와 메모기능를 구현한 최상위 파일
- MemoList.js: 메모리스트조회와
               메모상세조회를 위한 메모선택, 삭제기능 구현한 파일
- MemoDetail.js: 메모상세조회와 메모추가,수정기능 구현한 파일

### Install & Run ###
[배포실행]
 https://carrykim.github.io/memopad/

[로컬실행]
-git clone https://github.com/CarryKim/memopad.git
-Install Node.js
-node -v
-npm install -g create-react-app
-npx create-react-app memopad(name of project)
-npm install react-router-dom
-npm start
-http://localhost:3000
