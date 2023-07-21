import express from "express";
import { getAll, createPost, getOnePost } from "../controllers/index.js";
const postsRouter = express.Router();

postsRouter.get("/", getAll);
postsRouter.get("/:id", getOnePost);
postsRouter.post("/", createPost);

export default postsRouter;
