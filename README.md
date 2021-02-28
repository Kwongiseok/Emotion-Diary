# 📖 Emotion Diary 감정 일기

---

<이미지>

- 하루를 기록하는 온라인 일기장 입니다.
- 오늘 하루 어땠는 지 적고 사진을 저장할 수 있습니다.
- 일기장에 담긴 나의 기분을 분석하고, 어떤 하루였는 지 보여줄 수 있습니다.
- 자신의 감정을 솔직하게 드러내고, 기록할 수 있습니다.

## 🏁 How to start project

1. Local 환경에서 실행하는 것을 가정했을 때 필요한 것들
   1-1) Firebase API Key
   1-2) Google Cloud API Key
   1-3) Cloudinary Image Upload URL
   <br>
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
