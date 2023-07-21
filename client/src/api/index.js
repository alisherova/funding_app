import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001/api/posts",
});

export const getAllPosts = () => instance.get("/");

export const getPostById = (id) => instance.get(`/${id}`);
