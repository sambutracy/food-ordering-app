import express, { Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";
import { env } from "process";
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(()=> console.log("Connected to Database!"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", MyUserRoute);


app.listen(7000, ()=> {
    console.log("server staterted on localhost:7000");
});
