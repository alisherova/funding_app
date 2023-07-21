import { getAllPosts, getPostById } from "../api";
import { useQuery } from "@tanstack/react-query";

export const getPosts = async () => {
  try {
    const posts = await getAllPosts();
    return posts.data;
  } catch (err) {
    console.log(err);
  }
};

export const usePosts = () => {
  return useQuery(["posts"], () => getPosts());
};

export const getDetailedPost = async (id) => {
  try {
    const post = await getPostById(id);
    return post.data;
  } catch (err) {
    console.log(err);
  }
};

export const useDetailedPost = (id) => {
  return useQuery(["post", id], () => getDetailedPost(id), { enabled: !!id });
};
