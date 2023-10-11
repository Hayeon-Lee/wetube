# youtube clone coding

youtube를 클론코딩하면서 아래와 같은 기술 스택을 학습합니다.

front-end: HTML5, CSS3, Pug

back-end: NodeJS, MongoDB, Express

20231011 시점: **npm run dev** 입력 시 실행

---
### 홈페이지 라우팅 주소 목록
|글로벌 라우팅 주소|목적|
|:----------|:---|
|/|Home|
|/join|회원가입|
|/login|로그인|
|/search|검색|

|유저 라우팅 주소|목적|
|:---------------|:---|
|/users/:id|user 디테일 정보|
|/users/logout|로그아웃|
|/users/edit|유저 프로필 수정|
|/users/delete|유저 삭제|

|비디오 라우팅 주소|목적|
|:----------------|:---|
|/videos/upload|비디오 업로드|
|/videos/:id|해당 비디오 시청|
|/videos/:id/edit|비디오 수정|
|/videos/:id/delete|비디오 삭제|

---
### 프로그램 파일 구조

* server.js

    * const app = express()로 express 애플리케이션 생성
        
    * app.set("view engine", "pug")로 pug 뷰 엔진 설정
        
    * app.set("views", process+cwd() + "/src/views") 설정으로 애플리케이션이 뷰를 찾을 때 현재 작업 중인 디렉토리/src/views로 이동하여 찾을 수 있게끔 함
        
    * app.use(express.urlencoded({extended: true}}); 로 post에서 body에 속성이 저장될 수 있게끔 함
        
    * 토대가 되는 라우터 연결 (globalRouter, userRouter, videoRouter)

* db.js, init.js

    * db.js: mongodb 연결을 진행한다.

    * init.js: server.js에서 export한 app을 import 하여 app.listen() 실행한다.


* views 폴더: 사용자에게 보이는 웹페이지들인 pug 파일들이 있다.
  
    * base.pug 가 기본 파일이며, 모든 파일이 이 파일을 extends한다.
      
    * base.pug는 partials에 있는 화면 구성 요소를 include 하여 사용한다.

    * mixins: 반복되는 html 덩어리를 어디든지 사용할 수 있게 함수로 반환, 여기서는 비디오 목록을 반환하는 video.pug가 있다.
 
    * link(rel="stylesheet" href="https://unpkg.com/mvp.css") 를 head에 정의하여 스타일을 조금 더 낫게 만들어두었다. (20231011 시점)


* routers 폴더: server.js에서 연결한 토대 라우터들이 정의되어 있다.
  
    * globalRouter, userRouter, videoRouter 존재
 
    * 각 라우터들은 controllers에서 export된 함수들을 import 하여 각 라우터(주소)에 연결한다.
 
    * globalRouter.route("/").get(getHome).post(postHome) 으로 get과 post 요청을 한 줄에 입력할 수도 있고, globalRouter.get("/") 과 globalRouter.post("/")으로 나눠 적을 수도 있다.
 

* controllers 폴더: 각 라우터에 export될 함수들이 정의된다. 이곳에서 각 라우터(주소)에 접속했을 때 행동되는 이벤트들이 정의된다. 또한 Video DB 모델을 import하여 Video.find()나 Video.create()등 몽고에서 제공하는 DB 함수를 이용한다.


* models 폴더

    * Video.js에서 mongodb에 저장될 데이터의 스키마를 정의한다. 또는 전역적으로 사용 가능한 static 함수도 정의되어있다. 이 스키마를 이용하여 Video 라는 model 생성 후 export 한다.



