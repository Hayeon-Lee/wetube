import express from "express";

const app = express(); //create express application
const PORT = 4000;

//URL Logger : 방문 중인 URL을 기록(log) 한다.
const URLlogger = (req, res, next) => {
  console.log(`Path: ${req.path}`);
  next();
};

//요청의 일자 기록
const TimeLogger = (req, res, next) => {
  const date = new Date(Date.now());
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  console.log(`Time: ${year}.${month}.${day}`);
  next();
};

//프로토콜 별로 안전과 안전하지 않음을 확인
const SecurityLogger = (req, res, next) => {
  if (req.protocol === "https") console.log("Secure");
  else console.log("Insecure");
  next();
};

//protect 페이지 갈 시 안내
const ProtectorMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed😥</h1>");
  }
  next();
};

//어느 url에도 작동하는 글로벌 미들웨어를 만들어줌
//use가 반드시 get보다 먼저 쓰여야 함
app.use(URLlogger);
app.use(TimeLogger);
app.use(SecurityLogger);
app.use(ProtectorMiddleware);

//첫번째 인자는 req, 두번째 인자는 res
app.get("/", (req, res) => {
  return res.send("<h1>Hello This is my first node server👍</h1>"); //서버가 request를 끝냄
});

app.get("/login", (req, res) => {
  return res.send("<h1>Login here✅</h1>");
});

app.get("/contact", (req, res) => {
  return res.send("<h1>You can contact me📞</h1>");
});

app.get("/about", (req, res) => {
  return res.send("<h1>I'm studying NodeJS. So Happy 🥰</h1>");
});

app.get("/protected", (req, res) => {
  return res.send("<h1>Welcome to private lounge</h1>");
});

//외부 접속을 listening 함
app.listen(PORT, () =>
  console.log(`✅ Server Listening on port http://localhost:${4000} 🚀`)
); //브라우저가 페이지를 request 한 뒤 받아서 나에게 갖다줌
