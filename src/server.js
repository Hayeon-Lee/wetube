import express from "express";

const app = express(); //create express application
const PORT = 4000;

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

//외부 접속을 listening 함
app.listen(PORT, () =>
  console.log(`✅ Server Listening on port http://localhost:${4000} 🚀`)
); //브라우저가 페이지를 request 한 뒤 받아서 나에게 갖다줌
