import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postsRouter from "./routes/posts.js";

const app = express();

mongoose.connect(
  "mongodb+srv://nurjahon:IjUzvU0U0MISiUWV@cluster0.pldf8lr.mongodb.net/Cluster0?retryWrites=true&w=majority"
);

app.use(bodyParser.json());
app.use(cors());
app.use("/api/posts", postsRouter);

app.listen(3001, () => {
  console.log("listening on 3001");
});
