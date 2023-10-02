import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express(); //create express application

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

//외부 접속을 listening 함
app.listen(PORT, () =>
  console.log(`✅ Server Listening on port http://localhost:${4000} 🚀`)
); //브라우저가 페이지를 request 한 뒤 받아서 나에게 갖다줌
