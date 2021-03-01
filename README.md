# 📖 Emotion Diary 감정 일기

---

![메인화면](https://user-images.githubusercontent.com/18898526/109449615-3d74b180-7a8c-11eb-9e44-5f5e49fc53af.gif)

- 하루를 기록하는 온라인 일기장 입니다.
- 오늘 하루 어땠는 지 적고 사진을 저장할 수 있습니다.
- 일기장에 담긴 나의 기분을 분석하고, 어떤 하루였는 지 보여줄 수 있습니다.
- 자신의 감정을 솔직하게 드러내고, 기록할 수 있습니다.

## 🔗 Link

- [Emotion Diary](https://603b38a0bf1ef7849dca85f7--emotion-diary.netlify.app/)
  </br>
- [Frontend code](https://github.com/Kwongiseok/Emotion-Diary)
  </br>
- [Backend code](https://github.com/Kwongiseok/Emotion-Diary-Back)

## 🏁 How to start project

---

1. Local 환경에서 실행하는 것을 가정했을 때 필요한 것들
   1-1) Firebase API Key
   1-2) Google Cloud API Key
   1-3) Cloudinary Image Upload URL
   </br>
2. Git Clone & 실행

- Frontend

```js
  #1 git clone
  git clone https://github.com/Kwongiseok/Emotion-Diary.git

  #2 Firebase API Key
  https://console.firebase.google.com/?hl=ko 로 접속하여 API Key를 생성

  #3 Cloudinary Image Upload URL 생성

  #4 최상단 디렉토리에 .env 파일 (환경 변수 관리) 파일을 생성
  .env 파일 내에 생성한 Firebase Key, Cloudinary Upload URL을 변수로 대입
  REACT_APP_FIREBASE_API_KEY = "your API key"
  REACT_APP_FIREBASE_PROJECT_ID = "your Project ID key"
  REACT_APP_FIREBASE_STORAGE_BUCKET = "your Storage Bucket key"
  REACT_APP_FIREBASE_DATABASE_URL = "your Database Url key"
  REACT_APP_FIREBASE_APP_ID = "your App ID key"
  REACT_APP_FIREBASE_AUTH_DOMAIN = "your Auth Domain key"
  REACT_APP_CLOUDINARY_URL = "your Cloudinary URL"

  #5 npm install

  #6 npm start
```

- Backend

```js
 #1 git clone https://github.com/Kwongiseok/Emotion-Diary-Back.git

 #2 Google Cloud Project 생성 혹은 선택, 프로젝트에서 Google Natural Language API를 사용 설정합니다.

 #3 Google Cloud Key
 https://cloud.google.com/?hl=ko
 위 주소로 접속하여 비공개 cloud API key JSON으로 다운로드 합니다.

 #4 해당 폴더가 있는 경로에서 환경변수 설정합니다.
export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/my-key.json"

 #5 npm install

 #6 npm start
```

## 💪 감정 일기를 만든 이유

---

우리가 보내는 하루들이 대부분 평범한 날들이라 느껴질 겁니다.
평범한 하루들이 쌓여 지금의 내가 만들어진 것처럼
결코 평범하다고 해서 가볍고 당연한 날들은 아닐 겁니다.

많이 힘들었던 날, 행복하고 즐거웠던 날, 또 아무일이 없던 날이라도, 내가 지내온 중요한 나날들을 사진과 함께 기록하고 싶어 일기장을 만들기로 했습니다.

또, 일기는 그 날의 좋았던 점과 나빴던 점을 모두 담겨져 있어 온전히 나의 내면을 마주할 수 있는 좋은 수단이라 생각합니다.

내가 기록했던 날들의 감정을 분석하고, 그 날의 감정을 객관적으로 표현해줄 수 있는 기능을 추가한다면 좀 더 솔직한 감정을 마주할 수 있을거라 생각했습니다.

어디서든 쉽게 작성하고, 열어볼 수 있는 나만을 위한 일기장의 개발 목적입니다.

## 🙌🏼 Project Demo

#### 1. 로그인 화면

React의 createPortal을 사용하여 로그인 창을 새로운 DOM에 Rendering하는 것으로 구현했습니다. event를 등록해 로그인 창 외부를 클릭했을 때 닫히도록 했습니다.
![로그인화면](https://user-images.githubusercontent.com/18898526/109449757-96444a00-7a8c-11eb-9717-5714c0a5fba9.gif)

#### 2. 내 일기장 리스트

사진이 있을 경우 사진을, 사진이 없을 경우 제목을 preview 형식으로 볼 수 있습니다.
카드를 Hover하게되면 제목과 첫 줄의 내용이 보여집니다.
<img width="1502" alt="myDiarypage1" src="https://user-images.githubusercontent.com/18898526/109449990-2f736080-7a8d-11eb-9d28-891ff6ad71a5.png">
<img width="1503" alt="myDiarypage2" src="https://user-images.githubusercontent.com/18898526/109449993-30a48d80-7a8d-11eb-9bd6-e06a80cf077b.png">

#### 3. 일기 작성

일기 작성은 달력을 클릭하면 해당 날짜의 일기를 기록할 수 있습니다.
일기장 Form은 createPortal로 새로운 DOM에 그려줍니다.
달력에는 기록한 날들의 감정들이 함께 보여집니다.
![일기작성](https://user-images.githubusercontent.com/18898526/109450287-e40d8200-7a8d-11eb-8fe8-b0da21601475.gif)

#### 4. 감정 분석

감정 분석 이모티콘을 누르게 되면
작성한 일기 내용을 토대로 그 날의 감정을 나쁨 , 보통 , 좋음으로 나눠
이모지로 감정을 표현합니다.
![감정 분석](https://user-images.githubusercontent.com/18898526/109452990-4d908f00-7a94-11eb-84c6-51475fb0a7fe.gif)

#### 5. 일기장 열기

일기 카드를 클릭해서 일기장을 열었을 때
createPortal을 이용해 새로운 DOM위에 렌더링하였습니다.
일기장에는 수정하기 , 삭제 기능이 포함되어 있습니다.
<img width="1497" alt="일기장" src="https://user-images.githubusercontent.com/18898526/109453165-b4ae4380-7a94-11eb-9b00-0c70271ac1e8.png">
<img width="1495" alt="스크린샷 2021-03-01 오후 1 48 40" src="https://user-images.githubusercontent.com/18898526/109453225-ddced400-7a94-11eb-8909-f34865e1d1fc.png">

## 👨‍💻 Tech Stack

---

- Frontend
  |React|
  |---|
  |Hooks|
  |CSS Module|
  |Axios|
  |Firebase|
  |Antd|
  |Cloudinary|
  |date-fns|
  |createPortal|

- Backend
  |Node.js|
  |---|
  |Express|
  |Cors|
  |Google Cloud API|
  </br>

## 🥳 프로젝트 완성 후 소감

일기장의 로직은 간단하다 생각했지만, 일기의 특성상 **날짜**가 중요하다 보니 대부분의 컴포넌트들이 날짜로 묶이게 되었습니다. Hooks로만 상태관리를 하다보니 해당 달의 리스트를 받아오는 것, 달력을 작성할 날짜 등 props를 타고타고 넘어가는 경우가 있어 프로젝트가 복잡하게 진행된 것 같습니다.

복잡한 만큼 많은 컴포넌트들이 필요했고, 이를 하나하나 만들어냄으로써 리액트에 점점 더 익숙해질 수 있었습니다.

예를 들면 삭제나 수정 처럼 자잘한 애플리케이션 기능들은 쉬울 것 같았으나, 막상 구현하다 보니 마주하는 상태 관리로 인해 애를 먹기도 했습니다.

이론 상으로 알고 있던 것을 프로젝트를 통해 경험으로 녹여
낸 덕에 자신감을 얻기도 했고, 처음부터 끝까지 문제 해결을 찾아내고, 완성한 첫
리액트 프로젝트인 만큼 앞으로도 _'할 수 있다'_ 라는 생각이 들도록 만들어 준 기회였습니다.
