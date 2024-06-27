import express from "express";
import connect from "./connect/connect.js";
import bodyParser from "body-parser";
import cors from "cors";
import rootRouter from "./routes/rootRouter.js";
import dotenv from "dotenv";
import passport from "passport";
import { initializePassport } from "./auth/auth.js";

// .env 파일에서 환경변수 불러오기
dotenv.config();
const { PORT } = process.env;

// MongoDB 연결
connect();

const app = express();
const port = PORT || 8000;

// bodyparser
app.use(bodyParser.json());
// app.use(express.json())

// cors 설정
// app.use() : 미들웨어로서, 어떤 요청이든 지정된 로직보다 먼저 작업한다, 즉 전처리이다.
// yarn add cors 필요
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: "*",
        method: ["GET", "POST", "DELETE", "PUT"],
        credential: true,
    })
);

// passport 로직 추가
app.use(passport.initialize());
initializePassport();

// 정적 파일 제공
app.use("/images", express.static("public/images"));

// 라우팅 처리
app.use("/", rootRouter);

// 서버 실행
app.listen(port, () => {
    console.log(`Server is on ${port} port!`);
});
