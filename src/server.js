import "./db";
import "./models/Video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express(); //create express application

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

const logger = morgan("dev");
app.use(logger);

app.use(express.urlencoded({ extended: true }));
//post에 body 속성이 추가되고 저장된다

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
