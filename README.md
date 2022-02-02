# Mark your gradients

![logo](https://user-images.githubusercontent.com/48678872/152106982-84aa51a9-f4e8-48d8-9a74-2fa70d060e32.png)


## 🎨배포 사이트

 * [my Gradients](http://mygradients.s3-website.ap-northeast-2.amazonaws.com/gradation/#strawberry)

## 🎨프로젝트 개요

- myGradients는 그라데이션 색상을 추천해주는 사이트 입니다.
- 유저는 상단에 위치한 미니 컬러 블럭들을 선택하여 색상 카테고리에 맞는 그라데이션목록을 확인할 수 있습니다. 
- 그라데이션 디테일 페이지에서 CSS 코드를 확인하고 복사할 수 있으며, 로테이트 버튼으로 그라데이션 방향을 지정할 수 있습니다.
- 관심있는 그라데이션을 나만의 팔레트에 저장하여 편리하게 확인할 수 있습니다.
- 해당 서비스 특성상 PC웹 사용자가 주를 이룰 것으로 판단하여 PC웹 화면 기준으로 구현하였습니다.
- 해당 서비스는 *uiGradients* UI를 참고하였으며, 마이 팔레트 페이지 기능을 추가하고 UI를 개선하여 구현하였습니다.
[uiGradients - Beautiful colored gradients](https://uigradients.com/#KingYna)

---

## 🏃 멋쟁이 짱돌 팀

|박정훈|맹하령|안예은|황나희|
|:---:|:---:|:---:|:---:|
|[![박정훈깃헙](https://avatars.githubusercontent.com/u/59543469?v=4)](https://github.com/Jetty2020)|[![맹하령깃헙](https://avatars.githubusercontent.com/u/82393165?v=4)](https://github.com/UNI-Meang)|[![안예은깃헙](https://avatars.githubusercontent.com/u/48678872?v=4)](https://github.com/yeeSilver)| [![황나희깃헙](https://avatars.githubusercontent.com/u/52391780?v=4)](https://github.com/skgml0)|

---

## 📝 목표와 기능

- 헤더 : 
    * 그라데이션 방향 변경하는 버튼 구현
    * 원하는 그라데이션 My palette에 저장하는 버튼 구현
- 메인 페이지 :
    * 색상 카테고리 별 추천 그라데이션 목록 출력
    * 마우스 호버 시 색상 데이터 이름 출력
    * 색상 클릭 시 해당 색상 디테일 페이지로 이동
- 그라데이션 디테일 페이지 :
    * 추천 그라데이션 코드 확인 및 복사
    * 사이드 버튼 클릭 시 다음 색상 페이지로 이동
- 마이 팔레트 페이지 :
    * 저장 객체 최대 5개인 색상 저장 기능 구현
    * 5개 이상 저장 시에는 저장한 순서대로 삭제하고 마지막에 추가
    * 삭제 버튼 구현
    * 저장한 색상 페이지 출력

---

## 🌐 스택

- Front-End
    - HTML
    - CSS
    - JavaScript
- Deploy
    - AWS

---
## 📆 프로젝트 구조와 개발 일정
### ☑️ 프로젝트 구조
```
 ┣ 📂gradation                 // 그라데이션 디테일 페이지, 마이 팔레트 페이지
 ┃ ┣ 📜index.html
 ┃ ┗ 📜myPalette.html
 ┣ 📂src
 ┃ ┣ 📂css
 ┃   ┣ 📂screen                // 페이지별 css 폴더
 ┃   ┃ ┣ 📜gradientDetail.css
 ┃   ┃ ┣ 📜myPalette.css
 ┃   ┃ ┗ 📜main.css
 ┃   ┣ 📜components.css        // 공통 요소 css
 ┃   ┗ 📜reset.css
 ┃   📂data                    //컬러 색상 데이터
 ┃   ┗ 📜gradients.js
 ┃   📂img
 ┃   📂js
 ┃   ┣ 📜gradientDetail.js
 ┃   ┗ 📜main.js
 ┃ 
 ┣ 📜.prettierrc
 ┣ 📜header.html
 ┣ 📜index.html                // 랜딩페이지(메인 페이지)
 ┗ 📜README.md
```

### ☑️ 개발일정

- 기간 : 2021.12.16(목) ~ 2021.01.02(일)
- 프로젝트 회의 : 5일 (2021.12.16 ~ 2021.12.20)
    - 코드 컨벤션 및 커밋 컨벤션 설정
    - 프로젝트 구조 설정
    - 역할 분담
- UI 구현, json데이터 생성: 3일 (2021.12.23 ~2021.12.25 )
    - Header 컴포넌트 UI 구현
    - 그라데이션 디테일 페이지 UI 구현
    - 메인 페이지 UI 구현
    - 마이 팔레트 페이지 UI 구현
    - json 컬러 데이터 생성
- 핵심 기능 구현 : 6일 (2021.12.28 ~ 2021.1.3)
    - 메인페이지 js 구현
    - 그라데이션 디테일 페이지 js 구현
    - 마이 팔레트 페이지 js 구현
    - 페이지 연결

---

## ⚒️ 역할 분담과 기능 구현

### ☑️ 팀 리더 - 박정훈

- 코드 컨벤션 및 커밋 컨벤션 설정
- 협업을 위한 깃헙 튜토리얼 티칭
- 그라데이션 디테일 페이지 기능 구현
- 컴포넌트 css, html 모듈화
- 컬러 데이터 작업
- header 구현 (마이 팔레트 페이지로 이동하는 버튼, 그라데이션 로테이트 버튼)
- 메인 페이지, 그라데이션 디테일 페이지 코드 리뷰

### ☑️ 메인 페이지 - 안예은

- 색상 카테고리 클릭 시, 해당 카테고리에 등록된 그라데이션 색상 박스 출력
- 페이지 랜딩 시, 첫 번째 카테고리에 해당하는 그라데이션 목록을 출력
- 색상 박스 호버 시, 그라데이션 색상 이름 노출
- 컬러 데이터 추가 작업
- 리드 미 작성

### ☑️ 그라데이션 디테일 페이지 - 맹하령

- 색상 CSS 코드 출력
- 색상 CSS 코드 복사 기능 구현
- 버튼 클릭 시, 다음 색상 페이지로 이동

### ☑️ 마이 팔레트 페이지 - 황나희

- 로컬 스토리지에 선택한 색상 객체 저장하고 불러오기
- 마이 팔레트에 담은 순서대로 색상과 색상 이름 출력
- 색상 5개까지 저장 가능. 5개 이상 마이 팔레트에 추가할 시, 담은 순서대로 삭제하고 선택한 색상을 마지막에 추가
- 삭제 버튼 클릭 시, 저장 객체 모두 삭제
---
## 🖥️ UI

|**메인 페이지**|  |  |
|:---|:---|:---|
|색상 카테고리 클릭 시, 해당 목록 출력|클릭 시, 그라데이션 디테일 페이지로 이동|그라데이션 로테이트 버튼 클릭|
|![mainpage1](https://user-images.githubusercontent.com/48678872/152106873-66d59557-9fbe-41d3-b08e-9e945cc9df4d.gif)|![Hnet com-image](https://user-images.githubusercontent.com/48678872/152131910-c9c8a82c-ebf8-45c4-a0c3-3d71154a6083.gif)|![로테이트메인페이지](https://user-images.githubusercontent.com/48678872/152139151-fa7fbea9-dea4-45b8-b041-b7fb96a327fe.gif)|

|**그라데이션 디테일 페이지**|  |  |
|:---|:---|:---|
|CSS 코드 복사|버튼 클릭하여 다음 색상 페이지로 이동하고 마이 팔레트에 색상 저장|그라데이션 로테이트 버튼 클릭|
|![코드복사](https://user-images.githubusercontent.com/48678872/152135582-132e566e-5427-417a-b9b6-81d8e82b56f0.gif)|![버튼클릭팔레트저장](https://user-images.githubusercontent.com/48678872/152135405-265eb9dd-c5ae-4f2e-b904-cbb8b19b7713.gif)|![로테이트디테일페이지](https://user-images.githubusercontent.com/48678872/152139082-7b4aa7aa-66bc-4492-b967-60a75e0b26d7.gif)|

|**마이 팔레트 페이지**|  |  |
| --- | --- | --- |
| 색상 저장 후, 마이 팔레트 페이지 확인 | 5개 이상 색상 저장 시, 담은 순서대로 삭제하고 마지막에 추가 | 삭제 하기 |
|![팔레트1](https://user-images.githubusercontent.com/48678872/152143757-ab596cac-d159-4713-adf3-e7e75b710d60.gif)|![팔레트2](https://user-images.githubusercontent.com/48678872/152137467-71002ca7-4af9-46f5-ae1a-79c5528a3d48.gif)|![삭제](https://user-images.githubusercontent.com/48678872/152136202-4f6d63a4-20a0-4782-ae8e-9eac5ca92321.gif)|

---
## 💡프로젝트 회고
☑️ **박정훈**  
[박정훈 프로젝트 회고 블로그]()  
☑️ **맹하령**  
[맹하령 프로젝트 회고 블로그]()  
☑️ **안예은**   
[안예은 프로젝트 회고 블로그]()  
☑️ **황나희**  
[황나희 프로젝트 회고 블로그]() 
